
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
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            //Insert button for Excel export 
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: CoursesService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //Insert button for Pdf export 
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Courses List',
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