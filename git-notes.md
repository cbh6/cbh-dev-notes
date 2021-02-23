# GIT Notes

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

