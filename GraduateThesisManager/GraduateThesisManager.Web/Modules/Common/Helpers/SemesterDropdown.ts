
namespace GraduateThesisManager.Common {

    @Serenity.Decorators.registerEditor()
    export class SemesterEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("1", "1");
            this.addOption("2", "2");
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