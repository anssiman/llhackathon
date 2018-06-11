#!/usr/bin/env bash
# Purpose: batch image optimizer

# absolute path to image folder
FILES="./png/*.png"

#optimize using optipng
optipng -o7 ${FILES};
