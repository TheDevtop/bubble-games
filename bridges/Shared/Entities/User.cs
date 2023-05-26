namespace Bridges.Shared.Entities;

public enum Importance : byte
{
    veryNotImportant = 1,
    notImportant = 2,
    indifferent = 3,
    important = 4,
    veryImportant = 5
}

public record Interest
{
    public string Name { get; set; }
    public Importance Weight { get; set; }
    public Interest(string n, Importance w)
    {
        this.Name = n;
        this.Weight = w;
    }
    public Interest() { }
}

public record User
{
    public string Password { get; set; }
    public Interest[] Interests { get; set; }

    public User() { }
    public User(string p, Interest[] ia)
    {
        this.Password = p;
        this.Interests = ia;
    }
}