namespace GraduateThesisManager.Common {
    export namespace MessagesService {
        export const baseUrl = 'Common/Messages';

        export declare function Create(request: Serenity.SaveRequest<MessagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MessagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MessagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MessagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function MessageBatchAction(request: MessagesResponseBatchRequest, onSuccess?: (response: MessagesResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Common/Messages/Create",
            Update = "Common/Messages/Update",
            Delete = "Common/Messages/Delete",
            Retrieve = "Common/Messages/Retrieve",
            List = "Common/Messages/List",
            MessageBatchAction = "Common/Messages/MessageBatchAction"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'MessageBatchAction'
        ].forEach(x => {
            (<any>MessagesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

