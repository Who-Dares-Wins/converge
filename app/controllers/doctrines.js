import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  hasDoctrines: computed('model.length', function() {
    let count = this.get('model.length');

    return count !== 0;
  })

});
