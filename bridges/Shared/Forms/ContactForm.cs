using System.Collections.Generic;
namespace Bridges.Shared.Forms;

public record ContactForm
{
    public AuthHeader Header { get; set; }
    public Entities.Contact Contact { get; set; }
}

public record ContactList
{
    public int Count { get; set; }
    public List<Entities.Contact> Contacts { get; set; }

    public ContactList(List<Entities.Contact> l)
    {
        this.Contacts = l;
        this.Count = l.Count;
    }
}