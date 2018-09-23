
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerClass()
    export class CoursesDialog extends Serenity.EntityDialog<CoursesRow, any> {
        protected getFormKey() { return CoursesForm.formKey; }
        protected getIdProperty() { return CoursesRow.idProperty; }
        protected getLocalTextPrefix() { return CoursesRow.localTextPrefix; }
        protected getNameProperty() { return CoursesRow.nameProperty; }
        protected getService() { return CoursesService.baseUrl; }

        protected form = new CoursesForm(this.idPrefix);

    }
}