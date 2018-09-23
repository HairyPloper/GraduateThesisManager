
using Serenity.Data.Mapping;

namespace GraduateThesisManager.Thesis.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Thesis.ThesisRegistration")]
    [BasedOnRow(typeof(Entities.ThesisRegistrationRow), CheckNames = true)]
    public class ThesisRegistrationColumns
    {
        [EditLink]
        public String UserDisplayName { get; set; }
        public String CourseName { get; set; }
        [QuickFilter()]
        [Hidden]
        public String CourseId { get; set; }

        public String ModuleName { get; set; }
        [QuickFilter()]
        [Hidden]
        public String ModuleId { get; set; }

        public String ThesisThesisName { get; set; }

        public Int32 LecturerName { get; set; }
        [QuickFilter()]
        [Width(150)]
        public DateTime CreateDate { get; set; }
        [Width(150)]
        public DateTime ExpireDate { get; set; }

        public String Status1 { get; set; }
        [Hidden,QuickFilter()]
        public Int32 Status { get; set; }
    }
}