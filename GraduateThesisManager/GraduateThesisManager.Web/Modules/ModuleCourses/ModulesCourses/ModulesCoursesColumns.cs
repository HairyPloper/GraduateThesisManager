
namespace GraduateThesisManager.ModuleCourses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ModuleCourses.ModulesCourses")]
    [BasedOnRow(typeof(Entities.ModulesCoursesRow), CheckNames = true)]
    public class ModulesCoursesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String ModuleName { get; set; }
        public String CourseCourseName { get; set; }
    }
}