sudo npm i -g showdown terser prettier figlet-cli
function commit {
  COMMIT=$(git status --porcelain)
  if [[ ${#COMMIT} -ge 1 ]] ; then
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
  fi
}
function beautify {
  showdown makehtml -i README.md -o README.html
  terser --compress --mangle -o bijou-min.js -- bijou.js
  prettier --quote-props=consistent --trailing-comma=all --no-semi --write -- ./
  commit
}
beautify
