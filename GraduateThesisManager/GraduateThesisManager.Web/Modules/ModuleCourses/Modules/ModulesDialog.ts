
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerClass()
    export class ModulesDialog extends Serenity.EntityDialog<ModulesRow, any> {
        protected getFormKey() { return ModulesForm.formKey; }
        protected getIdProperty() { return ModulesRow.idProperty; }
        protected getLocalTextPrefix() { return ModulesRow.localTextPrefix; }
        protected getNameProperty() { return ModulesRow.nameProperty; }
        protected getService() { return ModulesService.baseUrl; }

        protected form = new ModulesForm(this.idPrefix);

    }
}