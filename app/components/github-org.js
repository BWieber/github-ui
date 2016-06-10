import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';

export default Ember.Component.extend({

  tagName: 'li',

  favorites: Ember.inject.service(),

  isFavorited: isInArray('org', 'favorites.items'),
  
  actions: {
      add(favorite) {
        this.get('favorites.items').addObject(favorite);
        console.log(this.get('favorites.items').join(', '));
      },

      remove(favorite) {
        this.get('favorites.items').removeObject(favorite);
        console.log(this.get('favorites.items').join(', '));
      }
  }

});
