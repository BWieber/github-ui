import Ember from 'ember';

  var companies = [
        {id: "emberjs"},
        {id: "ember-cli"},
        {id: "microsoft"},
        {id: "yahoo"},
        {id: "netflix"},
        {id: "facebook"}
  ];

export default Ember.Route.extend({

  model() {
    return companies;
  },

  favorites: Ember.inject.service(),

  actions: {
    add(favorite) {
      this.get('favorites.items').addObject(favorite);
      console.log(this.get('favorites.items').join(', '));
    }
  }
});
