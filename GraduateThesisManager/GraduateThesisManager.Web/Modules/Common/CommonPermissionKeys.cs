
using Serenity.Extensibility;
using System.ComponentModel;

namespace GraduateThesisManager.Common
{
    [NestedPermissionKeys]
    [DisplayName("Common")]
    public class CommonPermissionKeys
    {
        public class Messages
        {
            [Description("Messages Read")]
            public const string Read = "Common:Messages:Read";
            [Description("Messages Insert")]
            public const string Insert = "Common:Messages:Insert";
            [Description("Messages Update")]
            public const string Update = "Common:Messages:Update";
            [Description("Messages Delete")]
            public const string Delete = "Common:Messages:Delete";
        }
    }
}
