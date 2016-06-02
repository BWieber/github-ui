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

  actions: {
    linksToggled() {
      console.log("TOGGLED");
    }
  }
});
