import DS from 'ember-data';

export default DS.Model.extend({
  /* Attributes */
  slug: DS.attr('string'),
  abbr: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  /* Relational Bits */
  root: DS.belongsTo('root', { async: true })
});
