
using GraduateThesisManager.Administration.Entities;
using GraduateThesisManager.Common.Entities;
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

    [ConnectionKey("GraduateThesisManager"), Module("Thesis"), TableName("[dbo].[ThesisRegistration]")]
    [DisplayName("Thesis Registration"), InstanceName("Thesis Registration")]
    [ReadPermission(ThesisPermissionKeys.ThesisRegistration.Read)]
    [InsertPermission(ThesisPermissionKeys.ThesisRegistration.Insert)]
    [UpdatePermission(ThesisPermissionKeys.ThesisRegistration.Update)]
    [DeletePermission(ThesisPermissionKeys.ThesisRegistration.Delete)]
    public sealed class ThesisRegistrationRow : Row, IIdRow
    {
        [DisplayName("Id"), PrimaryKey,Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(UserRow))]
        public Int32? User
        {
            get { return Fields.User[this]; }
            set { Fields.User[this] = value; }
        }

        [DisplayName("Thesis"), NotNull, ForeignKey("[dbo].[ThesisPool]", "Id"), LeftJoin("jThesis"), TextualField("ThesisThesisName")]
        [LookupEditor(typeof(ThesisPoolRow))]
        public Int32? Thesis
        {
            get { return Fields.Thesis[this]; }
            set { Fields.Thesis[this] = value; }
        }

        [LookupEditor(typeof(RegistrationStatusRow))]
        [DisplayName("Status"), NotNull, ForeignKey("[dbo].[RegistrationStatus]", "Id"), LeftJoin("jStatus"), TextualField("Status1")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Create Date"), NotNull, DisplayFormat("G"), DateTimeFiltering(DisplayFormat = "G")]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
        }

        [DisplayName("Expire Date"), NotNull, DisplayFormat("G"), DateTimeFiltering(DisplayFormat = "G")]
        public DateTime? ExpireDate
        {
            get { return Fields.ExpireDate[this]; }
            set { Fields.ExpireDate[this] = value; }
        }

        [DisplayName("Student"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        [DisplayName("Thesis Name"), Expression("jThesis.[ThesisName]")]
        public String ThesisThesisName
        {
            get { return Fields.ThesisThesisName[this]; }
            set { Fields.ThesisThesisName[this] = value; }
        }

        [DisplayName("Thesis Thesis Description"), Expression("jThesis.[ThesisDescription]")]
        public String ThesisThesisDescription
        {
            get { return Fields.ThesisThesisDescription[this]; }
            set { Fields.ThesisThesisDescription[this] = value; }
        }

        [DisplayName("Registration date"), Expression("jThesis.[CreateDate]")]
        public DateTime? ThesisCreateDate
        {
            get { return Fields.ThesisCreateDate[this]; }
            set { Fields.ThesisCreateDate[this] = value; }
        }

        [DisplayName("Expiration time"), Expression("jThesis.[ExpireDate]")]
        public DateTime? ThesisExpireDate
        {
            get { return Fields.ThesisExpireDate[this]; }
            set { Fields.ThesisExpireDate[this] = value; }
        }

        [DisplayName("Thesis Corse Id"), Expression("jThesis.[CorseId]"), ForeignKey("[dbo].[Modules_Courses]", "CourseId"), LeftJoin("jModelCorse")]
        public Int32? ThesisCorseId
        {
            get { return Fields.ThesisCorseId[this]; }
            set { Fields.ThesisCorseId[this] = value; }
        }


        [DisplayName("Module"), Expression("jModelCorse.[ModuleId]"), ForeignKey("[dbo].[Modules]", "Id"), LeftJoin("jModels")]
        [LookupEditor(typeof(ModulesRow))]
        public Int32? ModuleId
        {
            get { return Fields.ModuleId[this]; }
            set { Fields.ModuleId[this] = value; }
        }
        [DisplayName("Course"), Expression("jModelCorse.[CourseId]"), ForeignKey("[dbo].[Courses]", "Id"), LeftJoin("jCourse")]
        [LookupEditor(typeof(CoursesRow))]
        public Int32? CourseId
        {
            get { return Fields.CourseId[this]; }
            set { Fields.CourseId[this] = value; }
        }
        [DisplayName("Module"), Expression("jModels.[Name]")]
        public String ModuleName
        {
            get { return Fields.ModuleName[this]; }
            set { Fields.ModuleName[this] = value; }
        }
        [DisplayName("Course"), Expression("jCourse.[CourseName]")]
        public String CourseName
        {
            get { return Fields.CourseName[this]; }
            set { Fields.CourseName[this] = value; }
        }
        [DisplayName("Lecturer"), Expression("jCourse.[Lecturer]"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jLecturer")]
        public Int32? LecturerId
        {
            get { return Fields.LecturerId[this]; }
            set { Fields.LecturerId[this] = value; }
        }
        [DisplayName("Lecturer"), Expression("jLecturer.[DisplayName]")]
        public String LecturerName
        {
            get { return Fields.LecturerName[this]; }
            set { Fields.LecturerName[this] = value; }
        }


        [DisplayName("Thesis Thesis Document"), Expression("jThesis.[ThesisDocument]")]
        public String ThesisThesisDocument
        {
            get { return Fields.ThesisThesisDocument[this]; }
            set { Fields.ThesisThesisDocument[this] = value; }
        }

        [DisplayName("Registration Status"), Expression("jStatus.[Status]")]
        public String Status1
        {
            get { return Fields.Status1[this]; }
            set { Fields.Status1[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ThesisRegistrationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field User;
            public Int32Field Thesis;
            public Int32Field Status;
            public DateTimeField CreateDate;
            public DateTimeField ExpireDate;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;

            public StringField ThesisThesisName;
            public StringField ThesisThesisDescription;
            public DateTimeField ThesisCreateDate;
            public DateTimeField ThesisExpireDate;
            public Int32Field ThesisCorseId;
            public StringField ThesisThesisDocument;

            public StringField Status1;
            public Int32Field ModuleId;
            public Int32Field CourseId;
            public StringField ModuleName;
            public StringField CourseName;
            public Int32Field LecturerId;
            public StringField LecturerName;
        }
    }
}
