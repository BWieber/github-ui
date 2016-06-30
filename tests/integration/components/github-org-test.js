import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders with default values', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('company', 'python');

  this.render(hbs`{{github-org org=company}}`);

  assert.equal(this.$().text().trim(), "[Favorite]");

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      org=0
      on-fav-clicked='favoriteClicked'
    {{/github-org}}
  `);

  assert.equal(this.$().text().trim(), '[Favorite]');
});
