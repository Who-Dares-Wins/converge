import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({

  name: attr('string'),

  description: attr('string'),

  priority: attr('number'),

  readiness: attr('number'),

  // Associations

  fittings: hasMany('fitting')

});
