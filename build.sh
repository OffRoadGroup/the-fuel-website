#!/bin/sh

echo '### Interpolating Variables ###'
sed -i 's/FUEL_PREVIEW_TOKEN/'"$FUEL_PREVIEW_TOKEN"'/g' _config.yml 
sed -i 's/FUEL_CONTENTFUL_ACCESS_TOKEN/'"$FUEL_CONTENTFUL_ACCESS_TOKEN"'/g' _config.yml 
sed -i 's/FUEL_CONTENTFUL_SPACE_ID/'"$FUEL_CONTENTFUL_SPACE_ID"'/g' _config.yml 
echo '### Fetching content & Building site ###'
jekyll contentful --rebuild
echo '### DONE ###'
echo '### Removing Variables from config file ###'
echo '### DONE ###'
