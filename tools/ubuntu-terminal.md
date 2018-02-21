# Terminal usefull commands

* [compile program from source](#compile)
* [permissions: chmod](#chmod)
* [services](#services)

## Compile a program from a source

1. open a console
2. use the command cd to navigate to the correct folder. If there is a README file with installation instructions, use that instead.
3. extract the files with one of the commands

   * If it's tar.gz use `tar xvzf PACKAGENAME.tar.gz`
   * if it's a tar.bz2 use `tar xvjf PACKAGENAME.tar.bz2`

4. `./configure`

5. `make`
6. `sudo make install`

## chmod [options] mode[,mode] file

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
