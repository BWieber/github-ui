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
  }
});
