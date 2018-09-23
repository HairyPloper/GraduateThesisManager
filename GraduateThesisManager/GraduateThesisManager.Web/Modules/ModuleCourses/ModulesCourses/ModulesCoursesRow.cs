
namespace GraduateThesisManager.ModuleCourses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GraduateThesisManager"), Module("ModuleCourses"), TableName("[dbo].[Modules_Courses]")]
    [DisplayName("Modules Courses"), InstanceName("Modules Courses")]
    [ReadPermission(ModuleCoursesPermissionKeys.ModulesCourses.Read)]
    [InsertPermission(ModuleCoursesPermissionKeys.ModulesCourses.Insert)]
    [UpdatePermission(ModuleCoursesPermissionKeys.ModulesCourses.Update)]
    [DeletePermission(ModuleCoursesPermissionKeys.ModulesCourses.Delete)]
    public sealed class ModulesCoursesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Module"), NotNull, ForeignKey("[dbo].[Modules]", "Id"), LeftJoin("jModule"), TextualField("ModuleName")]
        public Int32? ModuleId
        {
            get { return Fields.ModuleId[this]; }
            set { Fields.ModuleId[this] = value; }
        }

        [DisplayName("Course"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse"), TextualField("CourseCourseName")]
        public Int32? CourseId
        {
            get { return Fields.CourseId[this]; }
            set { Fields.CourseId[this] = value; }
        }

        [DisplayName("Module Name"), Expression("jModule.[Name]")]
        public String ModuleName
        {
            get { return Fields.ModuleName[this]; }
            set { Fields.ModuleName[this] = value; }
        }

        [DisplayName("Module Description"), Expression("jModule.[Description]")]
        public String ModuleDescription
        {
            get { return Fields.ModuleDescription[this]; }
            set { Fields.ModuleDescription[this] = value; }
        }

        [DisplayName("Module Head Of Department"), Expression("jModule.[HeadOfDepartment]")]
        public Int32? ModuleHeadOfDepartment
        {
            get { return Fields.ModuleHeadOfDepartment[this]; }
            set { Fields.ModuleHeadOfDepartment[this] = value; }
        }

        [DisplayName("Course Course Name"), Expression("jCourse.[CourseName]")]
        public String CourseCourseName
        {
            get { return Fields.CourseCourseName[this]; }
            set { Fields.CourseCourseName[this] = value; }
        }

        [DisplayName("Course Course Description"), Expression("jCourse.[CourseDescription]")]
        public String CourseCourseDescription
        {
            get { return Fields.CourseCourseDescription[this]; }
            set { Fields.CourseCourseDescription[this] = value; }
        }

        [DisplayName("Course Lecturer"), Expression("jCourse.[Lecturer]")]
        public Int32? CourseLecturer
        {
            get { return Fields.CourseLecturer[this]; }
            set { Fields.CourseLecturer[this] = value; }
        }

        [DisplayName("Course Year"), Expression("jCourse.[Year]")]
        public Int16? CourseYear
        {
            get { return Fields.CourseYear[this]; }
            set { Fields.CourseYear[this] = value; }
        }

        [DisplayName("Course Semester"), Expression("jCourse.[Semester]")]
        public Int16? CourseSemester
        {
            get { return Fields.CourseSemester[this]; }
            set { Fields.CourseSemester[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ModulesCoursesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ModuleId;
            public Int32Field CourseId;

            public StringField ModuleName;
            public StringField ModuleDescription;
            public Int32Field ModuleHeadOfDepartment;

            public StringField CourseCourseName;
            public StringField CourseCourseDescription;
            public Int32Field CourseLecturer;
            public Int16Field CourseYear;
            public Int16Field CourseSemester;
        }
    }
}
