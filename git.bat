npm install;
npm i -g eslint jsdoc prettier terser figlet-cli @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-modules-commonjs
npm install @babel/plugin-transform-spread @babel/plugin-transform-template-literals @babel/preset-env babel @babel/plugin-transform-arrow-functions @babel/plugin-transform-sticky-regex @babel/plugin-transform-shorthand-properties

function remove {
  rm -f .git/index.lock
}
function commit {
  COMMIT=$(git status --porcelain)
  cd /workspace/Bijou.js
  rm bijou_node.js
  rm -r docs/docs
  rm bijou-min.js
  eslint --fix ./
  prettier --write -- .
  babel --plugins=@babel/plugin-transform-modules-commonjs -o bijou_node.js -- bijou.js
  terser --mangle --compress --comments false -o bijou_node.js -- bijou_node.js
  jsdoc -c jsdoc.json
  sed -i -e '\@</head>@i\<link rel="shortcut icon" type="image/x-icon" href="favicon.png" /><meta name="theme-color" content="#008080" /> <meta name="title" content="Bijou.js – Docs" /> <meta name="description" content="Bijou.js docs, every function in Bijou.js is documented here!" /> <meta name="keywords" content="Bijou.js, Docs, Library, Code, JavaScript, JS, HTML, CSS" /> <meta name="robots" content="index, follow" /> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="language" content="English" /> <meta name="revisit-after" content="1 days" /> <meta name="author" content="--Explosion--, GrahamSH-LLK, Bijou.js Contributors" /> <!-- Open Graph / Facebook --> <meta property="og:type" content="website" /> <meta property="og:url" content="https://bijou.js.org" /> <meta property="og:title" content="Bijou.js – Docs" /> <meta property="og:description" content="Bijou.js docs, every function in Bijou.js is documented here!" /> <meta property="og:image" content="https://media.discordapp.net/attachments/795728683548540929/812363131153809418/bijou.png?width=628&height=401" /> <meta content="Bijou.js docs" property="og:site_name" /> <link type="application/json+oembed" href="embeds.json" /> <!-- Twitter --> <meta property="twitter:card" content="summary_large_image" /> <meta property="twitter:url" content="https://bijou.js.org/docs" /> <meta property="twitter:title" content="Bijou.js - Docs" /> <meta property="twitter:description" content="Bijou.js docs, every function in Bijou.js is documented here!" /> <meta property="twitter:image" content="https://media.discordapp.net/attachments/795728683548540929/812363131153809418/bijou.png?width=628&height=401" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" />' docs/docs/*.html
  terser --comments false --ecma 6 --ie8 --module --compress --drop-console --mangle -o docs/bijou.js -- bijou.js
  terser --comments false --ecma 6 --ie8 --module --compress --drop-console --mangle -o bijou-min.js -- bijou.js
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
    git commit -m "${COMMIT_CUSTOM_MSG} ${COMMIT_FILE}" -m "${COMMIT_MSG}"
  fi
}

remove
commit
git push