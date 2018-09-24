
namespace GraduateThesisManager.Thesis {

    @Serenity.Decorators.registerClass()
    export class ThesisPoolDialog extends Serenity.EntityDialog<ThesisPoolRow, any> {
        protected getFormKey() { return ThesisPoolForm.formKey; }
        protected getIdProperty() { return ThesisPoolRow.idProperty; }
        protected getLocalTextPrefix() { return ThesisPoolRow.localTextPrefix; }
        protected getNameProperty() { return ThesisPoolRow.nameProperty; }
        protected getService() { return ThesisPoolService.baseUrl; }

        protected form = new ThesisPoolForm(this.idPrefix);

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            var registerThesis: Serenity.ToolButton =
            {
                title: "Register Thesis",
                cssClass: "mail-button",
                onClick: () => {
                    var dialog = new RegistrationDialog();
                    dialog.registerEntry = this.entity;
                    dialog.loadNewAndOpenDialog(false);                  
                }
            }
            buttons.push(registerThesis);

            return buttons;
        }

    }
}