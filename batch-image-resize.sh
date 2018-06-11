#!/usr/bin/env bash
# Purpose: batch image resizer

# absolute path to image folder
FOLDER="./png"

# max height
HEIGHT=300

# max width
WIDTH=436

#resize png only to either height or width, keeps proportions using imagemagick
find ${FOLDER} -iname '*.png' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;
