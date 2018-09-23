namespace GraduateThesisManager.ModuleCourses {
    export interface ModulesCoursesForm {
        ModuleId: Serenity.IntegerEditor;
        CourseId: Serenity.IntegerEditor;
    }

    export class ModulesCoursesForm extends Serenity.PrefixedContext {
        static formKey = 'ModuleCourses.ModulesCourses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ModulesCoursesForm.init)  {
                ModulesCoursesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(ModulesCoursesForm, [
                    'ModuleId', w0,
                    'CourseId', w0
                ]);
            }
        }
    }
}

