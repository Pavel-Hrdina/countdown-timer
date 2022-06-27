#!urs/bin/env

yarn build

cd dist

cp index.html 404.html
git add dist -f
git commit "adding dist"
git subtree push dist origin gh-pages
