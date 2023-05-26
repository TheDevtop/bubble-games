namespace Bridges.Databases;

// Stores all the messages that are yet to be received.
public static class ChatDB
{
    public static ChatDS DataStore;
    public static void Start()
    {
        DataStore = new ChatDS();
    }
}