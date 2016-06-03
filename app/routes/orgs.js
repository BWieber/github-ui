import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      {id: "logitech"},
      {id: "ember-cli"},
      {id: "microsoft"},
      {id: "ruby"},
      {id: "netflix"},
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
