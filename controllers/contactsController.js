module.exports=function(app){
    console.log('[contacts]controller up');

    var bodyParser=require('body-parser');
    var jsonParser=bodyParser.json();

    var mongoose=require('mongoose');
    var contactsSchenma=require('../models/contacts.js');
    var contact=mongoose.model('Contact',contactsSchenma);

    app.get('/contacts/getAllcontact', function(req, res){
      contact.find({}, function(error, contacts){
      if(error) res.status(500).send('{ "message" : "Unable to fetch contacts"}');
        res.status(200).json(contacts.reverse());
    });
  });


};
