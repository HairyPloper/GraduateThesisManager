
namespace GraduateThesisManager.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.RegistrationStatus")]
    [BasedOnRow(typeof(Entities.RegistrationStatusRow), CheckNames = true)]
    public class RegistrationStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Status { get; set; }
    }
}