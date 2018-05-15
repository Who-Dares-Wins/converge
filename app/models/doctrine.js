import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({

  name: attr('string'),

  description: attr('string'),

  priority: attr('number'),

  readiness: attr('number'),

  // Associations

  corporation: belongsTo('corporation'),

  alliance: belongsTo('alliance'),

  fittings: hasMany('fitting')

});
