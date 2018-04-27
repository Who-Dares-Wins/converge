import Service from '@ember/service';

export default Service.extend({

  account: null,

  create(account) {
    this.set('account', account);
  },

  destroy() {
    this.set('account', null);
  }

});
