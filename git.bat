function commit {
  cd /workspace/tiny.js
  showdown makehtml -i README.md -o README.html
  terser --compress --mangle -o tiny-min.js -- tiny.js
  prettier --quote-props=consistent --trailing-comma=all --no-semi --write -- tiny.js
  git stage .
  COMMIT=$(git diff --name-only --cached)
  DATE=$(date +"%F %H:%M:%S")
  USER=$(git config user.name)
  EMAIL=$(git config user.email)
  REPO=$(basename -s .git `git config --get remote.origin.url`)
  FIGLET=$(figlet -k $REPO)
  COMMIT_MSG=$"Files changed: ${COMMIT}, Date: ${DATE}, User: ${USER}, Email: ${EMAIL}"
  git commit -m "${COMMIT}" -m "${COMMIT_MSG}"
  git push
}

while true; do
  commit
  done