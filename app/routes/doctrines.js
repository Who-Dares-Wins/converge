import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').findAll('doctrine');
  },

  actions: {
    createDoctrine() {
      this.get('store').createRecord('doctrine', {
        name: 'New doctrine'
      });
    },

    saveDoctrine(doctrine) {
      doctrine.save();
    },

    deleteDoctrine(doctrine) {
      doctrine.destroyRecord();
    }
  }

});
