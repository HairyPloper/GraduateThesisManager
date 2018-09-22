
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerClass()
    export class MessagesGrid extends Serenity.EntityGrid<MessagesRow, any> {
        protected getColumnsKey() { return 'Common.Messages'; }
        protected getDialogType() { return MessagesDialog; }
        protected getIdProperty() { return MessagesRow.idProperty; }
        protected getLocalTextPrefix() { return MessagesRow.localTextPrefix; }
        protected getService() { return MessagesService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "IdFromUsername", title: "From user" }
            ];
        }

        protected getItemCssClass(item: MessagesRow, index: number): string {
            let klass = "";

            if (!item.IsChecked)
                klass += " notChecked-type";

            if (item.IsImportant)
                klass += " important-type";

            return Q.trimToNull(klass);
        }
        protected getColumns(): Slick.Column[] {

            var columns = super.getColumns();
            columns.splice(10, 0,
                {
                    field: "info",
                    sortable: false,
                    cssClass: "col-checked-type",
                    selectable: false,
                    name: "",
                    format: ctx => {
                        return "";
                    },
                    width: 25,
                    minWidth: 25,
                    maxWidth: 25
                });
            columns.splice(11, 0,
                {
                    field: "info",
                    sortable: false,
                    cssClass: "col-important-type",
                    selectable: false,
                    name: "",
                    format: ctx => {
                        return "";
                    },
                    width: 25,
                    minWidth: 25,
                    maxWidth: 25
                });

            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

            return columns;
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            //Insert button for Excel export 
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: MessagesService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //Insert button for Pdf export 
            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Messages List',
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

            //Insert button for Delete 
            buttons.push({
                title: 'Delete messeges',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var action = new MessagesBulkAction();
                    action.action = 0; // Delete;
                    action.done = () => this.rowSelection.resetCheckedAndRefresh();
                    action.execute(this.getkeys(this.rowSelection.getSelectedKeys()));
                }
            });
            if (!this.insufitionPer()) {
                //Insert button for Checked
                buttons.push({
                    title: 'Toggle checked',
                    cssClass: 'unlock-button',
                    onClick: () => {
                        if (!this.onViewSubmit()) {
                            return;
                        }
                        var action = new MessagesBulkAction();
                        action.action = 1; // Enable;
                        action.done = () => this.rowSelection.resetCheckedAndRefresh();
                        action.execute(this.getkeys(this.rowSelection.getSelectedKeys()));
                    }
                });
                //Insert button for Important  
                buttons.push({
                    title: 'Toggle important',
                    cssClass: 'lock-button',
                    onClick: () => {
                        if (!this.onViewSubmit()) {
                            return;
                        }
                        var action = new MessagesBulkAction();
                        action.action = 2; // Disable;
                        action.done = () => this.rowSelection.resetCheckedAndRefresh();
                        action.execute(this.getkeys(this.rowSelection.getSelectedKeys()));
                    }
                });
            }

            return buttons;
        }
        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        getkeys(items: string[]): string[] {
            var listOfKeys = items.map(x => {
                var item = this.view.getItemById(x);
                return item.Id.toString();
            });
            return listOfKeys;
        }
        insufitionPer() {
            return (!Authorization.hasPermission("Common:Messages:Insert") ||
                !Authorization.hasPermission("Common:Messages:Update"));
        }

    }
}