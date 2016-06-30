import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      {id: "python"},
      {id: "ember-cli"},
      {id: "microsoft"},
      {id: "javascript"},
      {id: "clojure"},
      {id: "facebook"}
    ]},

  favorites: Ember.inject.service(),

  actions: {
    favoriteClicked(org) {
      if (this.get('favorites.items').indexOf(org) < 0) {
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unFavoriteItem(org);
      }
    },

    linksToggled() {
      console.log("TOGGLED");
    }
  }
});
