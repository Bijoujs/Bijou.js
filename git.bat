while true; do
  cd /workspace/tiny.js
  git stage .
  git commit -m "%FORMAT"
  git push
  sleep 1
  done