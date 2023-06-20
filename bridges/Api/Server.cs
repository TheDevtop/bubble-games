namespace Bridges.Api;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

public static partial class ApiServer
{
    static WebApplication wapp;
    static Shared.ApiHandler[] Registry = {
        new Shared.ApiHandler(Routes.ping, HttpMethods.Get, Implementor.ping),
        new Shared.ApiHandler(Routes.templateUser, HttpMethods.Get, Implementor.TemplateUser),
         new Shared.ApiHandler(Routes.templateChat, HttpMethods.Get, Implementor.TemplateChat),
        new Shared.ApiHandler(Routes.userCreate, HttpMethods.Post, Implementor.UserCreate),
        new Shared.ApiHandler(Routes.userLogin, HttpMethods.Post, Implementor.UserLogin),
        new Shared.ApiHandler(Routes.chatSend, HttpMethods.Post, Implementor.ChatSend),
        new Shared.ApiHandler(Routes.chatReceive, HttpMethods.Post, Implementor.ChatReceive)
    };

    public static void Start(string[] args)
    {

        var builder = WebApplication.CreateBuilder(args);

        // The old way
        builder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(policy =>
            {
                policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
        });

        wapp = builder.Build();
        wapp.Urls.Add("http://0.0.0.0:5000");

        // The new way
        wapp.UseCors(builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
        );

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
