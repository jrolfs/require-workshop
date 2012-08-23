#!/bin/bash
# Example build process

# Get command line params
DEV=0
while getopts “d” OPTION
do
     case $OPTION in
         d)
             DEV=1
             echo -e "\n\n***************************************************************************"
             echo "!!!      Development mode, scripts and styles will not be minified      !!!"
             echo -e "***************************************************************************\n\n"
             ;;
     esac
done


echo -e "---------- *** Cleaning build directory *** ----------"
rm -dfr build
echo -e "Done.\n"


# Run the optimizer
echo -e "---------- *** Running r.js optimizer *** ----------"
if [ $DEV -eq 1 ]; then
    node_modules/requirejs/bin/r.js -o app/js/build.js optimize=none
else
    node_modules/requirejs/bin/r.js -o app/js/build.js
fi

# Rename output js
mv build/js/main.js build/js/main.js
echo -e "Done.\n"


echo -e "---------- *** Removing unecessary files and folders *** ----------"
# Remove unnecessary files
rm -v build/build.txt
find build -type f -name ".DS_Store" | xargs rm -v
find build -type f -name "*.less" -o -name "*.tpl" -o -name "*-dev*" | xargs rm -v
find build -type f -name "*.js" -not -name "main.js" | xargs rm -v

# Remove empty folders
find build -depth -empty -type d -exec rmdir {} \;
echo -e "Done.\n"


# Process CSS
echo -e "---------- *** Processing CSS with lessc *** ----------"
mkdir -p build/css

if [ $DEV -eq 1 ]; then
    node_modules/less/bin/lessc app/less/main.less > build/css/main.css
else
    node_modules/less/bin/lessc --yui-compress app/less/main.less > build/css/main.css
fi

echo -e "Done.\n"

# Process images into a single sprite
# NOTE: holding off on this until we come up with a solution to use for dev or parse css/html as well
#echo -e "---------- *** Processing images with sprite-factory *** ----------"
#.gems/bin/sf --output-image build/img/images.png --output-style build/css/images.css --layout packed build/imgj
#find build -type f -name "*.png" -not -name "images.png" | xargs rm -v


mv build/index-build.html build/index.html

echo -e "\033[38;5;120m\n\n♠  ==================== Build complete :) ==================== ♥\n"
find build
echo -e "\r"
du -kh build
echo -e "\n♦  =========================================================== ♣"