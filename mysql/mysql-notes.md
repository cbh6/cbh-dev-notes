## Conectarse desde máquina virtual al servidor MySQL que corre en la máquina HOST

- Poner VMWare configuración de Adaptador de Red como Bridge
- En la máquina HOST (donde corre el servidor mysql) hay que editar el fichero /etc/mysql/mysql.conf.d y comentar la línea siguiente:

```
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
# bind-address		= 127.0.0.1
```

- Ifconfig (ubuntu) en la máquina host para obtener la IP

```shell
enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.238  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::b861:cb60:4934:9b9d  prefixlen 64  scopeid 0x20<link>
        inet6 fd24:995:f8a:4300:6b0f:248a:ac04:befd  prefixlen 64  scopeid 0x0<global>
        inet6 fd24:995:f8a:4300:dc8:842a:3342:97e  prefixlen 64  scopeid 0x0<global>
        ether 3c:07:71:6a:87:99  txqueuelen 1000  (Ethernet)
        RX packets 2002328  bytes 2886948567 (2.8 GB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 136704  bytes 14511791 (14.5 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

- Conectar desde la máquina guest a esa IP. Puerto por defecto 3306.



- Es necesario añadir un usuario nuevo a mysql.

```shell
sudo mysql

mysql> CREATE USER 'user'@'%' IDENTIFIED BY 'user';
Query OK, 0 rows affected (0.02 sec)

mysql> GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
Query OK, 0 rows affected (0.00 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.01 sec)

mysql> exit
Bye
```

Enlaces:

https://dba.stackexchange.com/questions/177897/share-the-database-between-vmware-guest-and-host

https://mobitek-system.com/blog/2017/01/how-to-connect-to-mysql-server-host-machine-from-vmware-virtual-machine/



## Cambiar password de usuario root en MySQL

https://stackoverflow.com/questions/41645309/mysql-error-access-denied-for-user-rootlocalhost

For new linux users this could be a daunting task. Let me update this with mysql 8(the latest version available right now is 8.0.12 as on 12-Sep-2018)

Open "mysqld.cnf" configuration file at "/etc/mysql/mysql.conf.d/".
Add skip-grant-tables to the next line of [mysql] text and save.
Restart mysql service as "sudo service mysql restart". Now your mysql is free of any authentication.
Connect to mysql client(also known as mysql-shell) as mysql -u root -p. There is no password to be keyed in as of now.
run sql command flush privileges;
Reset the password now as ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPassword';
Now let's get back to the normal state; remove that line "skip-grant-tables" from "mysqld.cnf" and restart service.
That's it.