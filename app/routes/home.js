import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  session: service(),

  model() {
    let account = this.get('session.account');

    return this.get('store').findRecord('account', account.id);
  }

});
