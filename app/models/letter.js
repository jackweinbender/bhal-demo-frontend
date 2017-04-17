import DS from 'ember-data';

export default DS.Model.extend({
  /* Attributes */
  letter: DS.attr('string'), // USED FOR PRIMARY KEY IN SERIALIZER
  name: DS.attr('string'),
  transliteration: DS.attr('string'),
  asciitranslit: DS.attr('string'),

  /* Relational Bits */
  roots: DS.hasMany('roots', { async: true })
});
