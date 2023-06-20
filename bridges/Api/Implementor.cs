using Microsoft.AspNetCore.Mvc;
using Bridges.Shared.Forms;
using Bridges.Shared.Entities;
using System.Text.Json;
using Bridges.Logic;

namespace Bridges.Api;
public static partial class ApiServer
{
    // The Implementor implements all the API functions.
    static class Implementor
    {
        public static string ping()
        {
            return "pong";
        }

        public static string TemplateUser()
        {
            return JsonSerializer.Serialize(UserLogic.Template());
        }
        public static string TemplateChat()
        {
            return JsonSerializer.Serialize(ChatLogic.Template());
        }

        public static string UserCreate([FromBody] UserForm uf)
        {
            User u = new User(uf.Password, uf.Interests);
            var result = UserLogic.CreateUser(uf.Username, u);
            if (result.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(1, result.Error.Message));
            }
            return JsonSerializer.Serialize(new StatusForm(0));
        }

        public static string UserLogin([FromBody] AuthHeader ah)
        {
            var result = UserLogic.LoginUser(ah.Username, ah.Password);
            if (result.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(1, result.Error.Message));
            }
            return JsonSerializer.Serialize(new StatusForm(0));
        }

        public static string ContactCreate([FromBody] ContactForm cf)
        {
            var loginResult = UserLogic.LoginUser(cf.Header.Username, cf.Header.Password);
            if (loginResult.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(1, loginResult.Error.Message));
            }
            var createResult = ContactLogic.ContactCreate(cf.Header.Username, cf.Contact);
            if (createResult.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(2, createResult.Error.Message));
            }
            return JsonSerializer.Serialize(new StatusForm(0));
        }

        public static string ContactRead([FromBody] AuthHeader ah)
        {
            var loginResult = UserLogic.LoginUser(ah.Username, ah.Password);
            if (loginResult.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(1, loginResult.Error.Message));
            }
            var readResult = ContactLogic.ContactRead(ah.Username);
            if (readResult.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(2, loginResult.Error.Message));
            }
            return JsonSerializer.Serialize(new ContactList(readResult.Value));
        }

        public static string ChatSend([FromBody] MessageForm mf)
        {
            var loginResult = UserLogic.LoginUser(mf.Header.Username, mf.Header.Password);
            if (loginResult.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(1, loginResult.Error.Message));
            }

            var msg = new Message();
            msg.From = mf.From;
            msg.Content = mf.Content;

            var sendResult = ChatLogic.SendMessage(msg);
            if (sendResult.Error != null)
            {
                return JsonSerializer.Serialize(new StatusForm(2, sendResult.Error.Message));
            }
            return JsonSerializer.Serialize(new StatusForm(0));
        }

        public static string ChatReceive([FromBody] AuthHeader ah)
        {
            var loginResult = UserLogic.LoginUser(ah.Username, ah.Password);
            if (loginResult.Error != null)
            {
                return JsonSerializer.Serialize(
                    new MessageList(
                        new StatusForm(1, loginResult.Error.Message),
                        new Message[0]
                    )
                );
            }
            var receiveResult = ChatLogic.ReceiveMessages(ah.Username);
            if (receiveResult.Error != null)
            {
                return JsonSerializer.Serialize(
                    new MessageList(
                        new StatusForm(2, receiveResult.Error.Message),
                         new Message[0]
                    )
                );
            }
            return JsonSerializer.Serialize(
                    new MessageList(
                        new StatusForm(0),
                        receiveResult.Value
                    )
                );
        }
    }

}