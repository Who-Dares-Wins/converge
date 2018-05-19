import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Controller.extend({

  session: service(),

  account: reads('session.account'),

  // actions: {
  //   openMenu() {
  //     $('.ui.sidebar')
  //       .sidebar('setting', 'transition', 'overlay')
  //       .sidebar('toggle');
  //   }
  // }

});
