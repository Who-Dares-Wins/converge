import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  queryParams: [
    'corporation',
    // 'alliances'
  ],

  // Will be determined by session service later on
  isAdmin: true,

  hasDoctrines: computed('model.length', function() {
    let count = this.get('model.length');

    return count !== 0;
  })

});
