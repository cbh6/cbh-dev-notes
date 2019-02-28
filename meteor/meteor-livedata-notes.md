

# OPLOG / POLL & DIFF
https://blog.meteor.com/tuning-meteor-mongo-livedata-for-scalability-13fe9deb8908


#### poll & diff
The server will re-run the query every time another client on the same server does a write that could affect the results.

This approach is simple and and delivers easy to understand scaling characteristics. However, it does not scale well with lots of users and lots of data.

#### oplog tailing

Oplog tailing — first introduced in Meteor 0.7 — works by reading the mongo database’s replication log that it uses to synchronize secondary databases (the ‘oplog’). This allows Meteor to deliver realtime updates across multiple hosts and scale horizontally.

The oplog is global per database cluster and requires admin permissions to access, so many users never set it up and rely on poll-and-diff for realtime updates. To enable oplog tailing, pass the MONGO_OPLOG_URL environment variable to the meteor process. When this environment variable is passed, Meteor defaults all queries to use oplog tailing. Before Meteor 1.3, this was all or nothing — new in 1.3 is the disableOplog option to collection.find() that allows tuning this on a per-query basis.


> If you have a database with a very high write rate enabling oplog tailing might not be a good idea — whether or not you query a particular collection, Meteor must read the whole oplog if you have even one oplog driven query.


#### **disabledOplog: true**

 Note that this does not include changes made by other clients connected to the same server process 
 
Si la consulta en publish tiene desactivado el oplog y tira de pull&diff no detectará los cambios hechos por escrituras externas (otro servidor).
Sin embargo cuando pase el tiempo configurado en pollingIntervalMs, volverá a consultar cambios.

>The poll-and-diff driver works by repeatedly running your query (polling) and computing the difference between new and old results (diffing). The server will re-run the query every time another client on the same server does a write that could affect the results. It will also re-run periodically to pick up changes from other servers or external processes modifying the database. Thus poll-and-diff can deliver realtime results for clients connected to the same server, but it introduces noticeable lag (the default is 10 seconds, see below for more on this parameter) for external writes. This may or may not be detrimental to the application UX, depending on the application (eg, bad for chat, fine for todos).

#### **pollingIntervalMs**

Controla cada cuánto, el servidor Meteor consultará la base de datos (poll) con tal de detectar cambios desde otros servidores o procesos externos.
Por defecto son 10 segundos.

Cuanto más pequeño el valor, más trabajo tendrá que hacer cada servidor meteor y habrá mas carga en la base de datos.

Cuanto más grande el valor, tendrá que pasar más tiempo hasta que los cambios desde un cliente se reflejen en la interfaz de otro.

Si la aplicación no implica tiempo-real entre los cambios de distintos clientes, se puede dejar este valor muy alto (minutos o más)

En general, se puede dejar este valor muy alto si la aplicacion puede tolerar latencia entre clientes. **(Aunque esto no tiene en cuenta los cambios hechos por otros clientes conectados al mismo servidor)**

Si se necesita comportamiento en tiempo real, y no se puede utilizar el oplog, es posible poner `pollngIntervalMs` muy bajo (sobre 1 segundo) para tener baja latencia entre usuarios. Aunque esto pueda conllevar en mayor carga para la base de datos. (Puede que las consultas tengan que estar indexadas por ejemplo)

#### **pollingThrottleMs**

Este parámetro controla el tiempo mínimo que Meteor esperará entre ejecuciones de una consulta.
Por defecto son 50 milisegundos.

Para ofrecer rendimiento real-time cuando los usuarios están conectados al mismo servidor, Meteor ejecuta las consultas cuando ve a otro cliente hacer una escritura que pueda afectar al resultado. Para prevenir sobrecarga cada consulta esperará el número de milisegundos configurado antes de volverse a ejecutar.

Un número bajo de ms conlleva más carga en la CPU y la BD
Un número alto conlleva más latencia en la llamada a métodos.

Dado que Meteor se asegura que todos los mensajes de actualización de datos han sido enviados al cliente antes de indicar 'method completion', incrementar este número puede incrementar el tiempo que toma el servidor para responder a los clientes con mensajes de finalización de datos en métodos (method data completion messages)


En general, hay que dejar este parámetro sin tocar a no ser que se tenga una consulta que se ejecuta muy a menudo y se quiera reducir su frecuencia.
Si se tiene una consulta que es compleja y costosa y devuelve muchos datos, se puede dejar este valor sobre 100ms

>If you go over a couple hundred milliseconds, be watchful for parts of the application built without optimistic UI feeling “sluggish.” Method return values may be delayed by the batching raising this parameter causes.

#### METEOR_OPLOG_TOO_FAR_BEHIND

There is one user-tunable parameter for oplog tailing — the METEOR_OPLOG_TOO_FAR_BEHIND environment variable. This is a safety belt to help control cases where large bulk updates or app server saturation cause Meteor to fall behind in oplog processing. If the queue of unprocessed oplog messages gets too big, the server will “give up” and inititate a poll-and-diff cycle in an attempt to catch up with the oplog. 
The default value is 2000. If you have bursty writes, or regularly saturate your CPU, you may want to try adjusting this up or down. 
**That said, I have not actually seen this make a huge difference in production apps — usually the solution to oplog scaling issues is to change how the oplog is used by altering queries or disabling oplog for certain queries.**


#### Puntos importantes (highlights)

- >  If you have all your reads and writes to a collection include an _id field, poll-and-diff can be a very efficient and scalable strategy! 
