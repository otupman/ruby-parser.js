// prepare parser

var RubyParser = require('../parse.js').RubyParser;
RubyParser.prototype.print = function (msg) { throw msg }

var parser = new RubyParser();
// declare helper variables
['foo', 'bar', 'baz'].forEach(function (v) { parser.declareVar(v) })


// prepare mocking

var slice = Array.prototype.slice;
function s ()
{
  return slice.call(arguments);
}

global.print = require('util').print;

function by_path (node, path)
{
  if (path === undefined || path === '')
    return node

  path = path.split('/');
  for (var i = 0, il = path.length; i < il; i++)
    node = node[+path[i]];

  return node
}

// the main workhorse

function assert_location (line, col, code, path)
{
  // do actual parsing
  var root = parser.parse(code, '(assert_parses)');
  var node = by_path(root, path);

  // find out and unpack the root node location
  var node_loc;
  if (node.loc == undefined)
    node_loc = undefined;
  else
    node_loc = RubyParser.Lexer.unpack_location(node.loc);

  // copare their unpacked values (two hashes)
  expect(node_loc).toEqual({line: line, col: col});
}



describe("locations", function() {

  // program:
  it("test_empty_stmt", function() {
    assert_location
    (
      0,0,
      ""
    )
  });
  it("test_empty_stmt_spaces", function() {
    assert_location
    (
      3,4,
      "\n\n    "
    )
  });

  it("test_BEGIN", function() {
    assert_location
    (
      3,4,
      "\n\n" +
      "1;  BEGIN {}",
      '1'
    )
  });

});