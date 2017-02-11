#!/bin/bash
 
set -o errexit # Exit on error

function runTag {
	tag="$1"
	tagMsg="$2"
	echo '   Creating and pushing tags...'
	git tag -a "$tag" -m "$tagMsg"
	git push --tags
}

function createTag {
	releaseType="$1" #-staging or -prod

	DATE=`date +%Y-%m-%d`

	echo "What revision is this for "$DATE"? (e.g. a, b, c):"
	read revision

	tag=$DATE$revision$releaseType

	echo "Enter tag message:"
	read tagMsg

	echo "Tag:" $tag "Message:" $tagMsg
	echo "Is this correct?"
	select yn in "Yes" "No"; do
	    case $yn in
	        "Yes" )
	            runTag $tag "$tagMsg"
	            break;;
	        "No" )
	            exit;;
	    esac
	done
}

function deployStaging {
	echo '--------------------------------'
	echo 'Preparing Staging Deploy...'

	if [[ -z $(git status -s) ]]
	then
	  echo "      All files committed. Ready to build..."
	else
	  echo "Please commit/stash all changes before continuing."
	 exit
	fi

	echo '   Building bundle.js...'
	npm run build

	if [[ -z $(git status -s) ]]
	then
	  echo "      bundle.js is unchanged. No need to commit it."
	else
	  echo "      bundle.js has changed. About to commit it."
	  git commit -am 'Build'
	fi

	createTag '-staging'

	echo "   Pushing to git remote develop..."
	git push origin develop

	echo "   Deploying to staging Heroku..."
	git push staging develop:master
}

function deployProd {
	echo '--------------------------------'
	echo 'Preparing Prod Deploy...'

	git checkout master
	git merge develop --no-edit # Merge in the master branch without prompting

	if [[ -z $(git status -s) ]]
	then
	  echo "      All files committed. Ready to build..."
	else
	  echo "Please commit/stash all changes before continuing."
	 exit
	fi

	echo '   Building bundle.js...'
	npm run build

	if [[ -z $(git status -s) ]]
	then
	  echo "      bundle.js is unchanged. No need to commit it."
	else
	  echo "Uncommited files detected. Make sure you deploy to staging first"
	  exit
	fi

	createTag '-prod'

	echo "   Pushing to git remote master..."
	git push origin master

	echo "   Deploying to prod Heroku..."
	git push prod master

	git checkout develop
}


#########################################################################
# This is the first stuff that happens
# Call this file then pass through an argument
# ./deploy.sh -staging
# ./deploy.sh -prod
#########################################################################
key="$1"
case $key in
	-staging)
  deployStaging
  ;;
  --prod)
	deployProd
	;;
esac
