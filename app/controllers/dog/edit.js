import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveDog() {
            this.model.save();
            this.transitionToRoute('dog');
        }
    }
});
