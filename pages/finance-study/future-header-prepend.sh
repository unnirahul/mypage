#!/bin/bash

if [ -f header ]; then
	read -p "File name: " filename
	lines=$(cat $filename | wc -l)+1

	for f in $(find . -name "*.html"); do
	                firstlines=head -$lines $f
        	        sed -i 1,$(($lines))d $f
                	cat $filename $f > $f.new
                	mv $f.new $f
	done
else
        echo "footer file does not exist. Do not add any extension"
fi
echo $(($lines))
