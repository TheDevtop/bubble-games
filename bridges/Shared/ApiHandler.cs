namespace Bridges.Shared;

using System;

public record ApiHandler
{
    public string Route;
    public string Method;
    public Delegate Fn;

    public ApiHandler(string r, string m, Delegate f)
    {
        this.Route = r;
        this.Method = m;
        this.Fn = f;
    }
    public ApiHandler()
    {
        this.Route = null;
        this.Method = null;
        this.Fn = null;
    }
}