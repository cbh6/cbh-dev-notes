# Redis

- NoSQL in memory Database
- Open Source
- High performance
- Key - value store
- Like how we handle objects in Javascript
- Used for short lived data in our apps
- Sessions management, caching some data ....
- Small pieces of data. Easy to access because its on memory, not on disk.
- You don't care if you loose some of that data
- Very scalable
- Unique set of data types
- It stores data in memory. Super fast. Only writes on disk occasionaly so you may lose data if server goes down.



## Data types

- **String**

- **HASHES**

  Maps between string fields and string values

  Simply like objects (js)

  `HMSET user id 45 name "Jonny"`

  `HGET user id`

  `HGET user name`

  `HGETALL user`

- **LISTS**

  Linked lists rather than arrays

  Insertion really fast

  Takes a bit of time when searching for a key

  Useful if you have really long lists and you need to add elements quickly to that lists

  If you want better performance when you're searching. Use sorted lists

  `LPUSH ourlist 10` leftpush

  `RPUSH ourlist "hello" right push`

  `LRANGE key start stop` To see what is between range

  `LRANGE ourlist 0 1` // 10 hello

  `LPUSH ourlist 55`

  `LRANGE ourlist 0 1` // 10 55

  `LTRIM`

  `RPOP ourlist`

- **SETS AND SORTED SETS**



## Commands

- `SET name "Godzilla"`
- `GET name`
- `GET key value`
- `EXISTS name`
- `DEL name`
- `SET session "Jenny"`
- `EXPIRE session 10`
- `GET session`
- `EXPIRE key seconds`
- `SET counter 1000`
- `INCRBY counter 50`
- `DECR counter 33`
- `MSET a 2 b 5` multiple set
- `MGET a b` multiple get