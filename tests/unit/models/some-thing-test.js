import { moduleFor, test } from "ember-qunit";

moduleFor("model:some-thing", "Unit | some thing", {
  unit: true
});

test("should correctly concat foo", function(assert) {
  const someThing = this.subject();
  someThing.set("foo", "baz");
  assert.equal(someThing.get("computedFoo"), 'computed baz');
});

test("should update foo on testMethod", function(assert) {
  const someThing = this.subject();
  someThing.testMethod();
  assert.equal(someThing.get("foo"), "baz");
});
