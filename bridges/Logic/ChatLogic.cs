using System;
using Bridges.Shared;
using Bridges.Shared.Entities;
using Bridges.Databases;
using System.Collections.Generic;

namespace Bridges.Logic;

static class ChatLogic
{
    public static Result<bool> SendMessage(string targetUser, Message msg)
    {
        var result = new Result<bool>();
        if (!UserLogic.IsRegistered(targetUser))
        {
            result.Error = new Exception(LogicErrors.errNoUser);
            return result;
        }
        if (ChatDB.DataStore.ContainsKey(targetUser))
        {
            ChatDB.DataStore[targetUser].Enqueue(msg);
            return result;
        }
        lock (ChatDB.DataStore)
        {
            var queue = new Queue<Message>();
            queue.Enqueue(msg);
            ChatDB.DataStore.Add(targetUser, queue);
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
        lock (ChatDB.DataStore[targetUser])
        {
            ChatDB.DataStore[targetUser].Clear();
        }
        return result;
    }
}