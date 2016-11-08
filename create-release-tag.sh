#!/bin/bash
<<<<<<< HEAD
set -e
=======
set -ex
>>>>>>> fb45d4fe0a6b972ec5d2d027ea5828f59d853324

# Create a new tag if the version file has been updated and a tag for that
# version doesn't already exist.

# Are we on master branch?
# We shouldn't push tags for version bump branches.
<<<<<<< HEAD
BRANCH=`git rev-parse --abbrev-ref HEAD`
if [[ "$BRANCH" == "master" ]]; then
=======

if [[ "$TRAVIS_BRANCH" == "master" ]]; then
>>>>>>> fb45d4fe0a6b972ec5d2d027ea5828f59d853324
  # get the version from the version file
  VERSION_TAG="v`cat VERSION.txt`"

  # check to make sure the tag doesn't already exist
  if ! git rev-parse $VERSION_TAG >/dev/null 2>&1; then
    echo "Creating new tag: $VERSION_TAG"
    git tag $VERSION_TAG
    git push origin $VERSION_TAG
  fi
else
  echo "Not creating release tag because we're on a branch..."
fi
