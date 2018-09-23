
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
        public String CourseName { get; set; }
        public String CourseDescription { get; set; }
        public Int32 Lecturer { get; set; }
        public Int16 Year { get; set; }
        public Int16 Semester { get; set; }
    }
}