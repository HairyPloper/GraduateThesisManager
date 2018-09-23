namespace GraduateThesisManager.Thesis {
    export interface ThesisRegistrationRow {
        Id?: number;
        User?: number;
        Thesis?: number;
        Status?: number;
        CreateDate?: string;
        ExpireDate?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        ThesisThesisName?: string;
        ThesisThesisDescription?: string;
        ThesisCreateDate?: string;
        ThesisExpireDate?: string;
        ThesisCorseId?: number;
        ThesisThesisDocument?: string;
        Status1?: string;
        ModuleId?: number;
        CourseId?: number;
        ModuleName?: string;
        CourseName?: string;
        LecturerId?: number;
        LecturerName?: string;
    }

    export namespace ThesisRegistrationRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Thesis.ThesisRegistration';

        export declare const enum Fields {
            Id = "Id",
            User = "User",
            Thesis = "Thesis",
            Status = "Status",
            CreateDate = "CreateDate",
            ExpireDate = "ExpireDate",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            ThesisThesisName = "ThesisThesisName",
            ThesisThesisDescription = "ThesisThesisDescription",
            ThesisCreateDate = "ThesisCreateDate",
            ThesisExpireDate = "ThesisExpireDate",
            ThesisCorseId = "ThesisCorseId",
            ThesisThesisDocument = "ThesisThesisDocument",
            Status1 = "Status1",
            ModuleId = "ModuleId",
            CourseId = "CourseId",
            ModuleName = "ModuleName",
            CourseName = "CourseName",
            LecturerId = "LecturerId",
            LecturerName = "LecturerName"
        }
    }
}

