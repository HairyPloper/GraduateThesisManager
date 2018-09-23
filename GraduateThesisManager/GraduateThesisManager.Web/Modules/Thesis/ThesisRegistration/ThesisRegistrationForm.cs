
namespace GraduateThesisManager.Thesis.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Thesis.ThesisRegistration")]
    [BasedOnRow(typeof(Entities.ThesisRegistrationRow), CheckNames = true)]
    public class ThesisRegistrationForm
    {
        [Category("Registration Information")]
        [Hidden]
        public Int32 User { get; set; }
        [ReadOnly(true)]
        public String UserDisplayName { get; set; }

        [Hidden]
        public Int32 Thesis { get; set; }
        [ReadOnly(true)]
        public String ThesisThesisName { get; set; }

        public Int32 Status { get; set; }
        [DateTimeEditor(IntervalMinutes = 1)]
        [ReadOnly(true)]
        public DateTime CreateDate { get; set; }
        [DateTimeEditor(IntervalMinutes = 1)]
        public DateTime ExpireDate { get; set; }
        [ReadOnly(true)]
        public String LecturerName { get; set; }
    }
}