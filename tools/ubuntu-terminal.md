# Terminal usefull commands

* [check & kill service from port](#check-and-kill-service-from-port)
* [update VSCode from ubuntu shell](#update-vscode-from-ubuntu-shell)
* [compile program from source](#compile-a-program-from-source)
* [permissions: chmod](#chmod)
* [services](#services)

- `sudo lsof -t -i:PORT` -> Check if there is something running on that port
- `sudo kill ID` -> Kill process
- `sudo service postgresql status/stop/start` -> manage service
- `df -h` -> display the amount of available disk space for file systems on which the invoking user has appropriate read access

- `sudo openvpn --config config_file.ovpn` -> run openvpn using config file

## Utils

```shell
## Install gnome-control-center
sudo apt-get install gnome-control-center
## Audio control panel
sudo apt-get install pavucontrol
## Fix
sudo pavucontrol -D
```

### ZSH
Install zsh instructions

https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH

Oh-My-Zsh is a framework for Zsh, the Z shell.

https://github.com/robbyrussell/oh-my-zsh

## Check and kill service from port

```shell
sudo lsof -i :port
sudo kill `sudo lsof -t -i :port`
```

## Update VSCode from Ubuntu Shell

```shell
wget https://vscode-update.azurewebsites.net/latest/linux-deb-x64/stable -O /tmp/code_latest_amd64.deb
sudo dpkg -i /tmp/code_latest_amd64.deb
```

## Compile a program from source

1. open a console
2. use the command cd to navigate to the correct folder. If there is a README file with installation instructions, use that instead.
3. extract the files with one of the commands

   * If it's tar.gz use `tar xvzf PACKAGENAME.tar.gz`
   * if it's a tar.bz2 use `tar xvjf PACKAGENAME.tar.bz2`

4. `./configure`

5. `make`
6. `sudo make install`

## Permissions

`chmod [options] mode[,mode] file`

Optional options:

    -R Change files and directories recursively
    -v output a diagnostic for every file processed
    -c like -v, but only showing changed files

User groups:

    u: file owner
    g: file owner user group
    o: rest of the users
    a: all user

Permissions:

    r: read
    w: write
    x: execute

#### example: change the file permissions of a whole folder and all its sub folders to read/write by anybody

```
sudo chmod -R a+rw /var/www
```

## Services

### Management

```
service <servicename> stop

service <servicename> start

service <servicename> restart
```

Check services status

```shell
service --status-all
```

with upstart installed

```shell
stop <servicename>

start <servicename>

restart <servicename>
```

Also can be done through **/etc/init.d**. So, for example, to stop or start the Apache Webserver, you can run

```shell
/etc/init.d/apache2 stop

/etc/init.d/apache2 start
```

### Manage services with GUI application

**Boot up Manager.**

Install with

```shell
apt-get install bum
```

and run from the UI or from a terminal with

```
sudo bum
```
