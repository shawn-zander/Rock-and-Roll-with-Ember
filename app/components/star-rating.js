// app/components/star-rating.js
import { computed } from '@ember/object';
import Component from '@ember/component';

// noinspection JSAnnotator
export default Component.extend({
    classNames: ['rating-panel'],
    rating: 0,
    maxRating: 5,
    onClick() {},

    stars: computed('rating', 'maxRating', function() {
        let stars = [];
        let rating = this.get('rating');
        for (let i=1; i <= this.get('maxRating'); i++) {
            stars.push({rating: i, isFull: rating >= i });
        }
       return stars;
    }),

    actions: {
        setRating: function(newRating) {
            return this.get('onClick')(newRating);
        }
    }
});
