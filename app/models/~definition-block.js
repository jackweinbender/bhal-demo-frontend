import DS from 'ember-data';

export default DS.ModelFragment.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  content: DS.attr('string'),
  show: DS.attr('string'),
  bodyHTML: function(){
    var text = this.get('body');

    text = replaceHebrew(text);
    text = replaceGreek(text);
    text = replaceTransliteration(text);

    return text;
  }.property('body')
});


function replaceHebrew(text){
  // This RegExp finds every string beginning with '[[' and ending
  // with ']]' and replaces these with spans class=hebrew, rtl/ltr markers.
  // It also always takes the innermost set of brackets and leaves the outer
  // brackets be.
    // $1 = Initial brackets (zero or more)
    // $2 = Opening brackets (exactly two) replaced with opening HTML tag
    // $3 = Hebrew content to be retained
    // $4 = Closing brackets (exactly two) replaced by closing HTML tag
    // $5 == Remaining brackets (zero or more)
  var find = new RegExp('(\\[*)(\\[\\[)(.*?)(\\]\\])(\\]*)', 'g');
  var replace = "$1&rlm;<span class='hebrew teal'>$3</span>&lrm;$5";

  return text.replace(find, replace);
}

function replaceGreek(text){
  // This RegExp finds every string beginning with '[[' and ending
  // with ']]' and replaces these with spans class=hebrew, rtl/ltr markers.
  // It also always takes the innermost set of brackets and leaves the outer
  // brackets be.
    // $1 = Initial braces (zero or more)
    // $2 = Opening braces (exactly two) replaced with opening HTML tag
    // $3 = Greek content to be retained
    // $4 = Closing braces (exactly two) replaced by closing HTML tag
    // $5 == Remaining braces (zero or more)
  var find = new RegExp('(\\{*)(\\{\\{)(.*?)(\\}\\})(\\}*)', 'g');
  var replace = "$1<span class='greek orange'>$3</span>$5";

  return text.replace(find, replace);
}

function replaceTransliteration(text){

  var find = new RegExp('\\/\\/(.*?)\\/\\/', 'g');
  var replace = "<em>$1</em>";

  return text.replace(find, replace);
}
