
using GraduateThesisManager.Common;
using Serenity.Data.Mapping;

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
        [QuickSearch()]
        public String CourseName { get; set; }
        [QuickSearch()]
        public String CourseDescription { get; set; }
        public String LecturerUsername { get; set; }
        [QuickFilter()]
        [YearEditor]
        public Int16 Year { get; set; }
        [QuickFilter()]
        [SemesterEditor]
        public Int16 Semester { get; set; }
    }
}