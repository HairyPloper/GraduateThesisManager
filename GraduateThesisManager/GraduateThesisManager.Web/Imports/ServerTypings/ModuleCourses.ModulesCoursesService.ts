namespace GraduateThesisManager.ModuleCourses {
    export namespace ModulesCoursesService {
        export const baseUrl = 'ModuleCourses/ModulesCourses';

        export declare function Create(request: Serenity.SaveRequest<ModulesCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ModulesCoursesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ModulesCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ModulesCoursesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ModuleCourses/ModulesCourses/Create",
            Update = "ModuleCourses/ModulesCourses/Update",
            Delete = "ModuleCourses/ModulesCourses/Delete",
            Retrieve = "ModuleCourses/ModulesCourses/Retrieve",
            List = "ModuleCourses/ModulesCourses/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ModulesCoursesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

