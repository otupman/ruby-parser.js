var RubyParser = require('../parse.js').RubyParser;
var parser = new RubyParser();

var slice = Array.prototype.slice;
function s ()
{
  return slice.call(arguments);
}

var toPlain = RubyParser.Builder.toPlain;
function assert_parses (ast, code)
{
  var a = JSON.stringify(ast);
  var b = JSON.stringify(toPlain(parser.parse(code, '(assert_parses)')));
  expect(a).toBe(b);
}

describe("A suite", function() {

  it("test_empty_stmt", function() {
    assert_parses
    (
      null,
      ""
    )
  });
  
  it("test_nil", function() {
    assert_parses(
      s('nil'),
      "nil")
  });
  
  it("test_nil_expression", function() {
    assert_parses(
      s('begin'),
      '()')

    assert_parses(
      s('kwbegin'),
      'begin end')
  });

  it("test_true", function() {
    assert_parses(
      s('true'),
      'true')
  });

  it("test_false", function() {
    assert_parses(
      s('false'),
      'false')
  });

  it("test_int", function() {
    assert_parses(
      s('int', 42),
      '42')

    assert_parses(
      s('int', -42),
      '-42')
  });

  it("test_int___LINE__", function() {
    assert_parses(
      s('int', 1),
      '__LINE__')
  });
  
  it("test_float", function() {
    assert_parses(
      s('float', 1.33),
      '1.33')

    assert_parses(
      s('float', -1.33),
      '-1.33')
  });

  // it("", function() {
  // });

});