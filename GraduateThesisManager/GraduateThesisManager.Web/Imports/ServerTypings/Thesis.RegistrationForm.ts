namespace GraduateThesisManager.Thesis {
    export interface RegistrationForm {
        User: Serenity.IntegerEditor;
        Thesis: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        CreateDate: Serenity.DateTimeEditor;
        ExpireDate: Serenity.DateTimeEditor;
        UserDisplayName: Serenity.StringEditor;
        ThesisThesisName: Serenity.StringEditor;
    }

    export class RegistrationForm extends Serenity.PrefixedContext {
        static formKey = 'Thesis.Registration';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegistrationForm.init)  {
                RegistrationForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.StringEditor;

                Q.initFormType(RegistrationForm, [
                    'User', w0,
                    'Thesis', w0,
                    'Status', w0,
                    'CreateDate', w1,
                    'ExpireDate', w1,
                    'UserDisplayName', w2,
                    'ThesisThesisName', w2
                ]);
            }
        }
    }
}

