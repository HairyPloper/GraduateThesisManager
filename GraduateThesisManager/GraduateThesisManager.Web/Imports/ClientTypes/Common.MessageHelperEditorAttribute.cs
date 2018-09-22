using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace GraduateThesisManager.Common
{
    public partial class MessageHelperEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "GraduateThesisManager.Common.MessageHelperEditor";

        public MessageHelperEditorAttribute()
            : base(Key)
        {
        }
    }
}

