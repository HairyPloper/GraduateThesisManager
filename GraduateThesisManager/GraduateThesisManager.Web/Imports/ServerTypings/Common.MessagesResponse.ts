namespace GraduateThesisManager.Common {
    export interface MessagesResponse extends Serenity.ServiceResponse {
        IsSuccessful?: boolean;
        error?: string;
    }

    export interface MessagesResponseBatchRequest extends Serenity.ServiceRequest {
        messages?: string[];
        action?: number;
    }
}

