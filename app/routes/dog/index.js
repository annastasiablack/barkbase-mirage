import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        page: {
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
    setupController(controller, { dogs, meta }) {
        this._super(controller, dogs);
        controller.set('meta', meta);
    }
});
