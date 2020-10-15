## GIT commands

- `git stash`
- `git stash list`
- `git stash pop` --> Apply and delete last stash
- `git stash clear` --> Remove all stash entries
- `git stash drop stash@{index}` --> Remove a single stash entry from the list of stash entries. When no <stash> is given, it removes the latest one. i.e. stash@{0}, otherwise <stash> must be a valid stash log reference of the form stash@{<revision>}.
- `git remote remove origin`

**GIT Stash name**
- use `git stash push -m aNameForYourStash` to save it. Then use `git stash list` to learn the index of the stash that you want to apply. Then use `git stash pop --index 0` to pop the stash and apply it.

**GIT Rebase**
- `git rebase origin/branch`
- Fix conflicts
- `git push --force origin branch` --> this is need because we rewrited history (explained here:https://blog.verslu.is/git/git-rebase/)

## GIT auto crlf warning

In Unix systems the end of a line is represented with a line feed (LF). In windows a line is represented with a carriage return (CR) and a line feed (LF) thus (CRLF). when you get code from git that was uploaded from a unix system they will only have an LF.

If you are a single developer working on a windows machine, and you don't care that git automatically replaces LFs to CRLFs, you can turn this warning off by typing the following in the git command line

`git config core.autocrlf true`

## GIT config

- `git config --global -l` to see global configuration such as user.email, user.password...
- `git config -l` to see local repository configuration
- `git config --global user.email "myemail@hello.com"` to set global configuration. (For local config just the same without --global flag)  
