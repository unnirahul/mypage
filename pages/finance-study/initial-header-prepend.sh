#!/bin/bash

if [ -f header ]; then
	for f in $(find . -name "*.html"); do
        	cat header $f > $f.new
        	mv $f.new $f
	done;
else
        echo "header file does not exist. Do not add any extension"
fi
