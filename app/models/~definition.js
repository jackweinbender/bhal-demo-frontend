import DS from 'ember-data';

export default DS.Model.extend({
  // Properties
  blocks: DS.hasManyFragments('definition-block'),
  __v: DS.attr(),
  // Relational properties
  forEntry: DS.attr('number'),
  entry: DS.belongsTo('entry', {async: true}),
  // Timestamp info
  createdAt: DS.attr('date'),
  lastModified: DS.attr('date'),
  // Computed Property

});
