namespace Bridges.Api;

public static partial class ApiServer
{
    // The Routes class store all the valid API routes.
    static class Routes
    {
        public const string ping = "/ping";
        public const string templateUser = "/template/user";
        public const string templateChat = "/template/chat";
        public const string userCreate = "/user/create";
        public const string userLogin = "/user/login";
        public const string contactCreate = "/contact/create";
        public const string contactRead = "/contact/read";

        public const string chatSend = "/chat/send";
        public const string chatReceive = "/chat/receive";
    }
}