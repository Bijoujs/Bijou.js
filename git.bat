while true; do
  cd /workspace/tiny.js
  showdown makehtml -i README.md -o README.html
  git stage .
  git commit -m "Auto-commit"
  git push
  sleep 2
  done