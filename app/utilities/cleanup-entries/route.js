import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render({
      into:'utilities',
      outlet: 'content'
    });
  },
  beforeModel: function() {
    this.transitionTo('utilities.cleanup-entries.page', 1);
  }
});
