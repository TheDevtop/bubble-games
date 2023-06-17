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
            MessageContent = "Lorem ipsum",
            SourceUser = "foobar"
        });

        foobarQueue.Enqueue(new Message
        {
            MessageContent = "Hello, world!",
            SourceUser = "admin"
        });

        cds.Add("admin", adminQueue);
        cds.Add("foobar", foobarQueue);

        return cds;
    }
    public static Result<bool> SendMessage(string targetUser, Message msg)
    {
        var result = new Result<bool>();
        if (!UserLogic.IsRegistered(targetUser))
        {
            result.Error = new Exception(LogicErrors.errNoUser);
            return result;
        }

        // Check for the target user
        if (ChatDB.DataStore.ContainsKey(targetUser))
        {
            ChatDB.DataStore[targetUser].Enqueue(msg);
        }
        else
        {
            lock (ChatDB.DataStore)
            {
                var queue = new Queue<Message>();
                queue.Enqueue(msg);
                ChatDB.DataStore.Add(targetUser, queue);
            }
        }

        // Do the same for the source user
        if (ChatDB.DataStore.ContainsKey(msg.SourceUser))
        {
            ChatDB.DataStore[msg.SourceUser].Enqueue(msg);
        }
        else
        {
            lock (ChatDB.DataStore)
            {
                var queue = new Queue<Message>();
                queue.Enqueue(msg);
                ChatDB.DataStore.Add(msg.SourceUser, queue);
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