import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({

  alliances: computed('model.characters', function() {
    let characters = this.get('model.characters');
    let alliances = [];

    characters.map((character) => {
      let alliance = character.get('alliance');

      if (alliance)
        alliances.push(alliance);
    });

    return alliances.uniqBy('id');
  }),

  corporations: computed('model.characters', function() {
    let characters = this.get('model.characters');
    let corporations = [];

    characters.map((character) => {
      let corp = character.get('corporation');

      corporations.push(corp);
    });

    return corporations.uniqBy('id');
  })

});
