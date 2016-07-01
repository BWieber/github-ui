import { test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | orgs');

test('visiting /orgs', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/orgs');
  });
});
