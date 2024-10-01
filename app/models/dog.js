// import DS from 'ember-data';
import Model, { attr } from '@ember-data/model';

// updated to ES6 syntax & added explicit data types
// could improve by adding validations via library & adding logic to controller
export default class DogModel extends Model {
    // set default image when creating a new dog
    @attr('string', { defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySuVYbXn6Yg8UOIlTVjAiWRtQbJikNnRWj8Dz3gjFu6CMg_PR00kyJZOZltXV3AX9Xik&usqp=CAU' }) imageURL;
    @attr('string') name;
    @attr('string') breed;
    @attr('number') weight;
};
