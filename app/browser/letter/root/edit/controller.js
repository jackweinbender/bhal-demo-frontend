import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Controller.extend({
  editing: false,
  // Proxy for editign property for more semantic disabled fields
  editable: function(){
    return !this.get('editing');
  }.property('editing'),

  // THe auto-save proxied model
  root: computedAutosave('model', { saveDelay: 1000 }),

  // Computed property that returns a proper root_slug value, should the root change.
  rootId: function(){
    let display = this.get('model.display');
    let homonymNumber = this.get('model.homonymNumber');

    // If there is a homonym, use the long-form slug.
    if(homonymNumber !== 0){
      return display + '-' + homonymNumber;
    }
    // Otherwise, return the transliteration
    return  display;

  }.property('model.display', 'model.homonymNumber')
});
