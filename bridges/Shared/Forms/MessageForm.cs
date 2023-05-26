namespace Bridges.Shared.Forms;

public record MessageForm : Entities.Message
{
    public AuthHeader Header { get; set; }
    public string TargetUser { get; set; }
}

public record MessageList
{
    public StatusForm Status { get; set; }
    public int Count { get; set; }
    public Entities.Message[] Messages { get; set; }

    public MessageList(StatusForm sf, Entities.Message[] ma)
    {
        this.Status = sf;
        this.Count = ma.Length;
        this.Messages = ma;
    }
}