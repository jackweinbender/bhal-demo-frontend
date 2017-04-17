import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Controller.extend({
  etymology: computedAutosave('model.etymology.content', { saveDelay: 1000 }),
});
