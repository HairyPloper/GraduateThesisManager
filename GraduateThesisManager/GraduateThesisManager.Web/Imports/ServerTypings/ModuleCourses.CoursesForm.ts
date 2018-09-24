namespace GraduateThesisManager.ModuleCourses {
    export interface CoursesForm {
        CourseName: Serenity.StringEditor;
        CourseDescription: Serenity.TextAreaEditor;
        Lecturer: Serenity.LookupEditor;
        Year: Common.YearEditor;
        Semester: Common.SemesterEditor;
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
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = Common.YearEditor;
                var w4 = Common.SemesterEditor;

                Q.initFormType(CoursesForm, [
                    'CourseName', w0,
                    'CourseDescription', w1,
                    'Lecturer', w2,
                    'Year', w3,
                    'Semester', w4
                ]);
            }
        }
    }
}

