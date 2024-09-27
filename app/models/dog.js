import DS from 'ember-data';

export default DS.Model.extend({
    imageURL: DS.attr(),
    name: DS.attr(),
    breed: DS.attr(),
    weight: DS.attr('number')
});
