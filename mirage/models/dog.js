import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
    imageURL: DS.attr('string'),
    name: DS.attr('string'),
    breed: DS.attr('string'),
    weight: DS.attr('number')
});
