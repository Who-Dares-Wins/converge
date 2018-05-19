import Controller from '@ember/controller';

export default Controller.extend({

  isSaving: false,

  doctrineToAdd: null,

  doctrineToEdit: null,

  priorities: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  actions: {
    createDoctrine() {
      this.set('doctrineToAdd', {});
    },
  
    async saveDoctrine(doctrine) {
      this.set('isSaving', true);

      let model = this.get('model');
      let corporation = await this.get('store').findRecord('corporation', model.id);
      let record;

      let payload = {
        name: doctrine.name,
        description: doctrine.description,
        priority: doctrine.priority,
        readiness: 0,
        corporation
      };

      if (!doctrine.id) {
        record = await this.get('store').createRecord('doctrine', payload);
      } else {
        record = doctrine;
        // record.set('name', payload.name);
        // record.set('description', payload.description);
        // record.set('priority', payload.priority);
        // record.set('corporation', payload.corporation);
      }

      try {
        await record.save();
      } catch(e) {
        this.set('isSaving', false);

        // Avoid showing the failed record in the list
        record.set('corporation', null);

        return this.set('message', {
          type: 'error',
          header: 'There was a problem',
          text: `You're likely missing a field.`
        });
      }

      this.set('doctrineToAdd', null);
      this.set('doctrineToEdit', null);
      this.set('isSaving', false);

      this.set('message', {
        type: 'success',
        header: 'Doctrine saved.',
        text: null
      });
    },

    deleteDoctrine(doctrine) {
      doctrine.destroyRecord();
    },

    editDoctrine(doctrine) {
      this.set('doctrineToEdit', doctrine);
    },

    clearDoctrine() {
      // TODO: A better way
      this.set('doctrineToAdd', null);
      this.set('doctrineToEdit', null);
    },

    closeMessage() {
      this.set('message', null);
    }
  }

});
