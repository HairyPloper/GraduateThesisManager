namespace GraduateThesisManager.ModuleCourses {
    import Widget = Serenity.Widget;

    @Serenity.Decorators.registerClass()
    export class ModulesCoursesEditDialog extends
        Common.GridEditorDialog<ModulesCoursesRow> {
        protected getFormKey() { return ModulesCoursesForm.formKey; }
        protected getNameProperty() { return ModulesCoursesRow.nameProperty; }
        protected getLocalTextPrefix() { return ModulesCoursesRow.localTextPrefix; }
        protected form: ModulesCoursesForm;
        public verifierType: string;

        constructor() {
            super();

            this.form = new ModulesCoursesForm(this.idPrefix);
            this.form.CourseId.changeSelect2(e => {
                var courseId = Q.toId(this.form.CourseId.value);
                if (courseId != null) {
                    let courseIdList = CoursesRow.getLookup().itemById[courseId];
                    this.form.CourseCourseDescription.value = courseIdList.CourseDescription;
                    this.form.CourseSemester.value = courseIdList.Semester;
                    this.form.CourseYear.value = courseIdList.Year;
                    this.form.CourseCourseName.value = courseIdList.CourseName;
                }
            });
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

        }

    }
}
