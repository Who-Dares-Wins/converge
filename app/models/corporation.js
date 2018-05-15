import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({

  corporationId: attr('number'),

  name: attr('string'),

  ticker: attr('string'),

  memberCount: attr('number'),

  // Associations

  doctrines: hasMany('doctrine')

});
