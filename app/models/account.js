import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({

  lastLogin: attr('string'),

  settings: attr('raw'),

  // Associations

  characters: hasMany('character')

});
