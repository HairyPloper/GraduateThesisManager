
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerEditor()
    export class MessageHelperEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("1", "Sent");
            this.addOption("0", "Received");
            this.value = "0";
        }

        getSelect2Options(): Select2Options {
            var options = super.getSelect2Options();
            options.allowClear = false;
            return options;
        }

        addInplaceCreate(addTitle?: string, editTitle?: string): void {

        }

        inplaceCreateClick(e): void { }
    }
}