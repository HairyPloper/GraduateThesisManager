
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
        [EditLink]
        [DisplayName("Course")]
        [Width(150)]
        public String CourseCourseName { get; set; }
        [DisplayName("Description")]
        [Width(300)]
        public String CourseCourseDescription { get; set; }
        [DisplayName("Year")]
        [Width(75)]
        public Int32 CourseYear { get; set; }
        [DisplayName("Semester")]
        [Width(75)]
        public Int32 CourseSemester { get; set; }
    }
}