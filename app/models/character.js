import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({

  characterId: attr('number'),

  name: attr('string'),

  lastEsiUpdate: attr('string'),

  // Associations

  account: belongsTo('account'),

  corporation: belongsTo('corporation'),

  alliance: belongsTo('alliance')

});
