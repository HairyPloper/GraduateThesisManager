namespace GraduateThesisManager.Thesis {
    export namespace ThesisRegistrationService {
        export const baseUrl = 'Thesis/ThesisRegistration';

        export declare function Create(request: Serenity.SaveRequest<ThesisRegistrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ThesisRegistrationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ThesisRegistrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ThesisRegistrationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Thesis/ThesisRegistration/Create",
            Update = "Thesis/ThesisRegistration/Update",
            Delete = "Thesis/ThesisRegistration/Delete",
            Retrieve = "Thesis/ThesisRegistration/Retrieve",
            List = "Thesis/ThesisRegistration/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ThesisRegistrationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

