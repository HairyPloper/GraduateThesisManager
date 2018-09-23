
using GraduateThesisManager.Thesis;

namespace GraduateThesisManager.Common.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("GraduateThesisManager"), Module("Common"), TableName("[dbo].[RegistrationStatus]")]
    [DisplayName("Registration Status"), InstanceName("Registration Status")]
    [ReadPermission(ThesisPermissionKeys.ThesisRegistration.Read)]
    [InsertPermission(ThesisPermissionKeys.ThesisRegistration.Insert)]
    [UpdatePermission(ThesisPermissionKeys.ThesisRegistration.Update)]
    [DeletePermission(ThesisPermissionKeys.ThesisRegistration.Delete)]
    [LookupScript]
    public sealed class RegistrationStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Status"), Size(50), NotNull, QuickSearch]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Status; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegistrationStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Status;
        }
    }
}
