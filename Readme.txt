Create a database  on mongod

install mongodb version
1.Run mongod Server defauls to port 27017.  mongod --dbpath C:/data

2.Run a mongo client.

3.create a new database by using  use <<databasename>>

4.create a new collection database object by using
db.createCollection( "contacts",
   {
      validator: { $or:
         [
            { phone: { $type: "string" } },
            { email: { $regex: /@mongodb\.com$/ } },
            { status: { $in: [ "Unknown", "Incomplete" ] } }
         ]
      }
   }
)
5.getcollecion name by using db.getcollecionNames()(Collection is similiar to table in oracle)

6. insert a document(row)
    db.collectionname(contacts).insert({
	   "name":"Harshal",
	   "status":"Incomplete",
	})
You are ready to Perform to curd operations using nodejs to mongodb as database
----------------------------------------------------------------------------------------
B.Use an atom editor as  developement purpose Node API
-------------------------------------------------------------------------------------
1.create a project for node
2.npm init update package.json in node
3.import mongoose and express js for local node scope
4.create a mongoose db connection as per server.js code
5.add respecitve controllers and models as described in program.
6.Type node server.js and run the program
7.go to browswer type http://localhost:1049/<<respective uri>>
-----------------------------------------------------------
