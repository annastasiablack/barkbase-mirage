import Route from '@ember/routing/route';

// improve with error handling 
export default Route.extend({
    queryParams: {
        page: {
            // route will reload model whenever param changed 
            refreshModel: true
        },
        size: {
            refreshModel: true
        }
    },
    model(params) {
        return this.store.query('dog', {
            page: {
                number: params.page,
                size: params.perPage
            }
        }).then((results)=>{
            return {
                dogs: results,
                meta: results.get('meta') 
            };
        });
    },
    // called after model is fetched & allows config of controller 
    setupController(controller, { dogs, meta }) {
        this._super(controller, dogs); // pass list of dogs as the model for the controller
        controller.set('meta', meta); // pagination info
    }
});
