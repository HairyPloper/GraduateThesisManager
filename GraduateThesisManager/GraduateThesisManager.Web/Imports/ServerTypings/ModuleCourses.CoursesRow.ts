namespace GraduateThesisManager.ModuleCourses {
    export interface CoursesRow {
        Id?: number;
        CourseName?: string;
        CourseDescription?: string;
        Lecturer?: number;
        Year?: number;
        Semester?: number;
        LecturerUsername?: string;
        LecturerDisplayName?: string;
        LecturerEmail?: string;
        LecturerSource?: string;
        LecturerPasswordHash?: string;
        LecturerPasswordSalt?: string;
        LecturerLastDirectoryUpdate?: string;
        LecturerUserImage?: string;
        LecturerInsertDate?: string;
        LecturerInsertUserId?: number;
        LecturerUpdateDate?: string;
        LecturerUpdateUserId?: number;
        LecturerIsActive?: number;
    }

    export namespace CoursesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CourseName';
        export const localTextPrefix = 'ModuleCourses.Courses';
        export const lookupKey = 'ModuleCourses.Courses';

        export function getLookup(): Q.Lookup<CoursesRow> {
            return Q.getLookup<CoursesRow>('ModuleCourses.Courses');
        }

        export declare const enum Fields {
            Id = "Id",
            CourseName = "CourseName",
            CourseDescription = "CourseDescription",
            Lecturer = "Lecturer",
            Year = "Year",
            Semester = "Semester",
            LecturerUsername = "LecturerUsername",
            LecturerDisplayName = "LecturerDisplayName",
            LecturerEmail = "LecturerEmail",
            LecturerSource = "LecturerSource",
            LecturerPasswordHash = "LecturerPasswordHash",
            LecturerPasswordSalt = "LecturerPasswordSalt",
            LecturerLastDirectoryUpdate = "LecturerLastDirectoryUpdate",
            LecturerUserImage = "LecturerUserImage",
            LecturerInsertDate = "LecturerInsertDate",
            LecturerInsertUserId = "LecturerInsertUserId",
            LecturerUpdateDate = "LecturerUpdateDate",
            LecturerUpdateUserId = "LecturerUpdateUserId",
            LecturerIsActive = "LecturerIsActive"
        }
    }
}

