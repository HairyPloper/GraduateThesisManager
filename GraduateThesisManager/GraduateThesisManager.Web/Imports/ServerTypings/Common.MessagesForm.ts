namespace GraduateThesisManager.Common {
    export interface MessagesForm {
        IdFromUsername: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.HtmlContentEditor;

                Q.initFormType(MessagesForm, [
                    'IdFromUsername', w0,
                    'IdFrom', w1,
                    'SendDate', w2,
                    'IsImportant', w3,
                    'IsChecked', w3,
                    'Subject', w0,
                    'Message', w4
                ]);
            }
        }
    }
}

