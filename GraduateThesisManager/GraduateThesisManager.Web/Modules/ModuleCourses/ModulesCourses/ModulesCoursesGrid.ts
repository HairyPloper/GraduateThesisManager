
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerClass()
    export class ModulesCoursesGrid extends Serenity.EntityGrid<ModulesCoursesRow, any> {
        protected getColumnsKey() { return 'ModuleCourses.ModulesCourses'; }
        protected getDialogType() { return ModulesCoursesDialog; }
        protected getIdProperty() { return ModulesCoursesRow.idProperty; }
        protected getLocalTextPrefix() { return ModulesCoursesRow.localTextPrefix; }
        protected getService() { return ModulesCoursesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}