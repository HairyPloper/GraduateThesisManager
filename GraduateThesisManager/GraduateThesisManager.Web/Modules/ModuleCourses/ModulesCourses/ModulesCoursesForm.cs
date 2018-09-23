
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
        public Int32 ModuleId { get; set; }
        public Int32 CourseId { get; set; }
    }
}