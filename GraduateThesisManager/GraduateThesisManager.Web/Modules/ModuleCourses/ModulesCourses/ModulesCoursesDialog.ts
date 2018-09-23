
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerClass()
    export class ModulesCoursesDialog extends Serenity.EntityDialog<ModulesCoursesRow, any> {
        protected getFormKey() { return ModulesCoursesForm.formKey; }
        protected getIdProperty() { return ModulesCoursesRow.idProperty; }
        protected getLocalTextPrefix() { return ModulesCoursesRow.localTextPrefix; }
        protected getService() { return ModulesCoursesService.baseUrl; }

        protected form = new ModulesCoursesForm(this.idPrefix);

    }
}