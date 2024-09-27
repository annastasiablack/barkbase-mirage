import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    imageURL(i) {
        const urls = [
        'https://preview.redd.it/j2u52niuvb121.jpg?width=640&crop=smart&auto=webp&s=0f5beff3701e947b90d61727de95575bc2dff3ce',
         'https://petlandbradenton.com/wp-content/uploads/2023/03/2110211_800-600x450.jpg', 
         'https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8'];
        return urls[i];
    },
    name(i) {
        const names = ['Kaladin', 'Auri', 'Moraine'];
        return names[i];
    },
    breed(i) {
        const names = ['Doberman Pinscher', 'Poodle', 'Border Collie'];
        return names[i];
    },
    weight() {
        let min = 7;
        let max = 100;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
