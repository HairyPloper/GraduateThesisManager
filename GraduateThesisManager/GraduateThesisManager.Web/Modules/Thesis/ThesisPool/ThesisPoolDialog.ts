
namespace GraduateThesisManager.Thesis {

    @Serenity.Decorators.registerClass()
    export class ThesisPoolDialog extends Serenity.EntityDialog<ThesisPoolRow, any> {
        protected getFormKey() { return ThesisPoolForm.formKey; }
        protected getIdProperty() { return ThesisPoolRow.idProperty; }
        protected getLocalTextPrefix() { return ThesisPoolRow.localTextPrefix; }
        protected getNameProperty() { return ThesisPoolRow.nameProperty; }
        protected getService() { return ThesisPoolService.baseUrl; }

        protected form = new ThesisPoolForm(this.idPrefix);

    }
}