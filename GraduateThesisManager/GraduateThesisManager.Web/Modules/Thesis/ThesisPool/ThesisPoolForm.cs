
namespace GraduateThesisManager.Thesis.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Thesis.ThesisPool")]
    [BasedOnRow(typeof(Entities.ThesisPoolRow), CheckNames = true)]
    public class ThesisPoolForm
    {
        [Category("Thesis Information")]
        public String ThesisName { get; set; }
        public String ThesisDescription { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        [QuickFilter()]
        public Int32 CorseId{ get; set; }
        public String ThesisDocument { get; set; }
    }
}