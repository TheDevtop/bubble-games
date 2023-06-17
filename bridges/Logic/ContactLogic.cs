using Bridges.Shared;
using Bridges.Shared.Entities;
using Bridges.Databases;
using System.Collections.Generic;

namespace Bridges.Logic;

static class ContactLogic
{
    public static Result<bool> ContactCreate(string user, Contact contact)
    {
        if (!ContactDB.DataStore.ContainsKey(user))
        {
            var clist = new List<Contact>();
            clist.Add(contact);
            ContactDB.DataStore[user] = clist;
            return new Result<bool>(true);
        }
        // This is rather unsafe...
        ContactDB.DataStore[user].Add(contact);
        return new Result<bool>(true);
    }

    public static Result<List<Contact>> ContactRead(string user)
    {
        if (!ContactDB.DataStore.ContainsKey(user))
        {
            var clist = new List<Contact>();
            ContactDB.DataStore[user] = clist;
            return new Result<List<Contact>>(clist);
        }
        return new Result<List<Contact>>(ContactDB.DataStore[user]);
    }
}