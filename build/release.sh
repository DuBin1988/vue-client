set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # lint and test
  npm run lint 2>/dev/null
  npm run unit 2>/dev/null

  # e2e
  npm run e2e 2>/dev/null

  npm version $VERSION --message "[release] $VERSION"

  # commit
  git add -A
  git commit -m "[build] $VERSION"

  # publish
  git push origin refs/tags/v$VERSION
  git push
  npm publish
fi
