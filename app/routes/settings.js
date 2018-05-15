import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Route.extend({

  session: service(),

  account: reads('session.account'),

  model() {
    let account = this.get('account');

    return this.get('store').find('account', account.id);
  }

});
