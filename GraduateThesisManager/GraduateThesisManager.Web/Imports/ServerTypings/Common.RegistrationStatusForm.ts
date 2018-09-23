namespace GraduateThesisManager.Common {
    export interface RegistrationStatusForm {
        Status: Serenity.StringEditor;
    }

    export class RegistrationStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Common.RegistrationStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegistrationStatusForm.init)  {
                RegistrationStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RegistrationStatusForm, [
                    'Status', w0
                ]);
            }
        }
    }
}

