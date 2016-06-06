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
    add(favorite) {
      this.get('favorites.items').addObject(favorite);
      console.log(this.get('favorites.items').join(', '));
    },

    linksToggled() {
      console.log("TOGGLED");
    }
  }
});
