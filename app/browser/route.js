import Ember from 'ember';
import ProtectedRoute from '../mixins/protected-route';

export default Ember.Route.extend(ProtectedRoute, {
  model: function(){
    return this.store.findAll('Letter');
  }
});
