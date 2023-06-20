using System;
using Bridges.Shared;
using Bridges.Shared.Entities;
using Bridges.Databases;
using System.Collections.Generic;

namespace Bridges.Logic;

static class ChatLogic
{
    public static ChatDS Template()
    {
        var cds = new ChatDS();
        var adminQueue = new Queue<Message>();
        var foobarQueue = new Queue<Message>();

        adminQueue.Enqueue(new Message
        {
            Content = "Lorem ipsum",
            From = "foobar"
        });

        foobarQueue.Enqueue(new Message
        {
            Content = "Hello, world!",
            From = "admin"
        });

        cds.Add("admin", adminQueue);
        cds.Add("foobar", foobarQueue);

        return cds;
    }
    public static Result<bool> SendMessage(Message msg)
    {
        // Check if the person whom sends the message is registered.
        var result = new Result<bool>();
        if (!UserLogic.IsRegistered(msg.From))
        {
            result.Error = new Exception(LogicErrors.errNoUser);
            return result;
        }
        // Check if the person whom gets the message is registered.
        if (!UserLogic.IsRegistered(msg.To))
        {
            result.Error = new Exception(LogicErrors.errNoUser);
            return result;
        }

        // Check for the target user
        if (ChatDB.DataStore.ContainsKey(msg.To))
        {
            ChatDB.DataStore[msg.To].Enqueue(msg);
        }
        else
        {
            lock (ChatDB.DataStore)
            {
                var queue = new Queue<Message>();
                queue.Enqueue(msg);
                ChatDB.DataStore.Add(msg.To, queue);
            }
        }

        // Do the same for the source user
        if (ChatDB.DataStore.ContainsKey(msg.From))
        {
            ChatDB.DataStore[msg.From].Enqueue(msg);
        }
        else
        {
            lock (ChatDB.DataStore)
            {
                var queue = new Queue<Message>();
                queue.Enqueue(msg);
                ChatDB.DataStore.Add(msg.From, queue);
            }
        }
        return result;
    }

    public static Result<Message[]> ReceiveMessages(string targetUser)
    {
        var result = new Result<Message[]>();
        if (!ChatDB.DataStore.ContainsKey(targetUser))
        {
            lock (ChatDB.DataStore)
            {
                var queue = new Queue<Message>();
                ChatDB.DataStore.Add(targetUser, queue);
            }
            result.Value = new List<Message>().ToArray();
            return result;
        }
        var msgList = new List<Message>();
        foreach (var msg in ChatDB.DataStore[targetUser])
        {
            msgList.Add(msg);
        }
        result.Value = msgList.ToArray();
        result.Error = null;
        return result;
    }
}