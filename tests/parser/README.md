
gindent -nut -bl -bli0 -cli2 -npcs ruby20parse.lexer.y -o ruby20parse.lexer.pretty.y


bison -l -r all parse.y; git diff -- parse.output