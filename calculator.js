/* A Bison parser, made by GNU Bison 2.7.12-4996.  */

/* Skeleton implementation for Bison LALR(1) parsers in JavaScript
   
      Copyright (C) 2007-2013 Free Software Foundation, Inc.
   
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.  */

/* As a special exception, you may create a larger work that contains
   part or all of the Bison parser skeleton and distribute that work
   under terms of your choice, so long as that work isn't itself a
   parser generator using the skeleton or a modified version thereof
   as a parser skeleton.  Alternatively, if you modify or redistribute
   the parser skeleton itself, you may (at your option) remove this
   special exception, which will cause the skeleton and the resulting
   Bison output files to be licensed under the GNU General Public
   License without this special exception.
   
   This special exception was added by the Free Software Foundation in
   version 2.2 of Bison.  */


/* First part of user declarations.  */
/* Line 32 of lalr1.js  */
/* Line 1 of "calculator.y"  */

  // alert(123)


/**
 * A Bison parser, automatically generated from <tt>calculator.y</tt>.
 *
 * @author LALR (1) parser skeleton written by Paolo Bonzini.
 */




/**
* A class defining a pair of positions.  Positions, defined by the
* <code>Position</code> class, denote a point in the input.
* Locations represent a part of the input through the beginning
* and ending positions.  */
function Location (begin, end) {
  /** The first, inclusive, position in the range.  */
  this.begin = begin;
  this.end = end;
}

Location.prototype.toString = function () {
  if (this.begin === this.end)
    return "" + begin;

  return this.begin + "-" + this.end;
}


function YYStack ()
{
  var stateStack = [];
  var locStack = [];
  var valueStack = [];

  this.push = function push (state, value, location)
  {
    stateStack.push(state);
    locStack.push(location);
    valueStack.push(value);
  }

  this.pop = function pop (num)
  {
    if (num <= 0)
      return;

    valueStack.length -= num;
    locStack.length -= num;
    stateStack.length -= num; // TODO: original code lacks this line
  }

  this.stateAt = function stateAt (i)
  {
    return stateStack[stateStack.length - i];
  }

  this.locationAt = function locationAt (i)
  {
    return locStack[locStack.length - i];
  }

  this.valueAt = function valueAt (i)
  {
    return valueStack[valueStack.length - i];
  }

  // Print the state stack on the debug stream.
  this.print = function print ()
  {
    console.log("Stack now");

    for (var i = 0; i <= stateStack.length; i++)
    {
      console.log(' ' + stateStack[i]);
    }
  }
  
  this.locationFromNthItemToCurrent = function locationFromNthItemToCurrent (n)
  {
    if (n > 0)
      return new Location(locationAt(n-1).begin, locationAt(0).end);
    
    var end = locationAt(0).end
    return new Location(end, end);
  }
}

// Instantiates the Bison-generated parser.
function YYParser (yylexer)
{
  // The scanner that will supply tokens to the parser.
  this.yylexer = yylexer;




  // True if verbose error messages are enabled.
  var errorVerbose = false;

  // Token returned by the scanner to signal the end of its input.
  var EOF = 0;

  // Tokens.
  // Token numbers, to be returned by the scanner.
  
var TOKENS = {
  'E': 258,
  'EOF': 259,
  'NUMBER': 260,
  'PI': 261,
  'UMINUS': 262
};














  var yydebug = false;



  function yyerror (location, message)
  {
    yylexer.yyerror(location, message);
  }

  






  function yycdebug (message)
  {
    if (yydebug)
      console.log(message);
  }




  // Returned by a Bison action in order to stop the parsing process
  // and return success (<tt>true</tt>).
  var YYACCEPT = 0;


   // Returned by a Bison action in order to stop the parsing process
   // and return failure (<tt>false</tt>).  */
  var YYABORT = 1;

  // Returned by a Bison action in order to start error recovery
  // without printing an error message.
  var YYERROR = 2;

  // Internal return codes that are not supported for user semantic
  // actions.
  var YYERRLAB = 3;
  var YYNEWSTATE = 4;
  var YYDEFAULT = 5;
  var YYREDUCE = 6;
  var YYERRLAB1 = 7;
  var YYRETURN = 8;

  var yyntokens_ = 15;
  
  var yyerrstatus_ = 0;
  
  // Return whether error recovery is being done.
  // In this state, the parser reads token until it reaches a known state,
  // and then restarts normal operation.
  function recovering ()
  {
    return yyerrstatus_ == 0;
  }

  var yyval;
  var actionsTable =
  {
      '2': function ()
    /* Line 214 of lalr1.js  */
/* Line 45 of "calculator.y"  */
    {return (yystack.valueAt(2-(1)));},
  '3': function ()
    /* Line 214 of lalr1.js  */
/* Line 50 of "calculator.y"  */
    {yyval = (yystack.valueAt(3-(1))) + (yystack.valueAt(3-(3)));},
  '4': function ()
    /* Line 214 of lalr1.js  */
/* Line 52 of "calculator.y"  */
    {yyval = (yystack.valueAt(3-(1))) - (yystack.valueAt(3-(3)));},
  '5': function ()
    /* Line 214 of lalr1.js  */
/* Line 54 of "calculator.y"  */
    {yyval = (yystack.valueAt(3-(1))) * (yystack.valueAt(3-(3)));},
  '6': function ()
    /* Line 214 of lalr1.js  */
/* Line 56 of "calculator.y"  */
    {yyval = (yystack.valueAt(3-(1))) / (yystack.valueAt(3-(3)));},
  '7': function ()
    /* Line 214 of lalr1.js  */
/* Line 58 of "calculator.y"  */
    {yyval = Math.pow((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));},
  '8': function ()
    /* Line 214 of lalr1.js  */
/* Line 60 of "calculator.y"  */
    {yyval = -(yystack.valueAt(2-(2)));},
  '9': function ()
    /* Line 214 of lalr1.js  */
/* Line 62 of "calculator.y"  */
    {yyval = (yystack.valueAt(3-(2)));},
  '10': function ()
    /* Line 214 of lalr1.js  */
/* Line 64 of "calculator.y"  */
    {yyval = Number(yytext);},
  '11': function ()
    /* Line 214 of lalr1.js  */
/* Line 66 of "calculator.y"  */
    {yyval = Math.E;},
  '12': function ()
    /* Line 214 of lalr1.js  */
/* Line 68 of "calculator.y"  */
    {yyval = Math.PI;}
  }

  function yyaction (yyn, yystack, yylen) // int yyn, YYStack yystack, int yylen
  {
    var yyloc = yystack.locationFromNthItemToCurrent(yylen);

    /* If YYLEN is nonzero, implement the default value of the action:
       `$$ = $1'.  Otherwise, use the top of the stack.

       Otherwise, the following line sets YYVAL to garbage.
       This behavior is undocumented and Bison
       users should not rely upon it.  */
    // var yyval; moved up in scope chain to share with actions
    if (yylen > 0)
      yyval = yystack.valueAt(yylen - 1);
    else
      yyval = yystack.valueAt(0);

    yy_reduce_print(yyn, yystack);  // TODO: step into

    var actionClosure = actionsTable[yyn]
    if (actionClosure)
      actionClosure()

    yy_symbol_print("-> $$ =", yyr1_[yyn], yyval, yyloc); // TODO: step into

    yystack.pop(yylen);
    yylen = 0;

    // Shift the result of the reduction.
    yyn = yyr1_[yyn];
    var yystate = yypgoto_[yyn - yyntokens_] + yystack.stateAt(0);
    if (0 <= yystate && yystate <= yylast_ && yycheck_[yystate] == yystack.stateAt(0))
      yystate = yytable_[yystate];
    else
      yystate = yydefgoto_[yyn - yyntokens_];

    yystack.push(yystate, yyval, yyloc);
    return YYNEWSTATE;
  }

  /* Return YYSTR after stripping away unnecessary quotes and
     backslashes, so that it's suitable for yyerror.  The heuristic is
     that double-quoting is unnecessary unless the string contains an
     apostrophe, a comma, or backslash (other than backslash-backslash).
     YYSTR is taken from yytname.  */
  function yytnamerr_ (yystr)
  {
    if (yystr[0] == '"')
    {
      var yyr = '';
      strip_quotes:
      for (var i = 1; i < yystr.length; i++)
      {
        switch (yystr[i])
        {
          case '\'':
          case ',':
            break strip_quotes;

          case '\\':
            if (yystr[++i] != '\\')
              break strip_quotes;
              // Fall through.

          case '"':
            return yyr;

          default:
            yyr += yystr[i];
            break;
        }
      }
    }
    else if (yystr == "$end")
      return "end of input";

    return yystr;
  }

  /*--------------------------------.
  | Print this symbol on YYOUTPUT.  |
  `--------------------------------*/

  function yy_symbol_print(message, yytype, yyvaluep, yylocationp)
  {
    if (!yydebug)
      return;
    
    yycdebug
    (
      message
      + (yytype < yyntokens_ ? " token " : " nterm ")
      + yytname_[yytype]
      + " ("
      + yylocationp + ": "
      + (yyvaluep == null ? "(null)" : yyvaluep.toString())
      + ")"
    );
  }

  /**
   * Parse input from the scanner that was specified at object construction
   * time.  Return whether the end of the input was reached successfully.
   *
   * @return <tt>true</tt> if the parsing succeeds.  Note that this does not
   *          imply that there were no syntax errors.
   */
  function parse ()
  {
    /// Lookahead and lookahead in internal form.
    var yychar = yyempty_;
    var yytoken = 0;

    /* State.  */
    var yyn = 0;
    var yylen = 0;
    var yystate = 0;

    var yystack = new YYStack();

    /* Error handling.  */
    var yynerrs_ = 0;
    /// The location where the error started.
    var yyerrloc = null;

    /// Location of the lookahead.
    var yylloc = new Location(null, null);

    /// @$.
    var yyloc;

    /// Semantic value of the lookahead.
    var yylval = null;

    yycdebug("Starting parse");
    yyerrstatus_ = 0;


    /* Initialize the stack.  */
    yystack.push(yystate, yylval, yylloc);

    var label = YYNEWSTATE;
    for (;;)
    switch (label)
    {
      //----------------.
      // New state.     |
      //---------------/
      case YYNEWSTATE:
        // Unlike in the C/C++ skeletons, the state is already pushed when we come here.

        yycdebug("Entering state " + yystate);
        if (yydebug)
          yystack.print();

        // Accept?
        if (yystate == yyfinal_)
          return true;

        // Take a decision.
        // First try without lookahead.
        yyn = yypact_[yystate];
        if (yy_pact_value_is_default_ (yyn))
        {
          // goto
          label = YYDEFAULT;
          break; 
        }

        // Read a lookahead token.
        if (yychar == yyempty_)
        {
          yycdebug("Reading a token: ");
          yychar = yylexer.yylex();

          yylloc = new Location(yylexer.getStartPos(), yylexer.getEndPos());
          yylval = yylexer.getLVal();
        }


        // Convert token to internal form.
        if (yychar <= EOF)
        {
          yychar = yytoken = EOF;
          yycdebug("Now at end of input.");
        }
        else
        {
          yytoken = yytranslate_(yychar);
          yy_symbol_print("Next token is", yytoken, yylval, yylloc);
        }

        // If the proper action on seeing token YYTOKEN
        // is to reduce or to detect an error, take that action.
        yyn += yytoken;
        if (yyn < 0 || yylast_ < yyn || yycheck_[yyn] != yytoken)
        {
          // goto
          label = YYDEFAULT;
          break;
        }
        // <= 0 means reduce or error.
        else if ((yyn = yytable_[yyn]) <= 0)
        {
          if (yy_table_value_is_error_(yyn))
          {
            // goto
            label = YYERRLAB;
            break;
          }
          else
          {
            yyn = -yyn;

            // goto
            label = YYREDUCE;
            break;
          }
        }

        else
        {
          // Shift the lookahead token.
          yy_symbol_print("Shifting", yytoken, yylval, yylloc);

          // Discard the token being shifted.
          yychar = yyempty_;

          // Count tokens shifted since error;
          // after three, turn off error status.
          if (yyerrstatus_ > 0)
            --yyerrstatus_;

          yystate = yyn;
          yystack.push(yystate, yylval, yylloc);

          //goto
          label = YYNEWSTATE;
          break;
        }

        // won't reach here
        break;

      //-----------------------------------------------------------.
      // yydefault -- do the default action for the current state. |
      //----------------------------------------------------------/
      case YYDEFAULT:
        yyn = yydefact_[yystate];
        if (yyn == 0)
          label = YYERRLAB;
        else
          label = YYREDUCE;
        break;

      //------------------------------------.
      //  yyreduce -- Do a reduction.       |
      //-----------------------------------/
      case YYREDUCE:
        yylen = yyr2_[yyn];
        label = yyaction(yyn, yystack, yylen);
        yystate = yystack.stateAt(0);
        // goto label
        break;

      //-------------------------------------.
      // yyerrlab -- here on detecting error |
      //------------------------------------/
      case YYERRLAB:
        // If not already recovering from an error, report this error.
        if (yyerrstatus_ == 0)
        {
          ++yynerrs_;
          if (yychar == yyempty_)
            yytoken = yyempty_;
          yyerror(yylloc, yysyntax_error(yystate, yytoken));
        }

        yyerrloc = yylloc;
        if (yyerrstatus_ == 3)
        {
          // If just tried and failed to reuse lookahead token
          // after an error, discard it.

          if (yychar <= EOF)
          {
            // Return failure if at end of input.
            if (yychar == EOF)
              return false;
          }
          else
            yychar = yyempty_;
        }

        // Else will try to reuse lookahead token
        // after shifting the error token.

        // goto
        label = YYERRLAB1;
        break;

      //--------------------------------------------------.
      // errorlab -- error raised explicitly by YYERROR.  |
      //-------------------------------------------------/
      case YYERROR:

        yyerrloc = yystack.locationAt(yylen - 1);
        // Do not reclaim the symbols of the rule
        // which action triggered this YYERROR.
        yystack.pop(yylen);
        yylen = 0;
        yystate = yystack.stateAt(0);
        label = YYERRLAB1;
        break;

      //--------------------------------------------------------------.
      // yyerrlab1 -- common code for both syntax error and YYERROR.  |
      //-------------------------------------------------------------/
      case YYERRLAB1:
        yyerrstatus_ = 3; // Each real token shifted decrements this.

        for (;;)
        {
          yyn = yypact_[yystate];
          if (!yy_pact_value_is_default_(yyn))
          {
            yyn += yyterror_;
            if (0 <= yyn && yyn <= yylast_ && yycheck_[yyn] == yyterror_)
            {
              yyn = yytable_[yyn];
              if (0 < yyn)
                break;
            }
          }

          // Pop the current state because it cannot handle the error token.
          if (yystack.stateStack.length == 0)
          {
            return false;
          }

          yyerrloc = yystack.locationAt(0);
          yystack.pop(1);
          yystate = yystack.stateAt(0);
          if (yydebug)
          {
            yystack.print(yyDebugStream);
          }
        }


        // Muck with the stack to setup for yylloc.
        yystack.push(0, null, yylloc);
        yystack.push(0, null, yyerrloc);
        yyloc = yylloc(yystack, 2);
        yystack.pop(2);

        // Shift the error token.
        yy_symbol_print("Shifting", yystos_[yyn], yylval, yyloc);

        yystate = yyn;
        yystack.push(yyn, yylval, yyloc);
        // goto
        label = YYNEWSTATE;
        break;

      //--------------------------.
      // Accept.                  |
      //-------------------------/
      case YYACCEPT:
        return true;

      //----------------------.
      // Abort.               |
      //---------------------/
      case YYABORT:
        return false;
    }
  }

  // Generate an error message.
  function yysyntax_error(yystate, tok)
  {
    if (errorVerbose)
    {
      /* There are many possibilities here to consider:
         - Assume YYFAIL is not used.  It's too flawed to consider.
           See
           <http://lists.gnu.org/archive/html/bison-patches/2009-12/msg00024.html>
           for details.  YYERROR is fine as it does not invoke this
           function.
         - If this state is a consistent state with a default action,
           then the only way this function was invoked is if the
           default action is an error action.  In that case, don't
           check for expected tokens because there are none.
         - The only way there can be no lookahead present (in tok) is
           if this state is a consistent state with a default action.
           Thus, detecting the absence of a lookahead is sufficient to
           determine that there is no unexpected or expected token to
           report.  In that case, just report a simple "syntax error".
         - Don't assume there isn't a lookahead just because this
           state is a consistent state with a default action.  There
           might have been a previous inconsistent state, consistent
           state with a non-default action, or user semantic action
           that manipulated yychar.  (However, yychar is currently out
           of scope during semantic actions.)
         - Of course, the expected token list depends on states to
           have correct lookahead information, and it depends on the
           parser not to perform extra reductions after fetching a
           lookahead from the scanner and before detecting a syntax
           error.  Thus, state merging (from LALR or IELR) and default
           reductions corrupt the expected token list.  However, the
           list is correct for canonical LR with one exception: it
           will still contain any token that will not be accepted due
           to an error action in a later state.
      */
      if (tok != yyempty_)
      {
        // FIXME: This method of building the message is not compatible
        // with internationalization.
        var res = "syntax error, unexpected ";
        res += yytnamerr_(yytname_[tok]);
        var yyn = yypact_[yystate];
        if (!yy_pact_value_is_default_(yyn))
        {
          // Start YYX at -YYN if negative to avoid negative indexes in YYCHECK.
          // In other words, skip the first -YYN actions for this state
          // because they are default actions.
          var yyxbegin = yyn < 0 ? -yyn : 0;
          // Stay within bounds of both yycheck and yytname.
          var yychecklim = yylast_ - yyn + 1;
          var yyxend = yychecklim < yyntokens_ ? yychecklim : yyntokens_;
          var count = 0;
          for (var x = yyxbegin; x < yyxend; ++x)
          {
            if
            (
              yycheck_[x + yyn] == x
              && x != yyterror_
              && !yy_table_value_is_error_(yytable_[x + yyn])
            )
            {    
              ++count;
            }
          }
          if (count < 5)
          {
            count = 0;
            for (var x = yyxbegin; x < yyxend; ++x)
            {
              if
              (
                yycheck_[x + yyn] == x
                && x != yyterror_
                && !yy_table_value_is_error_(yytable_[x + yyn])
              )
              {
                res += (count++ == 0 ? ", expecting " : " or ");
                res += yytnamerr_(yytname_[x]);
              }
            }
          }
        }
        return res;
      } // if (tok != yyempty_)
    } // if (errorVerbose)

    return "syntax error";
  }

  // Whether the given <code>yypact_</code> value indicates a defaulted state.
  // @param yyvalue   the value to check
  function yy_pact_value_is_default_(yyvalue)
  {
    return yyvalue == yypact_ninf_;
  }

  // Whether the given <code>yytable_</code> value indicates a syntax error.
  // @param yyvalue   the value to check
  function yy_table_value_is_error_(yyvalue)
  {
    return yyvalue == yytable_ninf_;
  }

  // YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing STATE-NUM.
  var yypact_ninf_ = -8;
  var yypact_ =
  [
    //]
        10,    -8,    -8,    -8,    10,    10,     5,    17,    -8,    22,
      -8,    -8,    10,    10,    10,    10,    10,    -8,    -7,    -7,
      -5,    -5,    -8
    //[
  ];

  // YYDEFACT[S] -- default reduction number in state S.
  // Performed when YYTABLE doesn't specify something else to do.
  // Zero means the default is an error.  */
  var yydefact_ =
  [
    //]
         0,    11,    10,    12,     0,     0,     0,     0,     8,     0,
       1,     2,     0,     0,     0,     0,     0,     9,     3,     4,
       5,     6,     7
    //[
  ];

  // YYPGOTO[NTERM-NUM].
  var yypgoto_ =
  [
    //]
        -8,    -8,    -4
    //[
  ];

  // YYDEFGOTO[NTERM-NUM].
  var yydefgoto_ =
  [
    //]
        -1,     6,     7
    //[
  ];

  // YYTABLE[YYPACT[STATE-NUM]]. What to do in state STATE-NUM.
  // If positive, shift that token.
  // If negative, reduce the rule which number is the opposite.
  // If yytable_NINF_, syntax error.
  var yytable_ninf_ = -1;
  var yytable_ =
  [
    //]
         8,     9,    14,    15,    16,    10,    16,     0,    18,    19,
      20,    21,    22,     1,     0,     2,     3,     0,     4,     0,
       0,    11,     0,     5,    12,    13,    14,    15,    16,    12,
      13,    14,    15,    16,     0,     0,    17
    //[
  ];

  // YYCHECK.
  var yycheck_ =
  [
    //]
         4,     5,     9,    10,    11,     0,    11,    -1,    12,    13,
      14,    15,    16,     3,    -1,     5,     6,    -1,     8,    -1,
      -1,     4,    -1,    13,     7,     8,     9,    10,    11,     7,
       8,     9,    10,    11,    -1,    -1,    14
    //[
  ];

  // STOS_[STATE-NUM]
  // The (internal number of the) accessing symbol of state STATE-NUM.
  var yystos_ =
  [
    //]
         0,     3,     5,     6,     8,    13,    16,    17,    17,    17,
       0,     4,     7,     8,     9,    10,    11,    14,    17,    17,
      17,    17,    17
    //[
  ];

  // TOKEN_NUMBER_[YYLEX-NUM]
  // Internal symbol number corresponding to YYLEX-NUM.
  var yytoken_number_ =
  [
    //]
         0,   256,   257,   258,   259,   260,   261,    43,    45,    42,
      47,    94,   262,    40,    41
    //[
  ];

  // YYR1[YYN] -- Symbol number of symbol that rule YYN derives.
  var yyr1_ =
  [
    //]
         0,    15,    16,    17,    17,    17,    17,    17,    17,    17,
      17,    17,    17
    //[
  ];

  // YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.
  var yyr2_ =
  [
    //]
         0,     2,     2,     3,     3,     3,     3,     3,     2,     3,
       1,     1,     1
    //[
  ];

  // YYTNAME[SYMBOL-NUM] -- String name of the symbol SYMBOL-NUM.
  // First, the terminals, then, starting at \a yyntokens_, nonterminals.
  var yytname_ =
  [
    //]
    "$end", "error", "$undefined", "E", "EOF", "NUMBER", "PI", "'+'", "'-'",
  "'*'", "'/'", "'^'", "UMINUS", "'('", "')'", "$accept", "expressions",
  "e", null
    //[
  ];

  // YYRHS -- A `-1'-separated list of the rules' RHS.
  var yyrhs_ =
  [
    //]
        16,     0,    -1,    17,     4,    -1,    17,     7,    17,    -1,
      17,     8,    17,    -1,    17,     9,    17,    -1,    17,    10,
      17,    -1,    17,    11,    17,    -1,     8,    17,    -1,    13,
      17,    14,    -1,     5,    -1,     3,    -1,     6,    -1
    //[
  ];

  // YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in YYRHS.
  var yyprhs_ =
  [
    //]
         0,     0,     3,     6,    10,    14,    18,    22,    26,    29,
      33,    35,    37
    //[
  ];

  // YYRLINE[YYN] -- Source line where rule number YYN was defined.
  var yyrline_ =
  [
    //]
         0,    44,    44,    49,    51,    53,    55,    57,    59,    61,
      63,    65,    67
    //[
  ];

  // Report on the debug stream that the rule yyrule is going to be reduced.
  function yy_reduce_print (yyrule, yystack)
  {
    if (!yydebug)
      return;

    var yylno = yyrline_[yyrule];
    var yynrhs = yyr2_[yyrule];
    // Print the symbols being reduced, and their result.
    yycdebug ("Reducing stack by rule " + (yyrule - 1) + " (line " + yylno + "), ");

    // The symbols being reduced.
    for (var yyi = 0; yyi < yynrhs; yyi++)
      yy_symbol_print(
        "   $" + (yyi + 1) + " =",
        yyrhs_[yyprhs_[yyrule] + yyi],
        (yystack.valueAt(yynrhs-(yyi + 1))),
        yystack.locationAt (yynrhs-(yyi + 1))
      );
  }

  // YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.
  var yytranslate_table_ =
  [
    //]
         0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
      13,    14,     9,     7,     2,     8,     2,    10,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,    11,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     1,     2,     3,     4,
       5,     6,    12
    //[
  ];

  function yytranslate_ (t)
  {
    if (t >= 0 && t <= yyuser_token_number_max_)
      return yytranslate_table_[t];
    else
      return yyundef_token_;
  }

  var yylast_ = 36;
  var yynnts_ = 3;
  var yyempty_ = -2;
  var yyfinal_ = 10;
  var yyterror_ = 1;
  var yyerrcode_ = 256;

  var yyuser_token_number_max_ = 262;
  var yyundef_token_ = 2;
}

// Version number for the Bison executable that generated this parser.
YYParser.bisonVersion = "2.7.12-4996";

// Name of the skeleton that generated this parser.
YYParser.bisonSkeleton = "./lalr1.js";

