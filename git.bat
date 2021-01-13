while true; do
  cd /workspace/tiny.js
  showdown makehtml -i README.md -o README.html
  terser --compress --mangle -o tiny-min.js -- tiny.js
  git stage .
  git commit -m "Auto-commit"
  git push
  sleep 1
  done 