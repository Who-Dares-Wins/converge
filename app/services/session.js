import Service from '@ember/service';

export default Service.extend({

  account: null,

  create(character) {
    this.set('account', character);
  },

  destroy() {
    this.set('account', null);
  }

});
