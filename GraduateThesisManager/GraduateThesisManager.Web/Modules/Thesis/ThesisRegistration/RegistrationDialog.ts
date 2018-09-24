
namespace GraduateThesisManager.Thesis {

    @Serenity.Decorators.registerClass()
    export class RegistrationDialog extends Serenity.EntityDialog<ThesisRegistrationRow, any> {
        protected getFormKey() { return "Thesis.Registration"; }
        protected getIdProperty() { return ThesisRegistrationRow.idProperty; }
        protected getLocalTextPrefix() { return ThesisRegistrationRow.localTextPrefix; }
        protected getService() { return ThesisRegistrationService.baseUrl; }
        public registerEntry: ThesisPoolRow;
        protected form = new RegistrationForm(this.idPrefix);

        protected onDialogOpen() {
            super.onDialogOpen();
            this.form.User.value = Q.Authorization.userDefinition.UserId;
            this.form.Status.value = 1;
            this.form.Thesis.value = this.registerEntry.Id;
            this.form.ThesisThesisName.value = this.registerEntry.ThesisName;
            this.form.UserDisplayName.value = Q.Authorization.userDefinition.Username;
        }

        protected onSaveSuccess(response): void {
            super.onSaveSuccess;
            Q.notifySuccess("Successful registration");
        }
        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "apply-changes-button"), 1);
            
            return b;
        }
        protected updateInterface() {
            super.updateInterface();

            this.saveAndCloseButton.text("Register");
        }
    }
}