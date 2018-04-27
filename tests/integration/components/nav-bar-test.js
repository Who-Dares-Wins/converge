import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Quoteless action provided by parent
  this.set('logout', () => {});

  this.set('account', {
    mainCharacter: {
      name: 'The Mittani'
    }
  });

  // Template block usage:
  this.render(hbs`
    {{nav-bar
      account=account
      logout=logout}}
  `);

  assert.equal(this.$('a.item').length, 3, 'renders all nav options');
  assert.equal(
    this.$("[data-test-id='main-character-name']").text().trim(),
    'The Mittani',
    'renders name of session main character'
  );
});
