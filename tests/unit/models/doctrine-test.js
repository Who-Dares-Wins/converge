import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | doctrine', function(hooks) {
  setupTest(hooks);

  test('should own several fittings', function(assert) {
    const Doctrine = this.owner.lookup('service:store').modelFor('doctrine');

    // lookup the relationship on the user model
    const relationship = get(Doctrine, 'relationshipsByName').get('fittings');

    assert.equal(relationship.key, 'fittings', 'has relationship with fittings');
    assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
  });
});
