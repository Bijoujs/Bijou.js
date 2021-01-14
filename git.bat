function commit {
  cd /workspace/tiny.js
  showdown makehtml -i README.md -o README.html
  terser --compress --mangle -o bijou-min.js -- bijou.js
  prettier --quote-props=consistent --trailing-comma=all --no-semi --write -- tiny.js
  git stage .
  COMMIT=$(git diff --name-only --cached)
  DATE=$(date +"%F %H:%M:%S")
  USER=$(git config user.name)
  EMAIL=$(git config user.email)
  REPO=$(basename -s .git `git config --get remote.origin.url`)
  FIGLET_REPO=$(figlet $REPO)
  BR=$'\n'
  COMMIT_MSG=$"${FIGLET_REPO}${BR}Files changed: ${COMMIT}${BR}Date: ${DATE}${BR}User: ${USER}${BR}Email: ${EMAIL}"
  git commit -m "${COMMIT}" -m "${COMMIT_MSG}"
  git push
}
while true; do
  commit
  done