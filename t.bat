echo Commit message?
read COMMIT_MSG
git stage .
git commit -m "$COMMIT_MSG"
git push