
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerClass()
    export class ModulesGrid extends Serenity.EntityGrid<ModulesRow, any> {
        protected getColumnsKey() { return 'ModuleCourses.Modules'; }
        protected getDialogType() { return ModulesDialog; }
        protected getIdProperty() { return ModulesRow.idProperty; }
        protected getLocalTextPrefix() { return ModulesRow.localTextPrefix; }
        protected getService() { return ModulesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}