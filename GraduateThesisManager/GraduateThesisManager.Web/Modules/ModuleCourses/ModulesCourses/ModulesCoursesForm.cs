
using GraduateThesisManager.ModuleCourses.Entities;

namespace GraduateThesisManager.ModuleCourses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ModuleCourses.ModulesCourses")]
    [BasedOnRow(typeof(Entities.ModulesCoursesRow), CheckNames = true)]
    public class ModulesCoursesForm
    {
        [Hidden]
        public Int32 ModuleId { get; set; }
        [LookupEditor(typeof(CoursesRow), InplaceAdd = true)]
        public Int32 CourseId { get; set; }

        [Hidden]
        public String CourseCourseName { get; set; }
        [Hidden]
        public String CourseCourseDescription { get; set; }
        [Hidden]
        public Int32 CourseYear { get; set; }
        [Hidden]
        public Int32 CourseSemester { get; set; }
    }
}