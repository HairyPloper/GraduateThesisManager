
namespace GraduateThesisManager.ModuleCourses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ModuleCourses.Courses")]
    [BasedOnRow(typeof(Entities.CoursesRow), CheckNames = true)]
    public class CoursesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String CourseName { get; set; }
        public String CourseDescription { get; set; }
        public String LecturerUsername { get; set; }
        public Int16 Year { get; set; }
        public Int16 Semester { get; set; }
    }
}