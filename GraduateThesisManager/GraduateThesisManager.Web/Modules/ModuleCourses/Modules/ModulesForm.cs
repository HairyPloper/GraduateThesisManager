
namespace GraduateThesisManager.ModuleCourses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ModuleCourses.Modules")]
    [BasedOnRow(typeof(Entities.ModulesRow), CheckNames = true)]
    public class ModulesForm
    {

        [Tab("Module info")]
        [Category("Module ")]
        [EditLink]
        [DisplayName("Name")]
        public String Name { get; set; }
        [DisplayName("Description")]
        public String Description { get; set; }
        [DisplayName("Head of Department")]
        public String HeadOfDepartmentDisplayName { get; set; }

        [Tab("Courses")]
        [Category("Courses")]
        [ModulesCoursesEditor]
        [DisplayName("Courses")]
        public List<Entities.ModulesCoursesRow> CoursesList { get; set; }
    }
}