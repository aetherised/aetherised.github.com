'use strict';

var test = `{{{
  "title": "Lorem ipsum dolor sit amet"
}}}

what up __boss hoss__`;

var test2 = `yo yo __boss hoss__`;

var parse_jmd = function(text) {
  var fmpat = /^\{\{\{\n(.*?)\n\}\}\}\n/m;
  var bpat = /^\}\}\}\n\n(.*$)/m;
  var frontmatter = {};
  var body = "";
  var e = fmpat.exec(text);
  if (e) {
    frontmatter = "{\n" + e[1] + "\n}";
    frontmatter = JSON.parse(frontmatter);
    var b = bpat.exec(text);
    if (b) {
      body = b[1];
    }
  } else {
    body = text;
  }
  return [frontmatter, body];
}

console.log(parse_jmd(test));
