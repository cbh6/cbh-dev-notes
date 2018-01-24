### Meteor stores documents with String as id (\_id).

### MongoDB default \_id is an ObjectId

[link to meteor-talk forum](https://groups.google.com/forum/#!msg/meteor-talk/f-ljBdZOwPk/oQYZQxCAKN8J)

ObjectId Pros

* it has an embedded timestamp in it.
* it's the default Mongo \_id type; ubiquitous
* interoperability with other apps and drivers

ObjectId Cons

* it's an object, and a little more difficult to manipulate in practice.
* there will be times when you forget to wrap your string in new ObjectId()
* it requires server side object creation to maintain \_id uniqueness
* which makes generating them client-side by minimongo problematic

String Pros

* developers can create domain specific \_id topologies

String Cons

* developer has to ensure uniqueness of \_ids
* findAndModify() and getNextSequence() queries may be invalidated

Meteor's choice to go with a string, as I understand it, basically boils down to latency compensation and being able to generate the \_id on the client-side in mini-mongo. The default ObjectId implementation didn't lend itself to being generated on the client as part of the latency compensation framework, so they decided to roll their own \_id scheme.

Personally, I find the embedded timestamps in ObjectIds to be invaluable later in an application's lifecycle. They are more difficult to manipulate, and they add more debugging time to an application's development cycle. But for the extra 10 or 20 hours you put into debugging the ObjectIds, can return 10x or 100x savings down the road. Example: at work, we just salvaged a year's worth of production data because of the embedded timestamps, which has saved us probably hundreds of thousands of dollars of R&D time and effort.

ObjectId's are great if you can ensure that there's one central authority for generating them. They're also the preferred index type for any type of timeseries data. And while it may seem tempting to try to make a one-or-the-other decision for your entire app, I find choosing a string vs ObjectId (vs some other index scheme) really boils down to the topology of the data in the collection.

Some useful questions to maybe ask when choosing the \_id for a collection:

* Does the data in the collection need latency compensation?
* Is it time-series data?
* Will other applications or worker utilities be accessing the collection?
* What is the topology of the data in the collection?
