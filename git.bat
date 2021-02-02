npm i -g showdown terser prettier figlet-cli

function commit {
  COMMIT=$(git status --porcelain)
  if [[ ${#COMMIT} -ge 1 ]] ; then
    cd /workspace/Bijou.js
    showdown makehtml -i README.md -o README.html
    terser --compress --mangle -o bijou-min.js -- bijou.js
    COMMIT_FILE=$(git diff --name-only)
    git stage .
    DATE=$(date +"%F %H:%M:%S")
    USER=$(git config user.name)
    EMAIL=$(git config user.email)
    REPO="BIJOU.JS"
    FIGLET_REPO=$(figlet -kf Big -- $REPO)
    BR=$'\n'
    COMMIT_MSG=$"${FIGLET_REPO}${BR}Files changed: ${BR}${BR}${COMMIT}${BR}${BR}Date: ${DATE}${BR}User: ${USER}${BR}Email: ${EMAIL}"
    git commit -m "${COMMIT_FILE}" -m "${COMMIT_MSG}"
  fi
}
function beautify {
  cd /workspace/bijou.js
  showdown makehtml -i README.md -o README.html
  terser --compress --mangle -o bijou-min.js -- bijou.js
  prettier --quote-props=consistent --trailing-comma=all --no-semi --write -- ./
  eslint --fix ./
  COMMIT_FILE=$(git diff --name-only)
  git stage .
  DATE=$(date +"%F %H:%M:%S")
  USER=$(git config user.name)
  EMAIL=$(git config user.email)
  REPO="BIJOU.JS"
  FIGLET_REPO=$(figlet -kf Big -- $REPO)
  BR=$'\n'
  COMMIT_MSG=$"${FIGLET_REPO}${BR}Files changed: ${BR}${BR}${COMMIT}${BR}${BR}Date: ${DATE}${BR}User: ${USER}${BR}Email: ${EMAIL}"
  git commit -m "${COMMIT_FILE}" -m "${COMMIT_MSG}"
}
while true; do 
  commit
  done
