
namespace GraduateThesisManager.Thesis.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Thesis.Registration")]
    [BasedOnRow(typeof(Entities.ThesisRegistrationRow), CheckNames = false)]
    public class RegistrationForm
    {
        [Hidden]
        [DisplayName("UserId")]
        public Int32? User { get; set; }
        [Hidden]
        public Int32? Thesis { get; set; }
        [Hidden]
        [DisplayName("StatusId")]
        public Int32? Status { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [ReadOnly(true)]
        public DateTime? CreateDate { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [ReadOnly(true)]
        public DateTime? ExpireDate { get; set; }

        public String UserDisplayName { get; set; }
        public String ThesisThesisName { get; set; }

    }
}