
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('character-portrait', 'helper:character-portrait', {
  integration: true
});

test('it resolves to a valid url', function(assert) {
  this.set('id', 1);
  this.set('size', 64);

  this.render(hbs`{{character-portrait id=id size=size}}`);

  assert.equal(this.$().text().trim(), 'https://imageserver.eveonline.com/Character/1_64.jpg');
});
