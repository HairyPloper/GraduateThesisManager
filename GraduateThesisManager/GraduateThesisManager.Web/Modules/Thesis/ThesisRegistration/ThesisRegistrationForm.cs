
using GraduateThesisManager.Administration.Entities;
using GraduateThesisManager.Common.Entities;
using GraduateThesisManager.Thesis.Entities;

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
        [LookupEditor(typeof(UserRow))]
        public Int32 User { get; set; }
        [ReadOnly(true)]
        public String UserDisplayName { get; set; }

        [Hidden]
        [LookupEditor(typeof(ThesisPoolRow))]
        public Int32 Thesis { get; set; }
        [ReadOnly(true)]
        public String ThesisThesisName { get; set; }

        [LookupEditor(typeof(RegistrationStatusRow))]
        public Int32 Status { get; set; }
        [DateTimeEditor(IntervalMinutes = 1)]
        [ReadOnly(true)]
        public DateTime CreateDate { get; set; }
        [DateTimeEditor(IntervalMinutes = 1)]
        [ReadOnly(true)]
        public DateTime ExpireDate { get; set; }
        [ReadOnly(true)]
        public String LecturerName { get; set; }
    }
}