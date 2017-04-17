import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  roots: DS.hasMany('root', { async:true })
});
