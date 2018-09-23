
namespace GraduateThesisManager.Thesis {

    @Serenity.Decorators.registerClass()
    export class ThesisPoolGrid extends Serenity.EntityGrid<ThesisPoolRow, any> {
        protected getColumnsKey() { return 'Thesis.ThesisPool'; }
        protected getDialogType() { return ThesisPoolDialog; }
        protected getIdProperty() { return ThesisPoolRow.idProperty; }
        protected getLocalTextPrefix() { return ThesisPoolRow.localTextPrefix; }
        protected getService() { return ThesisPoolService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();


            //Insert button for Excel export 
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ThesisPoolService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //Insert button for Pdf export 
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Thesis List',
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