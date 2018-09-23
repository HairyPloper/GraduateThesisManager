
namespace GraduateThesisManager.ModuleCourses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GraduateThesisManager"), Module("ModuleCourses"), TableName("[dbo].[Courses]")]
    [DisplayName("Courses"), InstanceName("Courses")]
    [ReadPermission(ModuleCoursesPermissionKeys.Courses.Read)]
    [InsertPermission(ModuleCoursesPermissionKeys.Courses.Insert)]
    [UpdatePermission(ModuleCoursesPermissionKeys.Courses.Update)]
    [DeletePermission(ModuleCoursesPermissionKeys.Courses.Delete)]
    [LookupScript]
    public sealed class CoursesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Course Name"), Size(50), NotNull, QuickSearch]
        public String CourseName
        {
            get { return Fields.CourseName[this]; }
            set { Fields.CourseName[this] = value; }
        }

        [DisplayName("Course Description"), Size(50), NotNull]
        public String CourseDescription
        {
            get { return Fields.CourseDescription[this]; }
            set { Fields.CourseDescription[this] = value; }
        }

        [DisplayName("Lecturer"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jLecturer"), TextualField("LecturerUsername")]
        public Int32? Lecturer
        {
            get { return Fields.Lecturer[this]; }
            set { Fields.Lecturer[this] = value; }
        }

        [DisplayName("Year"), NotNull]
        public Int16? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Semester"), NotNull]
        public Int16? Semester
        {
            get { return Fields.Semester[this]; }
            set { Fields.Semester[this] = value; }
        }

        [DisplayName("Lecturer Username"), Expression("jLecturer.[Username]")]
        public String LecturerUsername
        {
            get { return Fields.LecturerUsername[this]; }
            set { Fields.LecturerUsername[this] = value; }
        }

        [DisplayName("Lecturer Display Name"), Expression("jLecturer.[DisplayName]")]
        public String LecturerDisplayName
        {
            get { return Fields.LecturerDisplayName[this]; }
            set { Fields.LecturerDisplayName[this] = value; }
        }

        [DisplayName("Lecturer Email"), Expression("jLecturer.[Email]")]
        public String LecturerEmail
        {
            get { return Fields.LecturerEmail[this]; }
            set { Fields.LecturerEmail[this] = value; }
        }

        [DisplayName("Lecturer Source"), Expression("jLecturer.[Source]")]
        public String LecturerSource
        {
            get { return Fields.LecturerSource[this]; }
            set { Fields.LecturerSource[this] = value; }
        }

        [DisplayName("Lecturer Password Hash"), Expression("jLecturer.[PasswordHash]")]
        public String LecturerPasswordHash
        {
            get { return Fields.LecturerPasswordHash[this]; }
            set { Fields.LecturerPasswordHash[this] = value; }
        }

        [DisplayName("Lecturer Password Salt"), Expression("jLecturer.[PasswordSalt]")]
        public String LecturerPasswordSalt
        {
            get { return Fields.LecturerPasswordSalt[this]; }
            set { Fields.LecturerPasswordSalt[this] = value; }
        }

        [DisplayName("Lecturer Last Directory Update"), Expression("jLecturer.[LastDirectoryUpdate]")]
        public DateTime? LecturerLastDirectoryUpdate
        {
            get { return Fields.LecturerLastDirectoryUpdate[this]; }
            set { Fields.LecturerLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Lecturer User Image"), Expression("jLecturer.[UserImage]")]
        public String LecturerUserImage
        {
            get { return Fields.LecturerUserImage[this]; }
            set { Fields.LecturerUserImage[this] = value; }
        }

        [DisplayName("Lecturer Insert Date"), Expression("jLecturer.[InsertDate]")]
        public DateTime? LecturerInsertDate
        {
            get { return Fields.LecturerInsertDate[this]; }
            set { Fields.LecturerInsertDate[this] = value; }
        }

        [DisplayName("Lecturer Insert User Id"), Expression("jLecturer.[InsertUserId]")]
        public Int32? LecturerInsertUserId
        {
            get { return Fields.LecturerInsertUserId[this]; }
            set { Fields.LecturerInsertUserId[this] = value; }
        }

        [DisplayName("Lecturer Update Date"), Expression("jLecturer.[UpdateDate]")]
        public DateTime? LecturerUpdateDate
        {
            get { return Fields.LecturerUpdateDate[this]; }
            set { Fields.LecturerUpdateDate[this] = value; }
        }

        [DisplayName("Lecturer Update User Id"), Expression("jLecturer.[UpdateUserId]")]
        public Int32? LecturerUpdateUserId
        {
            get { return Fields.LecturerUpdateUserId[this]; }
            set { Fields.LecturerUpdateUserId[this] = value; }
        }

        [DisplayName("Lecturer Is Active"), Expression("jLecturer.[IsActive]")]
        public Int16? LecturerIsActive
        {
            get { return Fields.LecturerIsActive[this]; }
            set { Fields.LecturerIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CourseName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CoursesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CourseName;
            public StringField CourseDescription;
            public Int32Field Lecturer;
            public Int16Field Year;
            public Int16Field Semester;

            public StringField LecturerUsername;
            public StringField LecturerDisplayName;
            public StringField LecturerEmail;
            public StringField LecturerSource;
            public StringField LecturerPasswordHash;
            public StringField LecturerPasswordSalt;
            public DateTimeField LecturerLastDirectoryUpdate;
            public StringField LecturerUserImage;
            public DateTimeField LecturerInsertDate;
            public Int32Field LecturerInsertUserId;
            public DateTimeField LecturerUpdateDate;
            public Int32Field LecturerUpdateUserId;
            public Int16Field LecturerIsActive;
        }
    }
}
