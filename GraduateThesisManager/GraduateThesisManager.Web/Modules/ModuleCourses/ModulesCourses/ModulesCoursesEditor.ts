
namespace GraduateThesisManager.ModuleCourses {

    @Serenity.Decorators.registerEditor()
    export class ModulesCoursesEditor extends Common.GridEditorBase<ModulesCoursesRow> {
        protected getColumnsKey() { return "ModuleCourses.ModulesCourses"; }
        protected getLocalTextPrefix() { return ModulesCoursesRow.localTextPrefix; }
        protected getDialogType() { return ModulesCoursesEditDialog; }
        public verifierType: string;

        constructor(container: JQuery) {
            super(container);

        }
        protected validateEntity(row: ModulesCoursesRow, id: number) {

            //var courseId = Q.toId(row.Id);
            //if (courseId != null) {
            //    let courseIdList = CoursesRow.getLookup().itemById[courseId];
            //    row.CourseCourseDescription = courseIdList.CourseDescription;
            //    row.CourseSemester = courseIdList.Semester;
            //    row.CourseYear = courseIdList.Year;
            //    row.CourseCourseName = courseIdList.CourseName;
            //}

            return true;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons[0].onClick = () => {
                this.createEntityDialog(this.getItemType(), dlg => {
                    var dialog = dlg as ModulesCoursesEditDialog;
                    dialog.onSave = (opt, callback) => this.save(opt, callback);
                    var entity = this.getNewEntity() as ModulesCoursesRow;
                    dialog.loadEntityAndOpenDialog(entity);
                });
            }

            return buttons;
        }

        protected getSlickOptions(): Slick.GridOptions {
            var opt: Slick.GridOptions = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slickgrid-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        }

        protected createSlickGrid(): Slick.Grid {
            var grid = super.createSlickGrid();
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }

        protected getAddButtonCaption() { return "Add"; }

    }
}