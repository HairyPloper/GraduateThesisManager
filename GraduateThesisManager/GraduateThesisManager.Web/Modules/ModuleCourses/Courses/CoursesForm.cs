
using GraduateThesisManager.Common;

namespace GraduateThesisManager.ModuleCourses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ModuleCourses.Courses")]
    [BasedOnRow(typeof(Entities.CoursesRow), CheckNames = true)]
    public class CoursesForm
    {
        [Category("Course")]
        public String CourseName { get; set; }
        public String CourseDescription { get; set; }
        [LookupEditor(typeof(ProfesorsLookUp))]
        public Int32 Lecturer { get; set; }
        [YearEditor]
        public Int16 Year { get; set; }
        [SemesterEditor]
        public Int16 Semester { get; set; }
    }
}