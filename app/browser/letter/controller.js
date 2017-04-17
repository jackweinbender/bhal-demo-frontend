import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['root:asc'],  // or just 'firstname', or 'firstname:desc'
  sortedRoots: Ember.computed.sort('model.roots', 'sortProperties'),
});
