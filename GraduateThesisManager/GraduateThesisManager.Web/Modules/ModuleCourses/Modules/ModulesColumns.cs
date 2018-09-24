
using Serenity.Data.Mapping;

namespace GraduateThesisManager.ModuleCourses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ModuleCourses.Modules")]
    [BasedOnRow(typeof(Entities.ModulesRow), CheckNames = true)]
    public class ModulesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        [QuickSearch()]
        public String Name { get; set; }
        [QuickSearch()]
        public String Description { get; set; }
        public String HeadOfDepartmentDisplayName { get; set; }
    }
}