module.exports = {
    jekyllBuild: {
            command: 'jekyll build'
        },
    jekyllBuildContentful: {
            command: 'jekyll contentful --rebuild'
    },
	interpolateEnvVariables: {
            command: `sed -i '' 's/FUEL_PREVIEW_TOKEN/'"$FUEL_PREVIEW_TOKEN"'/g' _config.yml && sed -i '' 's/FUEL_CONTENTFUL_ACCESS_TOKEN/'"$FUEL_CONTENTFUL_ACCESS_TOKEN"'/g' _config.yml && sed -i '' 's/FUEL_CONTENTFUL_SPACE_ID/'"$FUEL_CONTENTFUL_SPACE_ID"'/g' _config.yml`
    },
 	removeAPIKeys: {
            command: `sed -i '' 's/'"$TAC_PREVIEW_TOKEN"'/TAC_PREVIEW_TOKEN/g' _config.yml && sed -i '' 's/'"$FUEL_CONTENTFUL_ACCESS_TOKEN"'/FUEL_CONTENTFUL_ACCESS_TOKEN/g' _config.yml && sed -i '' 's/'"$FUEL_CONTENTFUL_SPACE_ID"'/FUEL_CONTENTFUL_SPACE_ID/g' _config.yml`
    },
    commentContentful: {
            command: `sed -i '' 's/"jekyll-contentful"/#"jekyll-contentful"/g' _config.yml && sed -i '' 's/gem "jekyll-contentful"/#gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/gem "jekyll-contentful-data-import"/#gem "jekyll-contentful-data-import"/g' Gemfile`
    },
    uncommentContentful: {
            command: `sed -i '' 's/#"jekyll-contentful"/"jekyll-contentful"/g' _config.yml && sed -i '' 's/#gem "jekyll-contentful"/gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/#gem "jekyll-contentful-data-import"/gem "jekyll-contentful-data-import"/g' Gemfile`
    }
       
}