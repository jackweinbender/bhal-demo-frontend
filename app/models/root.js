import DS from 'ember-data';

export default DS.Model.extend({
  /* Attributes */
  root: DS.attr('string'),
  rootSlug: DS.attr('string'),
  display: DS.attr('string'),
  homonymNumber: DS.attr('number'),
  basicDefinition: DS.attr('string'),
  historicalRoot: DS.attr('string'),

  /* Relational Bits */
  letter: DS.belongsTo('letter', { async: true }),
  etymology: DS.belongsTo('etymology', { async:true }),
  cognates: DS.hasMany('cognate', { async: true }),
  tags: DS.hasMany('root-tag', { async: true })
});
