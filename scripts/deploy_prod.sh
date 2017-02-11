#!/bin/bash
 
set -o errexit # Exit on error
 
git stash save 'Before prod deploy' # Stash all changes before deploy
git checkout master
git merge develop --no-edit # Merge in the master branch without prompting
npm run build # Generate the bundled Javascript and CSS
if $(git commit -am ProdBuild); then # Commit the changes, if any
  echo 'Changes Committed'
fi
git push origin master # Push to git remote master branch
git push prod master # Deploy to Prod Heroku
git checkout develop # Checkout develop again
git stash pop # And restore the changes