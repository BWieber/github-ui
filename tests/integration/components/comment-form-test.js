import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: true
});

test("should trigger external action on form submit", function(assert) {

  this.set("externalAction", (actual) => {
    let expected = { comment: "You are not a wizard!" };
    assert.deepEqual(actual, expected, "submitted value is passsed to external action");
  });

  this.render(hbs`
    {{comment-form submitComment=(action externalAction)}}
  `);

  this.$("textarea").val("You are not a wizard!");
  this.$("textarea").change();

  this.$("input").click();

});
