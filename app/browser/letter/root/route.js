import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('root', params.root, { reload: true });
  },
  renderTemplate: function() {
    this.render({
      into: 'browser',
      outlet: 'content'
    });
  }
});
