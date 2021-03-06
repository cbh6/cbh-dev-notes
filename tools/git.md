# GIT

## Commands

- `git reset HEAD~1 --hard` -> resets HEAD pointer
- `git reset --soft HEAD~1` -> reset a not-pushed commit without deleting modified files
- `GIT FETCH` -> before doing checkout to sync changes
- `git remote prune` and `git fetch --prune` do the same thing: delete the refs to branches that don't exist on the remote
- `git commit -a --amend -m "New commit message"` -> Add files and edit message to previous commit. `-a` adds all unstaged files
- `git cherry pick` -> Brings an specific commit to the branch
- `git merge --abort` -> Abort merge
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

## Change branch base

https://stackoverflow.com/questions/10853935/change-branch-base

Assuming newBase is the branch you want to move your commits onto, oldBase is the old basis for your branch, you can use `--onto` for that:

`git rebase --onto newBase oldBase feature/branch`

Given your case:
`git checkout PRO # Just to be clear which branch to be on`
`git rebase --onto master demo PRO`
Basically, you take all the commits from after demo up to and including PRO, and rebase them onto the master commit.

## Adding an existing project to GitHub using the command line

[Guide](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

1. Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

2. Open Terminal.

3. Change the current working directory to your local project.

4. Initialize the local directory as a Git repository.

```
git init
```

5. Add the files in your new local repository. This stages them for the first commit.

```bash
git add .
# Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
```

6. Commit the files that you've staged in your local repository.

```bash
git commit -m "First commit"
# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
```

7. At the top of your GitHub repository's Quick Setup page, click to copy the remote repository URL.

8. In Terminal, add the URL for the remote repository where your local repository will be pushed.

```bash
git remote add origin remote repository URL
# Sets the new remote
git remote -v
# Verifies the new remote URL
```

9. Push the changes in your local repository to GitHub.

```bash
git push origin master
# Pushes the changes in your local repository up to the remote repository you specified as the origin
```

## Configure multiple remote origins

Change GIT origin and upload files

```shell
➜ git remote set-url origin git@github.com/myrepo.git
➜ git remote -v
➜ git push -u origin --all
➜ git push -u origin --tags
```

Add new origins

```shell
➜ git remote add origin-gitlab git@gitlab.hey.es:web/myrepo
➜ git push -u origin-gitlab --all
```
`
## GIT auto crlf warning

In Unix systems the end of a line is represented with a line feed (LF). In windows a line is represented with a carriage return (CR) and a line feed (LF) thus (CRLF). when you get code from git that was uploaded from a unix system they will only have an LF.

If you are a single developer working on a windows machine, and you don't care that git automatically replaces LFs to CRLFs, you can turn this warning off by typing the following in the git command line

`git config core.autocrlf true`

## GIT config

- `git config --global -l` to see global configuration such as user.email, user.password...
- `git config -l` to see local repository configuration
- `git config --global user.email "myemail@hello.com"` to set global configuration. (For local config just the same without --global flag)  
- `git config user.name "myusername"` sets the local repo user name (it should be the same as your github/gitlab user name)

**If commit messages appear with the system username or another different from github/gitlab account -> You need to configure it locally as described above)**

## Fetch vs pull

- git fetch is the command that tells your local git to retrieve the latest meta-data info from the original (yet doesn’t do any file transferring. It’s more like just checking to see if there are any changes available).

- git pull on the other hand does that AND brings (copy) those changes from the remote repository.

For example:

`git pull origin ankur bugfix`

The takeaway is to keep in mind that there generally are at least three copies of a project on your workstation.

- One copy is your own repository with your own commit history (the already saved one, so to say).
- The second copy is your working copy where you are editing and building (not committed yet to your repo).
- The third copy is your local “cached” copy of a remote repository (probably the original from where you cloned yours).

---

https://es.stackoverflow.com/questions/245/cu%C3%A1l-es-la-diferencia-entre-pull-y-fetch-en-git/246

- Siempre en un repositorio tienes una rama oculta, que puedes ver al usar `git branch -a`.

- Esa rama oculta es `origin/master`.

- Tú al usar `git fetch`, bajas los cambios del repositorio remoto a la rama origin/master:

> git fetch origin

Ahora ya tienes los cambios en origin/master, pero tendrías que pasarlos a la rama master, para eso tienes que usar:

> git merge origin/master

- A partir de esto tu tienes los nuevos cambios en tu rama master y listo.

- Al usar git pull estas combinando git fetch+ git merge.

> git pull origin master

En conclusión con git pull te estás ahorrando el usar un comando más, pero te recomiendo que si apenas estás empezando a usar git, sigas usando git fetch y git merge

---

- En realidad `git pull` baja los cambios de la rama determinada y la actualiza contra tu repositorio local.

- `git fetch` baja los cambios de la rama determinada y la coloca en una rama espejo que simplemente es una clase de rama escondida en la cual tú puedes mirar los cambios de dicha rama, para posteriormente hacer merge con tu rama local.

- El `git pull` simplemente es un `git fecth + git merge`. No utilizar el git pull si en realidad está dudoso de qué cambios puedan traerse del repositorio remoto.

---

- Cuando hacemos git merge o rebase de release, origin/release (u otra rama) a nuestra feature-branch, si no hemos actualizado la rama local, el rebase se va a realizar sin tener los últimos cambios de la versión remota de esa rama (release en este caso)

--- 

- Si por ejemplo, estamos en master
- git fetch
- retrieves the latest changes from the distant copy of `master` into your local `origin/master` branch.

## GIT Rebase

https://www.algolia.com/blog/engineering/master-git-rebase/
https://git-scm.com/book/en/v2/Git-Branching-Rebasing
