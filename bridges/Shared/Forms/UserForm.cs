namespace Bridges.Shared.Forms
{
    public record UserForm : Entities.User
    {
        public string Username { get; set; }
    }
}