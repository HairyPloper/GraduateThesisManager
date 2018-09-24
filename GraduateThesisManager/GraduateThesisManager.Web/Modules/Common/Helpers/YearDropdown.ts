
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerEditor()
    export class YearEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("1", "I");
            this.addOption("2", "II");
            this.addOption("3", "III");
            this.addOption("4", "IV");
            this.addOption("5", "V");
            //this.value = "1";
        }

        getSelect2Options(): Select2Options {
            var options = super.getSelect2Options();
            //options.allowClear = false;
            return options;
        }

        addInplaceCreate(addTitle?: string, editTitle?: string): void {

        }

        inplaceCreateClick(e): void { }
    }
}