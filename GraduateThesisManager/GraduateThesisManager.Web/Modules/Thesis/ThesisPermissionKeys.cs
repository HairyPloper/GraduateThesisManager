
using Serenity.Extensibility;
using System.ComponentModel;

namespace GraduateThesisManager.Thesis
{
    [NestedPermissionKeys]
    [DisplayName("Thesis")]
    public class ThesisPermissionKeys
    {
        public class ThesisPool
        {
            [Description("ThesisPool Read")]
            public const string Read = "Thesis:ThesisPool:Read";
            [Description("ThesisPool Insert")]
            public const string Insert = "Thesis:ThesisPool:Insert";
            [Description("ThesisPool Update")]
            public const string Update = "Thesis:ThesisPool:Update";
            [Description("ThesisPool Delete")]
            public const string Delete = "Thesis:ThesisPool:Delete";
        }
        public class ThesisRegistration
        {
            [Description("ThesisRegistration Read")]
            public const string Read = "Thesis:ThesisRegistration:Read";
            [Description("ThesisRegistration Insert")]
            public const string Insert = "Thesis:ThesisRegistration:Insert";
            [Description("ThesisRegistration Update")]
            public const string Update = "Thesis:ThesisRegistration:Update";
            [Description("ThesisRegistration Delete")]
            public const string Delete = "Thesis:ThesisRegistration:Delete";
        }
    }
}
