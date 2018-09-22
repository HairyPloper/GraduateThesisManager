
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerClass()
    export class MessagesDialog extends Serenity.EntityDialog<MessagesRow, any> {
        protected getFormKey() { return MessagesForm.formKey; }

        protected getIdProperty() { return MessagesRow.idProperty; }

        protected getLocalTextPrefix() { return MessagesRow.localTextPrefix; }

        protected getNameProperty() { return MessagesRow.nameProperty; }

        protected getService() { return MessagesService.baseUrl; }

        protected form;
        private loadedState: string;

        constructor() {
            super();
            this.form = new MessagesForm(this.idPrefix);

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            } catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();
            if (this.insufitionPer()) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            }
            return buttons;
        }

        protected onDialogOpen(): void {
            super.onDialogOpen();



        }

        insufitionPer() {
            return (!Authorization.hasPermission("Common:Messages:Insert") ||
                !Authorization.hasPermission("Common:Messages:Update"));
        }
    }
}