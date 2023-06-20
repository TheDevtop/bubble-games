using System.Collections.Generic;
namespace Bridges.Shared.Entities;

public record Message
{
    public string From { get; set; }
    public string To { get; set; }
    public string Content { get; set; }
}