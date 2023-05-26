namespace Bridges.Databases;

using System;
using System.IO;
using System.Text.Json;
using System.Threading;


// This is the user and authentication database.
public static class UserDB
{
    const string name = "user.db";
    static int syncTimeout;
    static Thread syncThread;
    public static UserDS DataStore;

    /// <summary>
    /// Start the database. Try to load from file,
    /// or start with blank store. 
    /// </summary>
    public static void Start(bool prod, int timeout)
    {
        DataStore = new UserDS();
        DataStore.Modified = true;

        try
        {
            lock (DataStore)
            {
                using (var fd = File.OpenRead(name))
                {
                    DataStore = JsonSerializer.Deserialize<UserDS>(fd);
                }
                DataStore.Modified = false;
                Console.WriteLine($"{name}: Loaded store from file");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"{name}: \"{ex.Message}\", using blank store");
        }

        // Only do multithreading when in production mode
        if (prod)
        {
            syncThread = new Thread(Sync);
            syncTimeout = timeout;
            syncThread.Start();
        }

        Console.WriteLine($"{name}: Started database");
    }

    /// <summary>Synchronize datastore to filesystem</summary>
    static void Sync()
    {
        while (true)
        {
            Thread.Sleep(syncTimeout);
            if (DataStore.Modified)
            {
                Store();
            }
        }
    }

    public static void Store()
    {
        lock (DataStore)
        {
            using (var fd = File.OpenWrite(name))
            {
                JsonSerializer.Serialize(fd, DataStore);
            }
            Console.WriteLine($"{name}: Synchronized to filesystem");
            DataStore.Modified = false;
        }
    }

}