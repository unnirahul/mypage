#!/bin/bash

if [ -f footer ]; then
	for f in $(find . -name "*.html"); do
    		cat footer >> $f
	done;
else
	echo "footer file does not exist. Do not add any extension"
fi
