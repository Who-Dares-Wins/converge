import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').findAll('doctrine');
  },

  actions: {
    createDoctrine() {
      this.get('store').createRecord('doctrine', {
        name: 'New doctrine',
        description: 'A description for this doctrine',
        priority: 1,
        readiness: 50
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
