import Ember from 'ember';

export default Ember.Component.extend({

  favorites: Ember.inject.service(),

  actions: {
      add(favorite) {
        this.get('favorites.items').addObject(favorite);
        console.log(this.get('favorites.items').join(', '));
      }
  }

});
