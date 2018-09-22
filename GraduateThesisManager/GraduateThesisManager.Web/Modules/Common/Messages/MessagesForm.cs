
using GraduateThesisManager.Administration.Entities;

namespace GraduateThesisManager.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.Messages")]
    [BasedOnRow(typeof(Entities.MessagesRow), CheckNames = true)]
    public class MessagesForm
    {
        [Tab("Info")]
        [Category("User info")]
        [ReadOnly(true)] 
        public string IdFromUsername { get; set; }
        [Hidden]
        public Int32 IdFrom { get; set; }
        public DateTime SendDate { get; set; }
        [Category("Flags")]
        public Boolean IsImportant { get; set; }
        public Boolean IsChecked { get; set; }
        //[ReadOnly(true), DefaultValue("now")]
        //public DateTime ReadDate { get; set; }

        [Tab("Message")]
        [Category("Message")]
        public String Subject { get; set; }
        public String Message { get; set; }
    }
}