
namespace GraduateThesisManager.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.RegistrationStatus")]
    [BasedOnRow(typeof(Entities.RegistrationStatusRow), CheckNames = true)]
    public class RegistrationStatusForm
    {
        public String Status { get; set; }
    }
}