namespace GraduateThesisManager.Common {
    export interface MessagesForm {
        IdFrom: Serenity.IntegerEditor;
        SendDate: Serenity.DateEditor;
        IsImportant: Serenity.BooleanEditor;
        IsChecked: Serenity.BooleanEditor;
        Subject: Serenity.StringEditor;
        Message: Serenity.HtmlContentEditor;
    }

    export class MessagesForm extends Serenity.PrefixedContext {
        static formKey = 'Common.Messages';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MessagesForm.init)  {
                MessagesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.StringEditor;
                var w4 = s.HtmlContentEditor;

                Q.initFormType(MessagesForm, [
                    'IdFrom', w0,
                    'SendDate', w1,
                    'IsImportant', w2,
                    'IsChecked', w2,
                    'Subject', w3,
                    'Message', w4
                ]);
            }
        }
    }
}

