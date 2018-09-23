
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerClass()
    export class CoursesGrid extends Serenity.EntityGrid<CoursesRow, any> {
        protected getColumnsKey() { return 'ModuleCourses.Courses'; }
        protected getDialogType() { return CoursesDialog; }
        protected getIdProperty() { return CoursesRow.idProperty; }
        protected getLocalTextPrefix() { return CoursesRow.localTextPrefix; }
        protected getService() { return CoursesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}