
using GraduateThesisManager.ModuleCourses.Entities;

namespace GraduateThesisManager.Thesis.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GraduateThesisManager"), Module("Thesis"), TableName("[dbo].[ThesisPool]")]
    [DisplayName("Thesis Pool"), InstanceName("Thesis Pool")]
    [ReadPermission(ThesisPermissionKeys.ThesisPool.Read)]
    [InsertPermission(ThesisPermissionKeys.ThesisPool.Insert)]
    [UpdatePermission(ThesisPermissionKeys.ThesisPool.Update)]
    [DeletePermission(ThesisPermissionKeys.ThesisPool.Delete)]
    [LookupScript]
    public sealed class ThesisPoolRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Thesis Name"), Size(50), NotNull, QuickSearch]
        public String ThesisName
        {
            get { return Fields.ThesisName[this]; }
            set { Fields.ThesisName[this] = value; }
        }

        [DisplayName("Thesis Description"), Size(100),TextAreaEditor(Cols = 1,Rows = 10)]
        public String ThesisDescription
        {
            get { return Fields.ThesisDescription[this]; }
            set { Fields.ThesisDescription[this] = value; }
        }

        [DisplayName("Create Date"), NotNull]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
        }

        [DisplayName("Expire Date")]
        public DateTime? ExpireDate
        {
            get { return Fields.ExpireDate[this]; }
            set { Fields.ExpireDate[this] = value; }
        }

        [DisplayName("Corse"), NotNull, ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCorse"), TextualField("CorseCourseName")]
        [LookupEditor(typeof(CoursesRow))]
        public Int32? CorseId
        {
            get { return Fields.CorseId[this]; }
            set { Fields.CorseId[this] = value; }
        }

        [DisplayName("Thesis Document"), Size(4000)]
        [MultipleFileUploadEditor(FilenameFormat = "Thesis/ThesisPool/~", ScaleWidth = 800, ScaleHeight = 600)]
        public String ThesisDocument
        {
            get { return Fields.ThesisDocument[this]; }
            set { Fields.ThesisDocument[this] = value; }
        }

        [DisplayName("Corse Course Name"), Expression("jCorse.[CourseName]")]
        public String CorseCourseName
        {
            get { return Fields.CorseCourseName[this]; }
            set { Fields.CorseCourseName[this] = value; }
        }

        [DisplayName("Corse Course Description"), Expression("jCorse.[CourseDescription]")]
        public String CorseCourseDescription
        {
            get { return Fields.CorseCourseDescription[this]; }
            set { Fields.CorseCourseDescription[this] = value; }
        }

        [DisplayName("Corse Lecturer"), Expression("jCorse.[Lecturer]")]
        public Int32? CorseLecturer
        {
            get { return Fields.CorseLecturer[this]; }
            set { Fields.CorseLecturer[this] = value; }
        }

        [DisplayName("Corse Year"), Expression("jCorse.[Year]")]
        public Int16? CorseYear
        {
            get { return Fields.CorseYear[this]; }
            set { Fields.CorseYear[this] = value; }
        }

        [DisplayName("Corse Semester"), Expression("jCorse.[Semester]")]
        public Int16? CorseSemester
        {
            get { return Fields.CorseSemester[this]; }
            set { Fields.CorseSemester[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ThesisName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ThesisPoolRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ThesisName;
            public StringField ThesisDescription;
            public DateTimeField CreateDate;
            public DateTimeField ExpireDate;
            public Int32Field CorseId;
            public StringField ThesisDocument;

            public StringField CorseCourseName;
            public StringField CorseCourseDescription;
            public Int32Field CorseLecturer;
            public Int16Field CorseYear;
            public Int16Field CorseSemester;
        }
    }
}
