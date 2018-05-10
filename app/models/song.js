// app/models/song.js
import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
    title: '',
    rating: 0,
    band: null
});
