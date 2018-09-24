
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
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            //Insert button for Excel export 
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ModulesService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //Insert button for Pdf export 
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Modules List',
                pageNumbers: true,
                columnTitles: {
                    'Discontinued': 'Dis.',
                },
                tableOptions: {
                    columnStyles: {
                        LanguageId: {
                            columnWidth: 25,
                            halign: 'right'
                        },
                        Discountinued: {
                            columnWidth: 25
                        }
                    }
                }
            }));

            return buttons;
        }
    }
}