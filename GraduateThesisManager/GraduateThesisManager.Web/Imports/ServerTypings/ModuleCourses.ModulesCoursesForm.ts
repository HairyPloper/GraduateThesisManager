namespace GraduateThesisManager.ModuleCourses {
    export interface ModulesCoursesForm {
        ModuleId: Serenity.IntegerEditor;
        CourseId: Serenity.LookupEditor;
        CourseCourseName: Serenity.StringEditor;
        CourseCourseDescription: Serenity.StringEditor;
        CourseYear: Serenity.IntegerEditor;
        CourseSemester: Serenity.IntegerEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ModulesCoursesForm, [
                    'ModuleId', w0,
                    'CourseId', w1,
                    'CourseCourseName', w2,
                    'CourseCourseDescription', w2,
                    'CourseYear', w0,
                    'CourseSemester', w0
                ]);
            }
        }
    }
}

