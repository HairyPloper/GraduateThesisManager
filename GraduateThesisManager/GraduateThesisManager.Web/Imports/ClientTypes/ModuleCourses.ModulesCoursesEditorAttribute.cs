using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GraduateThesisManager.ModuleCourses
{
    public partial class ModulesCoursesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GraduateThesisManager.ModuleCourses.ModulesCoursesEditor";

        public ModulesCoursesEditorAttribute()
            : base(Key)
        {
        }
    }
}

