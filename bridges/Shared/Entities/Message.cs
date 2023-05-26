using System.Collections.Generic;
namespace Bridges.Shared.Entities;

public record Message
{
    public string SourceUser { get; set; }
    public string MessageContent { get; set; }
}