namespace GraduateThesisManager.Thesis {
    export interface ThesisPoolForm {
        ThesisName: Serenity.StringEditor;
        ThesisDescription: Serenity.TextAreaEditor;
        CreateDate: Serenity.DateEditor;
        ExpireDate: Serenity.DateEditor;
        CorseId: Serenity.LookupEditor;
        ThesisDocument: Serenity.MultipleImageUploadEditor;
    }

    export class ThesisPoolForm extends Serenity.PrefixedContext {
        static formKey = 'Thesis.ThesisPool';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ThesisPoolForm.init)  {
                ThesisPoolForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.MultipleImageUploadEditor;

                Q.initFormType(ThesisPoolForm, [
                    'ThesisName', w0,
                    'ThesisDescription', w1,
                    'CreateDate', w2,
                    'ExpireDate', w2,
                    'CorseId', w3,
                    'ThesisDocument', w4
                ]);
            }
        }
    }
}

