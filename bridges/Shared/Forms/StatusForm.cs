namespace Bridges.Shared.Forms;

public record StatusForm
{
    public uint Code { get; set; }
    public string Message { get; set; }

    public StatusForm(uint c)
    {
        this.Code = c;
        this.Message = "";
    }
    public StatusForm(uint c, string m)
    {
        this.Code = c;
        this.Message = m;
    }
}
