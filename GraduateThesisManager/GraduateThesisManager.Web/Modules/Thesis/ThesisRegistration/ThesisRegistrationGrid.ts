
namespace GraduateThesisManager.Thesis {

    @Serenity.Decorators.registerClass()
    export class ThesisRegistrationGrid extends Serenity.EntityGrid<ThesisRegistrationRow, any> {
        protected getColumnsKey() { return 'Thesis.ThesisRegistration'; }
        protected getDialogType() { return ThesisRegistrationDialog; }
        protected getIdProperty() { return ThesisRegistrationRow.idProperty; }
        protected getLocalTextPrefix() { return ThesisRegistrationRow.localTextPrefix; }
        protected getService() { return ThesisRegistrationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "UserUsername", title: "Username" },
                { name: "ThesisThesisName", title: "Thesis Name" },
                { name: "LecturerName", title: "Lecturer Name" }
            ];
        }
        protected getColumns(): Slick.Column[] {

            var columns = super.getColumns();

            Q.first(columns, x => x.field == "Status1").cssClass += " step-status-col";

            return columns;
        }
        protected createSlickGrid(): Slick.Grid {
            let grid = super.createSlickGrid();
            return grid;
        }
        protected getItemCssClass(item: ThesisRegistrationRow, index: number): string {
            let klass = "";

            if (item.Status1.toUpperCase() == "IN PROGRESS") {
                klass += " color-progress";
            }
            else if (item.Status1.toUpperCase() == "SUCCESSFUL") {
                klass += " color-success";
            } else {
                klass += " color-danger";
            }
            return Q.trimToNull(klass);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            //Insert button for Excel export 
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ThesisRegistrationService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //Insert button for Pdf export 
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Registration List',
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