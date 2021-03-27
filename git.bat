npm install;
npm i -g eslint eslint-plugin-jsdoc jsdoc prettier terser figlet-cli @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-modules-commonjs rollup
npm install eslint-plugin-jsdoc @babel/plugin-transform-spread @babel/plugin-transform-template-literals @babel/preset-env babel @babel/plugin-transform-arrow-functions @babel/plugin-transform-sticky-regex @babel/plugin-transform-shorthand-properties @rollup/plugin-node-resolve

function remove {
  rm -f .git/index.lock
}

function commit {
  COMMIT=$(git status --porcelain)
  cd /workspace/Bijou.js
  rm bijou_node.js
  rm bijou_rollup.js
  rm -r docs/docs
  rm bijou-min.js
  rollup -c
  jsdoc -c jsdoc.json
  eslint --fix ./
  prettier --write -- .
  babel --plugins=@babel/plugin-transform-modules-commonjs -o bijou_node.js -- bijou-rollup.js
  terser --mangle --compress --comments false -o bijou_node.js -- bijou_node.js
  terser --comments false --ecma 6 --ie8 --module --compress --drop-console --mangle -o docs/bijou.js -- bijou-rollup.js
  terser --comments false --ecma 6 --ie8 --module --compress --drop-console --mangle -o bijou-min.js -- bijou-rollup.js
  if [[ ${#COMMIT} -ge 1 ]] ; then
    echo "Commit message?   "
    read COMMIT_CUSTOM_MSG
    COMMIT_FILE=$(git diff --name-only)
    git stage .
    DATE=$(date +"%F %H:%M:%S")
    USER=$(git config user.name)
    EMAIL=$(git config user.email)
    REPO="BIJOU.JS"
    FIGLET_REPO=$(figlet -kf Big -- $REPO)
    BR=$'\n'
    COMMIT_MSG=$"${FIGLET_REPO}${BR}Files changed: ${BR}${BR}${COMMIT}${BR}${BR}Date: ${DATE}${BR}User: ${USER}${BR}Email: ${EMAIL}"
    git commit -m "${COMMIT_CUSTOM_MSG}${BR}${BR}" -m "${COMMIT_MSG}"
  fi
}

remove
commit
git push