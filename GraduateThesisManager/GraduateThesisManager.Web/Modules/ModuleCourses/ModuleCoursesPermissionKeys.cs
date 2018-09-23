
using Serenity.Extensibility;
using System.ComponentModel;

namespace GraduateThesisManager.ModuleCourses
{
    [NestedPermissionKeys]
    [DisplayName("ModuleCourses")]
    public class ModuleCoursesPermissionKeys
    {
        public class ModulesCourses
        {
            [Description("ModulesCourses Read")]
            public const string Read = "ModuleCourses:ModulesCourses:Read";
            [Description("ModulesCourses Insert")]
            public const string Insert = "ModuleCourses:ModulesCourses:Insert";
            [Description("ModulesCourses Update")]
            public const string Update = "ModuleCourses:ModulesCourses:Update";
            [Description("ModulesCourses Delete")]
            public const string Delete = "ModuleCourses:ModulesCourses:Delete";
        }
        public class Modules
        {
            [Description("Modules Read")]
            public const string Read = "ModuleCourses:Modules:Read";
            [Description("Modules Insert")]
            public const string Insert = "ModuleCourses:Modules:Insert";
            [Description("Modules Update")]
            public const string Update = "ModuleCourses:Modules:Update";
            [Description("Modules Delete")]
            public const string Delete = "ModuleCourses:Modules:Delete";
        }
        public class Courses
        {
            [Description("Courses Read")]
            public const string Read = "ModuleCourses:Courses:Read";
            [Description("Courses Insert")]
            public const string Insert = "ModuleCourses:Courses:Insert";
            [Description("Courses Update")]
            public const string Update = "ModuleCourses:Courses:Update";
            [Description("Courses Delete")]
            public const string Delete = "ModuleCourses:Courses:Delete";
        }
    }
}
