namespace GraduateThesisManager.ModuleCourses {
    export interface ModulesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        HeadOfDepartment?: number;
        HeadOfDepartmentUsername?: string;
        HeadOfDepartmentDisplayName?: string;
        HeadOfDepartmentEmail?: string;
        HeadOfDepartmentSource?: string;
        HeadOfDepartmentPasswordHash?: string;
        HeadOfDepartmentPasswordSalt?: string;
        HeadOfDepartmentLastDirectoryUpdate?: string;
        HeadOfDepartmentUserImage?: string;
        HeadOfDepartmentInsertDate?: string;
        HeadOfDepartmentInsertUserId?: number;
        HeadOfDepartmentUpdateDate?: string;
        HeadOfDepartmentUpdateUserId?: number;
        HeadOfDepartmentIsActive?: number;
        CoursesList?: ModulesCoursesRow[];
    }

    export namespace ModulesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ModuleCourses.Modules';
        export const lookupKey = 'ModuleCourses.Modules';

        export function getLookup(): Q.Lookup<ModulesRow> {
            return Q.getLookup<ModulesRow>('ModuleCourses.Modules');
        }

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            HeadOfDepartment = "HeadOfDepartment",
            HeadOfDepartmentUsername = "HeadOfDepartmentUsername",
            HeadOfDepartmentDisplayName = "HeadOfDepartmentDisplayName",
            HeadOfDepartmentEmail = "HeadOfDepartmentEmail",
            HeadOfDepartmentSource = "HeadOfDepartmentSource",
            HeadOfDepartmentPasswordHash = "HeadOfDepartmentPasswordHash",
            HeadOfDepartmentPasswordSalt = "HeadOfDepartmentPasswordSalt",
            HeadOfDepartmentLastDirectoryUpdate = "HeadOfDepartmentLastDirectoryUpdate",
            HeadOfDepartmentUserImage = "HeadOfDepartmentUserImage",
            HeadOfDepartmentInsertDate = "HeadOfDepartmentInsertDate",
            HeadOfDepartmentInsertUserId = "HeadOfDepartmentInsertUserId",
            HeadOfDepartmentUpdateDate = "HeadOfDepartmentUpdateDate",
            HeadOfDepartmentUpdateUserId = "HeadOfDepartmentUpdateUserId",
            HeadOfDepartmentIsActive = "HeadOfDepartmentIsActive",
            CoursesList = "CoursesList"
        }
    }
}

