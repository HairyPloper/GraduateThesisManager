namespace GraduateThesisManager.Common {
    export interface MessagesResponse extends Serenity.ServiceResponse {
        IsSuccessful?: boolean;
        error?: string;
    }
}

