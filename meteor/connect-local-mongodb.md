
# Connect mongodb clients to local meteor mongo database

Info extracted from [Stackoverflow](https://stackoverflow.com/questions/22020580/how-to-connect-mongodb-clients-to-local-meteor-mongodb)

Ensure Meteor is running on localhost. Open a terminal window and run meteor command. It will start running on `localhost:3000` if you have not changed to port.

While it is running, open a separate terminal window and run `meteor mongo` command. This will open up a MongoDB shell and tell you what port it is connecting to This is normally 3001 as of version 0.7.1.1 or 3002 if earlier. It will say something like 127.0.0.1:3001/meteor

Go to Robomongo (or your favorite mongodb client software) and create a new connection, making sure to change the connection address to localhost and the given the port number. No need to additionally define /meteor if your client does not insist on a default database.

---

Easiest way to get the current configuration details is to use the following command

`meteor mongo -U`