# Lock Passwordless

Every commit pushed to this branch will automatically be deployed to [http://lock-passwordless-react.herokuapp.com/](http://lock-passwordless-react.herokuapp.com/) and it will serve the _support/design_ directory.

To sync with most recent changes in the _master_ branch, run the following commands:

```
git merge master
npm run build:heroku_design
git add support/design
git commit -m 'Sync build for heroku'
git push origin heroku-design
```
