import Route from '@ember/routing/route';

export default Route.extend({
    model({id}) {
        return this.store.peekRecord('dog', id);
    }
});
