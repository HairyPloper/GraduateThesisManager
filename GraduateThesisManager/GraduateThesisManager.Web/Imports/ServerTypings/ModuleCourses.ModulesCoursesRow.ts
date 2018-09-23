namespace GraduateThesisManager.ModuleCourses {
    export interface ModulesCoursesRow {
        Id?: number;
        ModuleId?: number;
        CourseId?: number;
        ModuleName?: string;
        ModuleDescription?: string;
        ModuleHeadOfDepartment?: number;
        CourseCourseName?: string;
        CourseCourseDescription?: string;
        CourseLecturer?: number;
        CourseYear?: number;
        CourseSemester?: number;
    }

    export namespace ModulesCoursesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'ModuleCourses.ModulesCourses';

        export declare const enum Fields {
            Id = "Id",
            ModuleId = "ModuleId",
            CourseId = "CourseId",
            ModuleName = "ModuleName",
            ModuleDescription = "ModuleDescription",
            ModuleHeadOfDepartment = "ModuleHeadOfDepartment",
            CourseCourseName = "CourseCourseName",
            CourseCourseDescription = "CourseCourseDescription",
            CourseLecturer = "CourseLecturer",
            CourseYear = "CourseYear",
            CourseSemester = "CourseSemester"
        }
    }
}

