namespace GraduateThesisManager.ModuleCourses {
    export interface ModulesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        HeadOfDepartment: Serenity.IntegerEditor;
    }

    export class ModulesForm extends Serenity.PrefixedContext {
        static formKey = 'ModuleCourses.Modules';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ModulesForm.init)  {
                ModulesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ModulesForm, [
                    'Name', w0,
                    'Description', w0,
                    'HeadOfDepartment', w1
                ]);
            }
        }
    }
}

