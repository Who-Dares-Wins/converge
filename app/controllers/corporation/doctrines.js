import Controller from '@ember/controller';

export default Controller.extend({

  priorities: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  init() {
    this._super(...arguments);

    this.set('doctrine', {});
  },

  actions: {
    createDoctrine() {
      $('.ui.doctrine.modal').modal('show').css('position', 'relative');
    },
  
    async saveDoctrine(doctrine) {
      debugger;
      let model = this.get('model');
      let record = await this.get('store').createRecord('doctrine', {
        name: doctrine.name,
        description: doctrine.description,
        priority: doctrine.priority,
        readiness: 0
      });

      record.save();

      let corporation = await this.get('store').findRecord('corporation', model.id);

      corporation.get('doctrines').pushObject(record);
      corporation.save();
    },

    deleteDoctrine(doctrine) {
      doctrine.destroyRecord();
    },

    clearDoctrine() {
      //
    }
  }

});
