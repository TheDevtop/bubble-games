using System;
namespace Bridges
{
    static class Program
    {
        static void Main(string[] args)
        {
            var rng = new Random(10);
            Databases.UserDB.Start(true, rng.Next(30, 60));
            Databases.ContactDB.Start(true, rng.Next(30, 60));
            Databases.ChatDB.Start();
            Api.ApiServer.Start(args[0..]);
        }
    }
}
