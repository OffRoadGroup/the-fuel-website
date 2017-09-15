#!/bin/sh

echo '### Interpolating Variables ###'
sed -i 's/TAC_PREVIEW_TOKEN/'"$TAC_PREVIEW_TOKEN"'/g' _config.yml 
sed -i 's/TAC_CONTENTFUL_ACCESS_TOKEN/'"$TAC_CONTENTFUL_ACCESS_TOKEN"'/g' _config.yml 
sed -i 's/TAC_CONTENTFUL_SPACE_ID/'"$TAC_CONTENTFUL_SPACE_ID"'/g' _config.yml 
echo '### Fetching content & Building site ###'
jekyll contentful --rebuild
echo '### DONE ###'
echo '### Removing Variables from config file ###'
echo '### DONE ###'
