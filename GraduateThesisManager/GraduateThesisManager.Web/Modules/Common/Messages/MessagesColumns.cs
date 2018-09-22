
using Mono.Cecil;
using Serenity.Data.Mapping;

namespace GraduateThesisManager.Common.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Common.Messages")]
    [BasedOnRow(typeof(Entities.MessagesRow), CheckNames = true)]
    public class MessagesColumns
    {
        [EditLink]
        [QuickSearch()]
        public String Subject { get; set; }
        [QuickSearch()]
        public String IdFromUsername { get; set; }
        [QuickFilter(), SortOrder(1, descending: true), Width(150)]
        public DateTime SendDate { get; set; }
        //[Width(150)]
        //public DateTime ReadDate { get; set; }
        [QuickFilter(), Hidden]
        public Boolean IsImportant { get; set; }
        [QuickFilter(), Hidden]
        public Boolean IsChecked { get; set; }

        [QuickFilter(), MessageHelperEditor]
        public string SentReacived { get; set; }
    }
}