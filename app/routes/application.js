import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import DS from 'ember-data';

const { NotFoundError, UnauthorizedError } = DS;

export default Route.extend({

  ajax: service(),

  session: service(),

  account: reads('session.account'),

  async afterModel() {
    let account = this.get('account');

    if (account)
      return;

    try {
      let response = await this.get('ajax').request('/auth/whoami');
      account = response.account;
    } catch(e) {
      this.transitionTo('authorize');
    }

    if (account)
      this.get('session').create(account);
  },

  error(error) {
    if (error instanceof UnauthorizedError || error instanceof NotFoundError) {
      this.get('session').destroy();
    }

    this.transitionTo('authorize');
  },

  actions: {
    async logout() {
      try {
        await this.get('ajax').request('/auth/logout');
      } catch(e) {
        // TODO
      }

      this.get('session').destroy();
      this.transitionTo('authorize');
    }
  }

});
