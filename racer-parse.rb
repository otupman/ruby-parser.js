require 'v8'
# require 'oj'

class ParserJS
  @@js = nil
  
  def load_parser
    return true if @@js
    
    @@js = V8::Context.new

    # for error logging and debugging
    @@js["print"] = lambda { |this, *msg| puts(msg.join(' ')) }
    @@js["write"] = lambda { |this, *msg| print(msg.join(' ')) }

    # allow module to export itself
    @@js["write"] = lambda { |this, *msg| print(msg.join(' ')) }
    @@js.eval("global = this;")

    @@js.load('/www/parser/parse.js')
  end

  def initialize
    load_parser
    
    @parser = @@js.eval <<-JS
      (function (){
        var lexer = new YYLexer();
        lexer.filename = '(source)';
  
        var parser = new YYParser(lexer);

        function to_plain (n)
        {
          if (!(n && n.type))
            return n;

          var ary = n.slice();
          ary.unshift(n.type);

          for (var i = 0, il = ary.length; i < il; i++)
            ary[i] = to_plain(ary[i]);

          return ary;
        }

        function reset ()
        {
          lexer.reset();
        }

        function declare (v)
        {
          parser.declareVar(v);
        }
      
        function set_filename (fn)
        {
          lexer.filename = fn;
        }
      
        function give_me_json (ruby)
        {
          lexer.setText(ruby);
          var ok = parser.parse(ruby);
          return JSON.stringify(to_plain(parser.resulting_ast));
        }
        
        return {
          reset: reset,
          set_filename: set_filename,
          declare: declare,
          give_me_json: give_me_json,
          
        }
      })()
    JS
  end
  
  def parse source
    @parser["give_me_json"].call(source)
  end
  
  def declare var
    @parser["declare"].call(var)
  end
  
  def filename= name
    @parser["set_filename"].call(name)
  end
  
  def reset_lexer
    @parser["reset"].call
  end
end
