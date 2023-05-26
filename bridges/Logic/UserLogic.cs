using System;
using Bridges.Shared;
using Bridges.Shared.Forms;
using Bridges.Shared.Entities;
using Bridges.Databases;

namespace Bridges.Logic
{
    static class UserLogic
    {
        public static Result<bool> CreateUser(string name, User u)
        {
            if (name.Length < 1 || name.Contains(" "))
            {
                return new Result<bool>(false, new Exception(LogicErrors.errBadChar));
            }
            if (u.Password.Length == 0)
            {
                return new Result<bool>(false, new Exception(LogicErrors.errBadChar));
            }
            if (UserDB.DataStore.ContainsKey(name))
            {
                return new Result<bool>(false, new Exception(LogicErrors.errNoCreate));
            }
            lock (Databases.UserDB.DataStore)
            {
                UserDB.DataStore[name] = u;
                UserDB.DataStore.Modified = true;
            }
            return new Result<bool>(true);
        }

        public static bool QuickLogin(string name, string password)
        {
            if (!UserDB.DataStore.ContainsKey(name))
            {
                return false;
            }
            if (UserDB.DataStore[name].Password != password)
            {
                return false;
            }
            return true;
        }

        public static bool IsRegistered(string name)
        {
            if (UserDB.DataStore.ContainsKey(name))
            {
                return true;
            }
            return false;
        }

        public static Result<User> LoginUser(string name, string password)
        {
            Result<User> ruser = new Result<User>();
            if (!UserDB.DataStore.ContainsKey(name))
            {
                ruser.Error = new Exception(LogicErrors.errNoEntry);
                return ruser;
            }
            if (UserDB.DataStore[name].Password != password)
            {
                ruser.Error = new Exception(LogicErrors.errPassDontMatch);
                return ruser;
            }
            ruser.Value = UserDB.DataStore[name];
            return ruser;
        }

    }
}