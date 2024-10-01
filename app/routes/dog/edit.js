import Route from '@ember/routing/route';

// updated syntax
// could improve with try/catch error handling 
export default class DogRoute extends Route {
    
    async model({id}) {
        try {
            // check local storage first, then API request
            return this.store.findRecord('dog', id); 
            // peekRecord is local storage only
            // fetch w/o network request can cause issues if the data is not preloaded or local store is outdated
        } catch (error) {
            // (ie. show a 404 page or error message)
            console.error('Dog not found', error);
            // improve by handling error or transition to an error route
            // this.transitionTo('error');
        }
    }
};
