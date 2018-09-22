namespace GraduateThesisManager.Common {
    export interface MessagesRow {
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
        IdFromPasswordHash?: string;
        IdFromPasswordSalt?: string;
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
        IdToPasswordHash?: string;
        IdToPasswordSalt?: string;
        IdToLastDirectoryUpdate?: string;
        IdToUserImage?: string;
        IdToInsertDate?: string;
        IdToInsertUserId?: number;
        IdToUpdateDate?: string;
        IdToUpdateUserId?: number;
        IdToIsActive?: number;
    }

    export namespace MessagesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'Common.Messages';

        export declare const enum Fields {
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
            IdFromPasswordHash = "IdFromPasswordHash",
            IdFromPasswordSalt = "IdFromPasswordSalt",
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
            IdToPasswordHash = "IdToPasswordHash",
            IdToPasswordSalt = "IdToPasswordSalt",
            IdToLastDirectoryUpdate = "IdToLastDirectoryUpdate",
            IdToUserImage = "IdToUserImage",
            IdToInsertDate = "IdToInsertDate",
            IdToInsertUserId = "IdToInsertUserId",
            IdToUpdateDate = "IdToUpdateDate",
            IdToUpdateUserId = "IdToUpdateUserId",
            IdToIsActive = "IdToIsActive"
        }
    }
}

