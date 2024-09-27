import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter } from '@ember/object/computed';

export default Controller.extend({
    searchQuery: '',

    filteredDogs: computed('model.@each.name', 'searchQuery', function() {
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
                let dog = this.store.peekRecord('dog', id);
                dog.deleteRecord();
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
        },
        filterDogs() {
        }
    }
});
