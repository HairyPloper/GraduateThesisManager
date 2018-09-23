
namespace GraduateThesisManager.Thesis.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Thesis.ThesisPool")]
    [BasedOnRow(typeof(Entities.ThesisPoolRow), CheckNames = true)]
    public class ThesisPoolColumns
    {
        [EditLink][Width(200)]
        public String ThesisName { get; set; }
        [Width(400)]
        public String ThesisDescription { get; set; }
        [QuickFilter()]
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public String CorseCourseName { get; set; }
        public  StringField CorseLecturer { get; set; }
    }
}