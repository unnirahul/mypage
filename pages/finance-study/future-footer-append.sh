#!/bin/bash

if [ -f footer ]; then
	lines=$(cat $filename | wc -l)+1
	for f in $(find . -name "*.html"); do
        	head -n $(($lines)) $f
        	cat $filename >> $f
	done
else
        echo "footer file does not exist. Do not add any extension"
fi
echo $(($lines))
