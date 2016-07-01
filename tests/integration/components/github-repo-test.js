import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders with default values', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('forks', 43);

  this.set("watchers", 15);

  this.render(hbs`{{github-repo forks=forks watchers=watchers}}`);

  assert.equal(this.$("h5").text().trim(), `Fork Count: 43  Watcher Count: 15` );


});
