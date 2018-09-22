/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />

namespace GraduateThesisManager.Common {

    export class MessagesBulkAction extends GraduateThesisManager.Common.BulkServiceAction {
        private errorMessage: string;
        public action: number; // 0 - Delete 1 - check 2 - important 
        constructor() {
            super();
        }

        get_errorMessage() {
            return this.errorMessage;
        }

        set_errorMessage(value: string) {
            this.errorMessage = value;
        }

        protected getAllHadErrorsFormat() {
            if (this.errorMessage != null) {
                return this.errorMessage;
            }
            return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
        }
        protected getSomeHadErrorsFormat() {
            if (this.errorMessage != null) {
                return this.errorMessage;
            }
            return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
        }
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests() {
            return 10;
        }

        //getConfirmationMessage(targetCount): string {
        //    return Q.text('Site.BulkServiceAction.DeleteIdentitysConfirmation');
        //}
        protected getConfirmationFormat() {
            return Q.text('Site.BulkServiceAction.MessagesConfirmation');
        }

        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize() {
            return 10;
        }

        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs 
         * that should be processed in this service call.
         */
        protected executeForBatch(batch) {
            MessagesService.MessageBatchAction(
                {
                    messages: batch,
                    action: this.action
                },
                response => this.set_successCount(this.get_successCount() + batch.length),
                {
                    blockUI: false,
                    onError: response => {
                        this.set_errorCount(this.get_errorCount() + batch.length);
                        this.set_errorMessage(response.Error.Message);
                    },
                    onCleanup: () => this.serviceCallCleanup(),
                    async: true
                });
        }
    }


}