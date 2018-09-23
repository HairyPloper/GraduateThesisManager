
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerClass()
    export class RegistrationStatusGrid extends Serenity.EntityGrid<RegistrationStatusRow, any> {
        protected getColumnsKey() { return 'Common.RegistrationStatus'; }
        protected getDialogType() { return RegistrationStatusDialog; }
        protected getIdProperty() { return RegistrationStatusRow.idProperty; }
        protected getLocalTextPrefix() { return RegistrationStatusRow.localTextPrefix; }
        protected getService() { return RegistrationStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}