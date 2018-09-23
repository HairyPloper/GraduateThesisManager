namespace GraduateThesisManager.Thesis {
    export interface ThesisPoolRow {
        Id?: number;
        ThesisName?: string;
        ThesisDescription?: string;
        CreateDate?: string;
        ExpireDate?: string;
        CorseId?: number;
        ThesisDocument?: string;
        CorseCourseName?: string;
        CorseCourseDescription?: string;
        CorseLecturer?: number;
        CorseYear?: number;
        CorseSemester?: number;
    }

    export namespace ThesisPoolRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ThesisName';
        export const localTextPrefix = 'Thesis.ThesisPool';
        export const lookupKey = 'Thesis.ThesisPool';

        export function getLookup(): Q.Lookup<ThesisPoolRow> {
            return Q.getLookup<ThesisPoolRow>('Thesis.ThesisPool');
        }

        export declare const enum Fields {
            Id = "Id",
            ThesisName = "ThesisName",
            ThesisDescription = "ThesisDescription",
            CreateDate = "CreateDate",
            ExpireDate = "ExpireDate",
            CorseId = "CorseId",
            ThesisDocument = "ThesisDocument",
            CorseCourseName = "CorseCourseName",
            CorseCourseDescription = "CorseCourseDescription",
            CorseLecturer = "CorseLecturer",
            CorseYear = "CorseYear",
            CorseSemester = "CorseSemester"
        }
    }
}

