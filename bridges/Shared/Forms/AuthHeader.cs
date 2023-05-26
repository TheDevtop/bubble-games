namespace Bridges.Shared.Forms;

public record AuthHeader
{
    public string Username { get; set; }
    public string Password { get; set; }

    public AuthHeader() { }
    public AuthHeader(string u, string p)
    {
        this.Username = u;
        this.Password = p;
    }
}