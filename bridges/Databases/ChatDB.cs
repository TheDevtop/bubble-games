namespace Bridges.Databases;

using System;
using System.IO;
using System.Text.Json;

// Stores all the messages that are yet to be received.
public static class ChatDB
{
    public static ChatDS DataStore;
    const string name = "/data/chat.db";

    /// <summary>
    /// Start the database. Try to load from file,
    /// or start with blank store. 
    /// </summary>
    public static void Start()
    {
        DataStore = new ChatDS();
        try
        {
            lock (DataStore)
            {
                using (var fd = File.OpenRead(name))
                {
                    DataStore = JsonSerializer.Deserialize<ChatDS>(fd);
                }
                Console.WriteLine($"{name}: Loaded store from file");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"{name}: \"{ex.Message}\", using blank store");
        }
        Console.WriteLine($"{name}: Started database");
    }

}