#!/bin/bash
 
set -o errexit # Exit on error
 
git stash save 'Before staging deploy' # Stash all changes before deploy
npm run build # Generate the bundled Javascript and CSS
if $(git commit -am StagingBuild); then # Commit the changes, if any
  echo 'Changes Committed'
fi
git push origin develop # Push to git remote develop branch
git push staging develop:master # Deploy to Staging Heroku
git checkout master # Checkout master again
git stash pop # And restore the changes