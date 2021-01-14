while true; do
  cd /workspace/tiny.js
  printf "\033c"
  showdown makehtml -i README.md -o README.html
  printf "\033c"
  terser --compress --mangle -o tiny-min.js -- tiny.js
  printf "\033c"
  git stage .
  printf "\033c"
  git commit -m "Some changes"
  printf "\033c"
  git push
  printf "\033c"
  sleep 1
  done