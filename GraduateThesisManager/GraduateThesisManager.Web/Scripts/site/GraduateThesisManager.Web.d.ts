/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace GraduateThesisManager.Administration {
}
declare namespace GraduateThesisManager.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
}
declare namespace GraduateThesisManager.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GraduateThesisManager.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace GraduateThesisManager.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace GraduateThesisManager.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace GraduateThesisManager.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace GraduateThesisManager.Administration {
}
declare namespace GraduateThesisManager.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace GraduateThesisManager.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
        }
    }
}
declare namespace GraduateThesisManager.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List",
        }
    }
}
declare namespace GraduateThesisManager.Common {
    namespace DashboardService {
        const baseUrl = "Common/Dashboard";
        const enum Methods {
        }
    }
}
declare namespace GraduateThesisManager.Common {
}
declare namespace GraduateThesisManager.Common {
    interface MessagesForm {
        IdFromUsername: Serenity.StringEditor;
        IdFrom: Serenity.IntegerEditor;
        SendDate: Serenity.DateEditor;
        IsImportant: Serenity.BooleanEditor;
        IsChecked: Serenity.BooleanEditor;
        Subject: Serenity.StringEditor;
        Message: Serenity.HtmlContentEditor;
    }
    class MessagesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Common {
    interface MessagesResponse extends Serenity.ServiceResponse {
        IsSuccessful?: boolean;
        error?: string;
    }
    interface MessagesResponseBatchRequest extends Serenity.ServiceRequest {
        messages?: string[];
        action?: number;
    }
}
declare namespace GraduateThesisManager.Common {
    interface MessagesRow {
        Id?: number;
        SendDate?: string;
        ReadDate?: string;
        IdFrom?: number;
        IdTo?: number;
        Message?: string;
        Subject?: string;
        IsImportant?: boolean;
        IsChecked?: boolean;
        SentReacived?: string;
        IdFromUsername?: string;
        IdFromDisplayName?: string;
        IdFromEmail?: string;
        IdFromSource?: string;
        IdFromLastDirectoryUpdate?: string;
        IdFromUserImage?: string;
        IdFromInsertDate?: string;
        IdFromInsertUserId?: number;
        IdFromUpdateDate?: string;
        IdFromUpdateUserId?: number;
        IdFromIsActive?: number;
        IdToUsername?: string;
        IdToDisplayName?: string;
        IdToEmail?: string;
        IdToSource?: string;
        IdToLastDirectoryUpdate?: string;
        IdToUserImage?: string;
        IdToInsertDate?: string;
        IdToInsertUserId?: number;
        IdToUpdateDate?: string;
        IdToUpdateUserId?: number;
        IdToIsActive?: number;
    }
    namespace MessagesRow {
        const idProperty = "Id";
        const nameProperty = "Subject";
        const localTextPrefix = "Common.Messages";
        const enum Fields {
            Id = "Id",
            SendDate = "SendDate",
            ReadDate = "ReadDate",
            IdFrom = "IdFrom",
            IdTo = "IdTo",
            Message = "Message",
            Subject = "Subject",
            IsImportant = "IsImportant",
            IsChecked = "IsChecked",
            SentReacived = "SentReacived",
            IdFromUsername = "IdFromUsername",
            IdFromDisplayName = "IdFromDisplayName",
            IdFromEmail = "IdFromEmail",
            IdFromSource = "IdFromSource",
            IdFromLastDirectoryUpdate = "IdFromLastDirectoryUpdate",
            IdFromUserImage = "IdFromUserImage",
            IdFromInsertDate = "IdFromInsertDate",
            IdFromInsertUserId = "IdFromInsertUserId",
            IdFromUpdateDate = "IdFromUpdateDate",
            IdFromUpdateUserId = "IdFromUpdateUserId",
            IdFromIsActive = "IdFromIsActive",
            IdToUsername = "IdToUsername",
            IdToDisplayName = "IdToDisplayName",
            IdToEmail = "IdToEmail",
            IdToSource = "IdToSource",
            IdToLastDirectoryUpdate = "IdToLastDirectoryUpdate",
            IdToUserImage = "IdToUserImage",
            IdToInsertDate = "IdToInsertDate",
            IdToInsertUserId = "IdToInsertUserId",
            IdToUpdateDate = "IdToUpdateDate",
            IdToUpdateUserId = "IdToUpdateUserId",
            IdToIsActive = "IdToIsActive",
        }
    }
}
declare namespace GraduateThesisManager.Common {
    namespace MessagesService {
        const baseUrl = "Common/Messages";
        function Create(request: Serenity.SaveRequest<MessagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MessagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MessagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MessagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function MessageBatchAction(request: MessagesResponseBatchRequest, onSuccess?: (response: MessagesResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Common/Messages/Create",
            Update = "Common/Messages/Update",
            Delete = "Common/Messages/Delete",
            Retrieve = "Common/Messages/Retrieve",
            List = "Common/Messages/List",
            MessageBatchAction = "Common/Messages/MessageBatchAction",
        }
    }
}
declare namespace GraduateThesisManager.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace GraduateThesisManager.Common {
}
declare namespace GraduateThesisManager.Common {
    interface RegistrationStatusForm {
        Status: Serenity.StringEditor;
    }
    class RegistrationStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Common {
    interface RegistrationStatusRow {
        Id?: number;
        Status?: string;
    }
    namespace RegistrationStatusRow {
        const idProperty = "Id";
        const nameProperty = "Status";
        const localTextPrefix = "Common.RegistrationStatus";
        const lookupKey = "Common.RegistrationStatus";
        function getLookup(): Q.Lookup<RegistrationStatusRow>;
        const enum Fields {
            Id = "Id",
            Status = "Status",
        }
    }
}
declare namespace GraduateThesisManager.Common {
    namespace RegistrationStatusService {
        const baseUrl = "Common/RegistrationStatus";
        function Create(request: Serenity.SaveRequest<RegistrationStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegistrationStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegistrationStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegistrationStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Common/RegistrationStatus/Create",
            Update = "Common/RegistrationStatus/Update",
            Delete = "Common/RegistrationStatus/Delete",
            Retrieve = "Common/RegistrationStatus/Retrieve",
            List = "Common/RegistrationStatus/List",
        }
    }
}
declare namespace GraduateThesisManager.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace GraduateThesisManager.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace GraduateThesisManager.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value",
        }
    }
}
declare namespace GraduateThesisManager.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve",
        }
    }
}
declare namespace GraduateThesisManager.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace GraduateThesisManager {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace GraduateThesisManager {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace GraduateThesisManager {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace GraduateThesisManager {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace GraduateThesisManager.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GraduateThesisManager.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace GraduateThesisManager.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace GraduateThesisManager.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GraduateThesisManager.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
}
declare namespace GraduateThesisManager.ModuleCourses {
    interface CoursesForm {
        CourseName: Serenity.StringEditor;
        CourseDescription: Serenity.TextAreaEditor;
        Lecturer: Serenity.LookupEditor;
        Year: Common.YearEditor;
        Semester: Common.SemesterEditor;
    }
    class CoursesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    interface CoursesRow {
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
        LecturerLastDirectoryUpdate?: string;
        LecturerUserImage?: string;
        LecturerInsertDate?: string;
        LecturerInsertUserId?: number;
        LecturerUpdateDate?: string;
        LecturerUpdateUserId?: number;
        LecturerIsActive?: number;
    }
    namespace CoursesRow {
        const idProperty = "Id";
        const nameProperty = "CourseName";
        const localTextPrefix = "ModuleCourses.Courses";
        const lookupKey = "ModuleCourses.Courses";
        function getLookup(): Q.Lookup<CoursesRow>;
        const enum Fields {
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
            LecturerLastDirectoryUpdate = "LecturerLastDirectoryUpdate",
            LecturerUserImage = "LecturerUserImage",
            LecturerInsertDate = "LecturerInsertDate",
            LecturerInsertUserId = "LecturerInsertUserId",
            LecturerUpdateDate = "LecturerUpdateDate",
            LecturerUpdateUserId = "LecturerUpdateUserId",
            LecturerIsActive = "LecturerIsActive",
        }
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    namespace CoursesService {
        const baseUrl = "ModuleCourses/Courses";
        function Create(request: Serenity.SaveRequest<CoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ModuleCourses/Courses/Create",
            Update = "ModuleCourses/Courses/Update",
            Delete = "ModuleCourses/Courses/Delete",
            Retrieve = "ModuleCourses/Courses/Retrieve",
            List = "ModuleCourses/Courses/List",
        }
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
}
declare namespace GraduateThesisManager.ModuleCourses {
}
declare namespace GraduateThesisManager.ModuleCourses {
    interface ModulesCoursesForm {
        ModuleId: Serenity.IntegerEditor;
        CourseId: Serenity.LookupEditor;
        CourseCourseName: Serenity.StringEditor;
        CourseCourseDescription: Serenity.StringEditor;
        CourseYear: Serenity.IntegerEditor;
        CourseSemester: Serenity.IntegerEditor;
    }
    class ModulesCoursesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    interface ModulesCoursesRow {
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
    namespace ModulesCoursesRow {
        const idProperty = "Id";
        const localTextPrefix = "ModuleCourses.ModulesCourses";
        const enum Fields {
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
            CourseSemester = "CourseSemester",
        }
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    namespace ModulesCoursesService {
        const baseUrl = "ModuleCourses/ModulesCourses";
        function Create(request: Serenity.SaveRequest<ModulesCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ModulesCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ModulesCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ModulesCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ModuleCourses/ModulesCourses/Create",
            Update = "ModuleCourses/ModulesCourses/Update",
            Delete = "ModuleCourses/ModulesCourses/Delete",
            Retrieve = "ModuleCourses/ModulesCourses/Retrieve",
            List = "ModuleCourses/ModulesCourses/List",
        }
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    interface ModulesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        HeadOfDepartmentDisplayName: Serenity.StringEditor;
        CoursesList: ModulesCoursesEditor;
    }
    class ModulesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    interface ModulesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        HeadOfDepartment?: number;
        HeadOfDepartmentUsername?: string;
        HeadOfDepartmentDisplayName?: string;
        HeadOfDepartmentEmail?: string;
        HeadOfDepartmentSource?: string;
        HeadOfDepartmentLastDirectoryUpdate?: string;
        HeadOfDepartmentUserImage?: string;
        HeadOfDepartmentInsertDate?: string;
        HeadOfDepartmentInsertUserId?: number;
        HeadOfDepartmentUpdateDate?: string;
        HeadOfDepartmentUpdateUserId?: number;
        HeadOfDepartmentIsActive?: number;
        CoursesList?: ModulesCoursesRow[];
    }
    namespace ModulesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "ModuleCourses.Modules";
        const lookupKey = "ModuleCourses.Modules";
        function getLookup(): Q.Lookup<ModulesRow>;
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            HeadOfDepartment = "HeadOfDepartment",
            HeadOfDepartmentUsername = "HeadOfDepartmentUsername",
            HeadOfDepartmentDisplayName = "HeadOfDepartmentDisplayName",
            HeadOfDepartmentEmail = "HeadOfDepartmentEmail",
            HeadOfDepartmentSource = "HeadOfDepartmentSource",
            HeadOfDepartmentLastDirectoryUpdate = "HeadOfDepartmentLastDirectoryUpdate",
            HeadOfDepartmentUserImage = "HeadOfDepartmentUserImage",
            HeadOfDepartmentInsertDate = "HeadOfDepartmentInsertDate",
            HeadOfDepartmentInsertUserId = "HeadOfDepartmentInsertUserId",
            HeadOfDepartmentUpdateDate = "HeadOfDepartmentUpdateDate",
            HeadOfDepartmentUpdateUserId = "HeadOfDepartmentUpdateUserId",
            HeadOfDepartmentIsActive = "HeadOfDepartmentIsActive",
            CoursesList = "CoursesList",
        }
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    namespace ModulesService {
        const baseUrl = "ModuleCourses/Modules";
        function Create(request: Serenity.SaveRequest<ModulesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ModulesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ModulesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ModulesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "ModuleCourses/Modules/Create",
            Update = "ModuleCourses/Modules/Update",
            Delete = "ModuleCourses/Modules/Delete",
            Retrieve = "ModuleCourses/Modules/Retrieve",
            List = "ModuleCourses/Modules/List",
        }
    }
}
declare namespace GraduateThesisManager {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
        UserId?: number;
    }
}
declare namespace GraduateThesisManager.Thesis {
    interface RegistrationForm {
        User: Serenity.IntegerEditor;
        Thesis: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        CreateDate: Serenity.DateTimeEditor;
        ExpireDate: Serenity.DateTimeEditor;
        UserDisplayName: Serenity.StringEditor;
        ThesisThesisName: Serenity.StringEditor;
    }
    class RegistrationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Thesis {
}
declare namespace GraduateThesisManager.Thesis {
    interface ThesisPoolForm {
        ThesisName: Serenity.StringEditor;
        ThesisDescription: Serenity.TextAreaEditor;
        CreateDate: Serenity.DateEditor;
        ExpireDate: Serenity.DateEditor;
        CorseId: Serenity.LookupEditor;
        ThesisDocument: Serenity.MultipleImageUploadEditor;
    }
    class ThesisPoolForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Thesis {
    interface ThesisPoolRow {
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
        CorseLecturerName?: string;
    }
    namespace ThesisPoolRow {
        const idProperty = "Id";
        const nameProperty = "ThesisName";
        const localTextPrefix = "Thesis.ThesisPool";
        const lookupKey = "Thesis.ThesisPool";
        function getLookup(): Q.Lookup<ThesisPoolRow>;
        const enum Fields {
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
            CorseSemester = "CorseSemester",
            CorseLecturerName = "CorseLecturerName",
        }
    }
}
declare namespace GraduateThesisManager.Thesis {
    namespace ThesisPoolService {
        const baseUrl = "Thesis/ThesisPool";
        function Create(request: Serenity.SaveRequest<ThesisPoolRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ThesisPoolRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ThesisPoolRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ThesisPoolRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Thesis/ThesisPool/Create",
            Update = "Thesis/ThesisPool/Update",
            Delete = "Thesis/ThesisPool/Delete",
            Retrieve = "Thesis/ThesisPool/Retrieve",
            List = "Thesis/ThesisPool/List",
        }
    }
}
declare namespace GraduateThesisManager.Thesis {
}
declare namespace GraduateThesisManager.Thesis {
    interface ThesisRegistrationForm {
        User: Serenity.LookupEditor;
        UserDisplayName: Serenity.StringEditor;
        Thesis: Serenity.LookupEditor;
        ThesisThesisName: Serenity.StringEditor;
        Status: Serenity.LookupEditor;
        CreateDate: Serenity.DateTimeEditor;
        ExpireDate: Serenity.DateTimeEditor;
        LecturerName: Serenity.StringEditor;
    }
    class ThesisRegistrationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GraduateThesisManager.Thesis {
    interface ThesisRegistrationRow {
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
    namespace ThesisRegistrationRow {
        const idProperty = "Id";
        const localTextPrefix = "Thesis.ThesisRegistration";
        const enum Fields {
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
            LecturerName = "LecturerName",
        }
    }
}
declare namespace GraduateThesisManager.Thesis {
    namespace ThesisRegistrationService {
        const baseUrl = "Thesis/ThesisRegistration";
        function Create(request: Serenity.SaveRequest<ThesisRegistrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ThesisRegistrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ThesisRegistrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ThesisRegistrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Thesis/ThesisRegistration/Create",
            Update = "Thesis/ThesisRegistration/Update",
            Delete = "Thesis/ThesisRegistration/Delete",
            Retrieve = "Thesis/ThesisRegistration/Retrieve",
            List = "Thesis/ThesisRegistration/List",
        }
    }
}
declare namespace GraduateThesisManager.LanguageList {
    function getValue(): string[][];
}
declare namespace GraduateThesisManager.ScriptInitialization {
}
declare namespace GraduateThesisManager.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace GraduateThesisManager.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace GraduateThesisManager.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GraduateThesisManager.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace GraduateThesisManager.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace GraduateThesisManager.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace GraduateThesisManager.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace GraduateThesisManager.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace GraduateThesisManager.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace GraduateThesisManager.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace GraduateThesisManager.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace GraduateThesisManager.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace GraduateThesisManager {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace GraduateThesisManager.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace GraduateThesisManager.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace GraduateThesisManager.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace GraduateThesisManager.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace GraduateThesisManager.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class MessageHelperEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
        getSelect2Options(): Select2Options;
        addInplaceCreate(addTitle?: string, editTitle?: string): void;
        inplaceCreateClick(e: any): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class SemesterEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
        getSelect2Options(): Select2Options;
        addInplaceCreate(addTitle?: string, editTitle?: string): void;
        inplaceCreateClick(e: any): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class YearEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
        getSelect2Options(): Select2Options;
        addInplaceCreate(addTitle?: string, editTitle?: string): void;
        inplaceCreateClick(e: any): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class MessagesBulkAction extends GraduateThesisManager.Common.BulkServiceAction {
        private errorMessage;
        action: number;
        constructor();
        get_errorMessage(): string;
        set_errorMessage(value: string): void;
        protected getAllHadErrorsFormat(): string;
        protected getSomeHadErrorsFormat(): string;
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        protected getConfirmationFormat(): string;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class MessagesDialog extends Serenity.EntityDialog<MessagesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: any;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected onDialogOpen(): void;
        insufitionPer(): boolean;
    }
}
declare namespace GraduateThesisManager.Common {
    class MessagesGrid extends Serenity.EntityGrid<MessagesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MessagesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        protected getItemCssClass(item: MessagesRow, index: number): string;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        getkeys(items: string[]): string[];
        insufitionPer(): boolean;
    }
}
declare namespace GraduateThesisManager.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace GraduateThesisManager.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace GraduateThesisManager.Common {
    class RegistrationStatusDialog extends Serenity.EntityDialog<RegistrationStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegistrationStatusForm;
    }
}
declare namespace GraduateThesisManager.Common {
    class RegistrationStatusGrid extends Serenity.EntityGrid<RegistrationStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RegistrationStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare var jsPDF: any;
declare namespace GraduateThesisManager.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace GraduateThesisManager.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace GraduateThesisManager.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace GraduateThesisManager.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace GraduateThesisManager.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class CoursesDialog extends Serenity.EntityDialog<CoursesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CoursesForm;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class CoursesGrid extends Serenity.EntityGrid<CoursesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CoursesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class ModulesDialog extends Serenity.EntityDialog<ModulesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ModulesForm;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class ModulesGrid extends Serenity.EntityGrid<ModulesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ModulesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class ModulesCoursesDialog extends Serenity.EntityDialog<ModulesCoursesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ModulesCoursesForm;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class ModulesCoursesEditDialog extends Common.GridEditorDialog<ModulesCoursesRow> {
        protected getFormKey(): string;
        protected getNameProperty(): ModulesCoursesRow.Fields;
        protected getLocalTextPrefix(): string;
        protected form: ModulesCoursesForm;
        verifierType: string;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class ModulesCoursesEditor extends Common.GridEditorBase<ModulesCoursesRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof ModulesCoursesEditDialog;
        verifierType: string;
        constructor(container: JQuery);
        protected validateEntity(row: ModulesCoursesRow, id: number): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
        protected getAddButtonCaption(): string;
    }
}
declare namespace GraduateThesisManager.ModuleCourses {
    class ModulesCoursesGrid extends Serenity.EntityGrid<ModulesCoursesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ModulesCoursesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GraduateThesisManager.Thesis {
    class ThesisPoolDialog extends Serenity.EntityDialog<ThesisPoolRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ThesisPoolForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace GraduateThesisManager.Thesis {
    class ThesisPoolGrid extends Serenity.EntityGrid<ThesisPoolRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ThesisPoolDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace GraduateThesisManager.Thesis {
    class RegistrationDialog extends Serenity.EntityDialog<ThesisRegistrationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        registerEntry: ThesisPoolRow;
        protected form: RegistrationForm;
        protected onDialogOpen(): void;
        protected onSaveSuccess(response: any): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GraduateThesisManager.Thesis {
    class ThesisRegistrationDialog extends Serenity.EntityDialog<ThesisRegistrationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ThesisRegistrationForm;
        registerEntry: ThesisPoolRow;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace GraduateThesisManager.Thesis {
    class ThesisRegistrationGrid extends Serenity.EntityGrid<ThesisRegistrationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ThesisRegistrationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        protected getColumns(): Slick.Column[];
        protected createSlickGrid(): Slick.Grid;
        protected getItemCssClass(item: ThesisRegistrationRow, index: number): string;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace GraduateThesisManager.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace GraduateThesisManager.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GraduateThesisManager.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GraduateThesisManager.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GraduateThesisManager.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
