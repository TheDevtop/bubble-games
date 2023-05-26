namespace Bridges.Shared.Entities
{
    public record Contact
    {
        public string Name { get; set; }
        public Interest[] Commonalities { get; set; }
    }
}