
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerClass()
    export class RegistrationStatusDialog extends Serenity.EntityDialog<RegistrationStatusRow, any> {
        protected getFormKey() { return RegistrationStatusForm.formKey; }
        protected getIdProperty() { return RegistrationStatusRow.idProperty; }
        protected getLocalTextPrefix() { return RegistrationStatusRow.localTextPrefix; }
        protected getNameProperty() { return RegistrationStatusRow.nameProperty; }
        protected getService() { return RegistrationStatusService.baseUrl; }

        protected form = new RegistrationStatusForm(this.idPrefix);

    }
}