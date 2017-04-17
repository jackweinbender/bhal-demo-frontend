import DS from 'ember-data';

export default DS.Model.extend({
  /* Attributes */
  discussion: DS.attr('string'),
  literature: DS.attr('string'),

  /* Relational Bits */
  root: DS.belongsTo('root', { async: true })
});
