namespace GraduateThesisManager.ModuleCourses {
    export interface CoursesForm {
        CourseName: Serenity.StringEditor;
        CourseDescription: Serenity.StringEditor;
        Lecturer: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        Semester: Serenity.IntegerEditor;
    }

    export class CoursesForm extends Serenity.PrefixedContext {
        static formKey = 'ModuleCourses.Courses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CoursesForm.init)  {
                CoursesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(CoursesForm, [
                    'CourseName', w0,
                    'CourseDescription', w0,
                    'Lecturer', w1,
                    'Year', w1,
                    'Semester', w1
                ]);
            }
        }
    }
}

