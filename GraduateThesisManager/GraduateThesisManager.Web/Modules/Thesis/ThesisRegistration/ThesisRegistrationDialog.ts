
namespace GraduateThesisManager.Thesis {

    @Serenity.Decorators.registerClass()
    export class ThesisRegistrationDialog extends Serenity.EntityDialog<ThesisRegistrationRow, any> {
        protected getFormKey() { return ThesisRegistrationForm.formKey; }
        protected getIdProperty() { return ThesisRegistrationRow.idProperty; }
        protected getLocalTextPrefix() { return ThesisRegistrationRow.localTextPrefix; }
        protected getService() { return ThesisRegistrationService.baseUrl; }

        protected form = new ThesisRegistrationForm(this.idPrefix);
        public registerEntry: ThesisPoolRow = null;

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(Common.ReportHelper.createToolButton({
                title: 'Generate Report',
                cssClass: 'export-pdf-button',
                download: false,
                reportKey: 'Thesis.ThesisRegistration',
                getParams: () => ({
                    ThesisRegistrationId: this.get_entityId()
                })
            }));
            return buttons;
        }

    }
}