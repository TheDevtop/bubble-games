using System.Collections.Generic;
using Bridges.Shared.Entities;

// These datastore classes are just to make my life easier.
namespace Bridges.Databases
{
    public class UserDS : SortedDictionary<string, User>
    {
        public bool Modified;
    }
    public class ContactDS : Dictionary<string, List<Contact>>
    {
        public bool Modified;
    }

    public class ChatDS : SortedDictionary<string, Queue<Message>>
    {

    }
}