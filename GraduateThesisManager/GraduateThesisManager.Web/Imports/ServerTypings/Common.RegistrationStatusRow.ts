namespace GraduateThesisManager.Common {
    export interface RegistrationStatusRow {
        Id?: number;
        Status?: string;
    }

    export namespace RegistrationStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Common.RegistrationStatus';
        export const lookupKey = 'Common.RegistrationStatus';

        export function getLookup(): Q.Lookup<RegistrationStatusRow> {
            return Q.getLookup<RegistrationStatusRow>('Common.RegistrationStatus');
        }

        export declare const enum Fields {
            Id = "Id",
            Status = "Status"
        }
    }
}

