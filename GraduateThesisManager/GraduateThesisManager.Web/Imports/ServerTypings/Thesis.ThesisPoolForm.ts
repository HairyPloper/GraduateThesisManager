namespace GraduateThesisManager.Thesis {
    export interface ThesisPoolForm {
        ThesisName: Serenity.StringEditor;
        ThesisDescription: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        ExpireDate: Serenity.DateEditor;
        CorseId: Serenity.IntegerEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.MultipleImageUploadEditor;

                Q.initFormType(ThesisPoolForm, [
                    'ThesisName', w0,
                    'ThesisDescription', w0,
                    'CreateDate', w1,
                    'ExpireDate', w1,
                    'CorseId', w2,
                    'ThesisDocument', w3
                ]);
            }
        }
    }
}

