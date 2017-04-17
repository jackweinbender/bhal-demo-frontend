import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render({
      into:'admin',
      outlet: 'content'
    });
  },
  model: function(){
    return this.store.find('User');
  }
});
