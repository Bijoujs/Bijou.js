function commit {
  cd /workspace/bijou.js
  showdown makehtml -i README.md -o README.html
  git stage .
  git commit -m "README to HTML"
  terser --compress --mangle -o bijou-min.js -- bijou.js
  git stage .
  git commit -m "Minified source"
  prettier --quote-props=consistent --trailing-comma=all --no-semi --write -- /workspace/
  git stage .
  git commit -m "Beautified files"
  git stage .
  COMMIT=$(git diff --name-only --cached)
  DATE=$(date +"%F %H:%M:%S")
  USER=$(git config user.name)
  EMAIL=$(git config user.email)
  REPO="Bijou.js"
  FIGLET_REPO=$(figlet $REPO)
  BR=$'\n'
  COMMIT_MSG=$"${FIGLET_REPO}${BR}Files changed: ${COMMIT}${BR}Date: ${DATE}${BR}User: ${USER}${BR}Email: ${EMAIL}"
  git commit -m "${COMMIT}" -m "${COMMIT_MSG}"
  git push
}
while true; do
  commit
  done