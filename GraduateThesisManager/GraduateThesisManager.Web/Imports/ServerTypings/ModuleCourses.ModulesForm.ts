namespace GraduateThesisManager.ModuleCourses {
    export interface ModulesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        HeadOfDepartmentDisplayName: Serenity.StringEditor;
        CoursesList: ModulesCoursesEditor;
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
                var w1 = s.TextAreaEditor;
                var w2 = ModulesCoursesEditor;

                Q.initFormType(ModulesForm, [
                    'Name', w0,
                    'Description', w1,
                    'HeadOfDepartmentDisplayName', w0,
                    'CoursesList', w2
                ]);
            }
        }
    }
}

