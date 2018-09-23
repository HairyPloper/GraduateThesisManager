namespace GraduateThesisManager.Thesis {
    export interface ThesisRegistrationForm {
        User: Serenity.LookupEditor;
        UserDisplayName: Serenity.StringEditor;
        Thesis: Serenity.LookupEditor;
        ThesisThesisName: Serenity.StringEditor;
        Status: Serenity.LookupEditor;
        CreateDate: Serenity.DateTimeEditor;
        ExpireDate: Serenity.DateTimeEditor;
        LecturerName: Serenity.StringEditor;
    }

    export class ThesisRegistrationForm extends Serenity.PrefixedContext {
        static formKey = 'Thesis.ThesisRegistration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ThesisRegistrationForm.init)  {
                ThesisRegistrationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;

                Q.initFormType(ThesisRegistrationForm, [
                    'User', w0,
                    'UserDisplayName', w1,
                    'Thesis', w0,
                    'ThesisThesisName', w1,
                    'Status', w0,
                    'CreateDate', w2,
                    'ExpireDate', w2,
                    'LecturerName', w1
                ]);
            }
        }
    }
}

