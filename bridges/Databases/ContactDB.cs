namespace Bridges.Databases;

using System;
using System.Linq;
using System.IO;
using System.Text.Json;
using System.Threading;
using Bridges.Shared;
using Bridges.Shared.Entities;

// Stores contacs
// WORK IN PROGRESS
public static class ContactDB
{
    const string name = "/data/contact.db";
    static int syncTimeout;
    static Thread syncThread;
    public static ContactDS DataStore;

    /// <summary>
    /// Start the database. Try to load from file,
    /// or start with blank store. 
    /// </summary>
    public static void Start(bool prod, int timeout)
    {
        DataStore = new ContactDS();
        DataStore.Modified = true;

        try
        {
            lock (DataStore)
            {
                using (var fd = File.OpenRead(name))
                {
                    DataStore = JsonSerializer.Deserialize<ContactDS>(fd);
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