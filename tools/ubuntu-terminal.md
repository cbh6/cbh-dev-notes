# Terminal usefull commands

* [permissions: chmod](#chmod)
* [services](#services)

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

```
service --status-all
```

with upstart installed

```
stop <servicename>

start <servicename>

restart <servicename>
```

Also can be done through **/etc/init.d**. So, for example, to stop or start the Apache Webserver, you can run

```
/etc/init.d/apache2 stop

/etc/init.d/apache2 start
```

### Manage services with GUI application

**Boot up Manager.** 

Install with

```
apt-get install bum
```

and run from the UI or from a terminal with

```
sudo bum
```