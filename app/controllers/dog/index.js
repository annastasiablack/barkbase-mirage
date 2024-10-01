import Controller from '@ember/controller';
import { computed } from '@ember/object'; // helper, define properties dependent on other properties and automatically update when those properties change 
import { filter } from '@ember/object/computed';

export default Controller.extend({
    searchQuery: '',

    // dynamically filter list of dogs based on searchQuery, triggered upon change of model name or textbox 
    filteredDogs: computed('model.@each.name', 'searchQuery', function() {
        // model paassed to controller by the route
        let dogs = this.get('model');
        let query = this.get('searchQuery').toLowerCase();
    
        if (query) {
          return dogs.filter(dog => dog.get('name').toLowerCase().includes(query));
        } else {
          return dogs;
        }
      }),

    queryParams: ['page', 'perPage'],
    page: 1,
    perPage: 4,
    actions: {
        deleteDog(id) {
            let confirmed = confirm('Are you sure want to delete this record?');
            if(confirmed) {
                // fetch dog record from ember data w/o back-end request
                let dog = this.store.peekRecord('dog', id);
                dog.deleteRecord();
                // send request to server
                dog.save();
            }
        },
        moveNext(page) {
            let maxPage = this.get('meta.pages');
            if(page < maxPage){
                page = page + 1;
                this.set('page', page);
            }
        },
        movePrev(page) {
            if(page > 1) {
                page = page - 1;
                this.set('page', page);
            }
        }
        // filterDogs() {
        // }
    }
});
