function commit {
  cd /workspace/tiny.js
  showdown makehtml -i README.md -o README.html
  terser --compress --mangle -o tiny-min.js -- tiny.js
  prettier --quote-props=consistent --trailing-comma=all --no-semi --write -- tiny.js
  git stage .
  COMMIT=$(git diff --name-only --cached)
  git commit -m "${COMMIT}"
  git push
}