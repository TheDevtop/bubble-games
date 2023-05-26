namespace Bridges.Api;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

public static partial class ApiServer
{
    static WebApplication wapp;
    static Shared.ApiHandler[] Registry = {
        new Shared.ApiHandler(Routes.ping, HttpMethods.Get, Implementor.ping),
        new Shared.ApiHandler(Routes.userCreate, HttpMethods.Post, Implementor.UserCreate),
        new Shared.ApiHandler(Routes.userLogin, HttpMethods.Post, Implementor.UserLogin),
        new Shared.ApiHandler(Routes.contactCreate, HttpMethods.Post, Implementor.ContactCreate),
        new Shared.ApiHandler(Routes.contactRead, HttpMethods.Get, Implementor.ContactRead),
        new Shared.ApiHandler(Routes.chatSend, HttpMethods.Post, Implementor.ChatSend),
        new Shared.ApiHandler(Routes.chatReceive, HttpMethods.Get, Implementor.ChatReceive)
    };

    public static void Start(string[] args)
    {
        wapp = WebApplication.CreateBuilder(args).Build();

        foreach (var entry in Registry)
        {
            switch (entry.Method)
            {
                case "GET":
                    wapp.MapGet(entry.Route, entry.Fn);
                    break;
                case "PUT":
                    wapp.MapPut(entry.Route, entry.Fn);
                    break;
                case "POST":
                    wapp.MapPost(entry.Route, entry.Fn);
                    break;
                default:
                    wapp.Logger.LogWarning($"Unknown method for route: {entry.Route}");
                    break;
            }
            wapp.Logger.LogInformation($"Initialized route: {entry.Route}");
        }

        wapp.Run();
    }
}