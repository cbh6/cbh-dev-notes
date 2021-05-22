## Commands and GitLab key set up

- `ssh-add -l` to see ssh-agent added keys
- create ssh key `ssh-keygen -t ed25519 -C "<comment>"` The -C flag, with a quoted comment such as an email address, is an optional way to label your SSH keys.
- we can also create rsa keys instead of ed25519 `ssh-keygen -t rsa -b 2048 -C "email@example.com"`
- copy the SSH key you created to your GitLab account `xclip -sel clip < ~/.ssh/key_name.pub`
- If you used a non-default file path for your GitLab SSH key pair,
configure your SSH client to point to your GitLab private SSH key.
To make these changes, run the following commands:
`eval $(ssh-agent -s)`
`ssh-add <path to private SSH key>`

- If we created a non-default file path for the ssh key pair and we want to have multiple keys for multiple hosts configured (note: it is not possible to use one ssh key for multiple hosts)
- Now save these settings to the ~/.ssh/config file. Two examples
for SSH keys dedicated to GitLab are shown here:

```
# GitLab.com 
Host gitlab.com
  Preferredauthentications publickey
  IdentityFile ~/.ssh/id_ed25519_one.pub

# Custom GitLab 
Host gitlab-custom.com
  Preferredauthentications publickey
  IdentityFile ~/.ssh/id_ed25519_two.pub
```

## Doc

- https://medium.com/uncaught-exception/setting-up-multiple-gitlab-accounts-82b70e88c437#:~:text=GitLab%20does%20not%20allow%20you,~%2F.
- https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- https://gitlab.com/help/ssh/README#generating-a-new-ssh-key-pair

- **Multiple accounts on a single gitlab instance** https://gitlab.com/help/ssh/README#multiple-accounts-on-a-single-gitlab-instance (also documented on the first link)

- **SSH Keys with Multiple GitHub Accounts** https://medium.com/@trionkidnapper/ssh-keys-with-multiple-github-accounts-c67db56f191e

> The Solution
> Create SSH keys for each GitHub.com account
> Register the correct SSH keys with the correct GitHub.com account
> Create a git config file
