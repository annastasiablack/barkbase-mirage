import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.dog = this.store.createRecord('dog');
    },
    actions: {
        saveDog() {
            this.dog.save();
            this.transitionToRoute('dog');
        }
    }
});
