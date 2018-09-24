
using System.Collections.Generic;

namespace GraduateThesisManager.ModuleCourses.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GraduateThesisManager"), Module("ModuleCourses"), TableName("[dbo].[Modules]")]
    [DisplayName("Modules"), InstanceName("Modules")]
    [ReadPermission(ModuleCoursesPermissionKeys.Modules.Read)]
    [InsertPermission(ModuleCoursesPermissionKeys.Modules.Insert)]
    [UpdatePermission(ModuleCoursesPermissionKeys.Modules.Update)]
    [DeletePermission(ModuleCoursesPermissionKeys.Modules.Delete)]
    [LookupScript]
    public sealed class ModulesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(50), NotNull,TextAreaEditor(Cols = 1,Rows = 10)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Head Of Department"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jHeadOfDepartment"), TextualField("HeadOfDepartmentUsername")]
        public Int32? HeadOfDepartment
        {
            get { return Fields.HeadOfDepartment[this]; }
            set { Fields.HeadOfDepartment[this] = value; }
        }

        [DisplayName("Head Of Department Username"), Expression("jHeadOfDepartment.[Username]")]
        public String HeadOfDepartmentUsername
        {
            get { return Fields.HeadOfDepartmentUsername[this]; }
            set { Fields.HeadOfDepartmentUsername[this] = value; }
        }

        [DisplayName("Head Of Department Display Name"), Expression("jHeadOfDepartment.[DisplayName]")]
        public String HeadOfDepartmentDisplayName
        {
            get { return Fields.HeadOfDepartmentDisplayName[this]; }
            set { Fields.HeadOfDepartmentDisplayName[this] = value; }
        }

        [DisplayName("Head Of Department Email"), Expression("jHeadOfDepartment.[Email]")]
        public String HeadOfDepartmentEmail
        {
            get { return Fields.HeadOfDepartmentEmail[this]; }
            set { Fields.HeadOfDepartmentEmail[this] = value; }
        }

        [DisplayName("Head Of Department Source"), Expression("jHeadOfDepartment.[Source]")]
        public String HeadOfDepartmentSource
        {
            get { return Fields.HeadOfDepartmentSource[this]; }
            set { Fields.HeadOfDepartmentSource[this] = value; }
        }

        [DisplayName("Head Of Department Password Hash"), Expression("jHeadOfDepartment.[PasswordHash]")]
        public String HeadOfDepartmentPasswordHash
        {
            get { return Fields.HeadOfDepartmentPasswordHash[this]; }
            set { Fields.HeadOfDepartmentPasswordHash[this] = value; }
        }

        [DisplayName("Head Of Department Password Salt"), Expression("jHeadOfDepartment.[PasswordSalt]")]
        public String HeadOfDepartmentPasswordSalt
        {
            get { return Fields.HeadOfDepartmentPasswordSalt[this]; }
            set { Fields.HeadOfDepartmentPasswordSalt[this] = value; }
        }

        [DisplayName("Head Of Department Last Directory Update"), Expression("jHeadOfDepartment.[LastDirectoryUpdate]")]
        public DateTime? HeadOfDepartmentLastDirectoryUpdate
        {
            get { return Fields.HeadOfDepartmentLastDirectoryUpdate[this]; }
            set { Fields.HeadOfDepartmentLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Head Of Department User Image"), Expression("jHeadOfDepartment.[UserImage]")]
        public String HeadOfDepartmentUserImage
        {
            get { return Fields.HeadOfDepartmentUserImage[this]; }
            set { Fields.HeadOfDepartmentUserImage[this] = value; }
        }

        [DisplayName("Head Of Department Insert Date"), Expression("jHeadOfDepartment.[InsertDate]")]
        public DateTime? HeadOfDepartmentInsertDate
        {
            get { return Fields.HeadOfDepartmentInsertDate[this]; }
            set { Fields.HeadOfDepartmentInsertDate[this] = value; }
        }

        [DisplayName("Head Of Department Insert User Id"), Expression("jHeadOfDepartment.[InsertUserId]")]
        public Int32? HeadOfDepartmentInsertUserId
        {
            get { return Fields.HeadOfDepartmentInsertUserId[this]; }
            set { Fields.HeadOfDepartmentInsertUserId[this] = value; }
        }

        [DisplayName("Head Of Department Update Date"), Expression("jHeadOfDepartment.[UpdateDate]")]
        public DateTime? HeadOfDepartmentUpdateDate
        {
            get { return Fields.HeadOfDepartmentUpdateDate[this]; }
            set { Fields.HeadOfDepartmentUpdateDate[this] = value; }
        }

        [DisplayName("Head Of Department Update User Id"), Expression("jHeadOfDepartment.[UpdateUserId]")]
        public Int32? HeadOfDepartmentUpdateUserId
        {
            get { return Fields.HeadOfDepartmentUpdateUserId[this]; }
            set { Fields.HeadOfDepartmentUpdateUserId[this] = value; }
        }

        [DisplayName("Head Of Department Is Active"), Expression("jHeadOfDepartment.[IsActive]")]
        public Int16? HeadOfDepartmentIsActive
        {
            get { return Fields.HeadOfDepartmentIsActive[this]; }
            set { Fields.HeadOfDepartmentIsActive[this] = value; }
        }
        public List<ModulesCoursesRow> CoursesList
        {
            get { return Fields.CoursesList[this]; }
            set { Fields.CoursesList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ModulesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public Int32Field HeadOfDepartment;

            public StringField HeadOfDepartmentUsername;
            public StringField HeadOfDepartmentDisplayName;
            public StringField HeadOfDepartmentEmail;
            public StringField HeadOfDepartmentSource;
            public StringField HeadOfDepartmentPasswordHash;
            public StringField HeadOfDepartmentPasswordSalt;
            public DateTimeField HeadOfDepartmentLastDirectoryUpdate;
            public StringField HeadOfDepartmentUserImage;
            public DateTimeField HeadOfDepartmentInsertDate;
            public Int32Field HeadOfDepartmentInsertUserId;
            public DateTimeField HeadOfDepartmentUpdateDate;
            public Int32Field HeadOfDepartmentUpdateUserId;
            public Int16Field HeadOfDepartmentIsActive;

            public ListField<ModulesCoursesRow> CoursesList;
        }
    }
}
