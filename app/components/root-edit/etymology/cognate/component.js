import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Component.extend({
  cognate: computedAutosave('model', { saveDelay: 1000 }) 
});
