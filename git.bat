while true; do
  cd /workspace/tiny.js
  git stage .
  git commit -m "Auto-comit"
  git push
  sleep 1
  done