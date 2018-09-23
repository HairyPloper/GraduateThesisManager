
namespace GraduateThesisManager.ModuleCourses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ModuleCourses.Modules")]
    [BasedOnRow(typeof(Entities.ModulesRow), CheckNames = true)]
    public class ModulesForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public Int32 HeadOfDepartment { get; set; }
    }
}