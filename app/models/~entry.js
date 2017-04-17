import DS from 'ember-data';

export default DS.Model.extend({
  // Properties
  entry: DS.attr('Number'),
  word:  DS.attr('String'),
  letter: DS.attr('String'),
  root:   DS.attr('String'),
  homonymNumber: DS.attr('String'),
  strongs: DS.attr('Number'),
  page: DS.attr('Number'),
  speech: DS.attr('String'),
  basicDef: DS.attr('String'),
  historicalForm: DS.attr('String'),
  pattern: DS.attr('String'),
  __v: DS.attr(),
  // Relational properties
  definition: DS.belongsTo('definition', {async: true}),
  morphology: DS.attr('String'),
  etymology: DS.attr('String'),
  // Timestamp info
  createdAt: DS.attr('Date'),
  lastModified: DS.attr('Date'),
  // Metadata for editor
  isReconstructed: DS.attr('Boolean', {defaultValue: false}),
  correctedTsade: DS.attr('Boolean', {defaultValue: false}),
  isXref: DS.attr('Boolean', {defaultValue: false}),
  isRootEntry: DS.attr('Boolean', {defaultValue: false}),
  rootAssignNote: DS.attr('String'),
  // Computed Properties
  bdbLink: function() {
    var p = this.get('page');
    return "http://books.google.com/books?id=u0ATAAAAYAAJ&pg=PA" + p + "&f=true#v=onepage&q&f=true";
  }.property('page'),
  previousPage: function(){
    var p = this.get('page');
    return p - 1;
  }.property('page'),
  nextPage: function(){
    var p = this.get('page');
    return p + 1;
  }.property('page'),
  // Suggestor properties
  suggestTsade: function(){
    var word = this.get('word');
    var het = /ח/;
    return het.test(word);
  }.property('word'),
  suggestReconstructed: function(){
    var word = this.get('word');
    var reconstructed = /\[|\]/;
    return reconstructed.test(word);
  }.property('word')
});


// DS.belongsTo('definition', {async: true}),
