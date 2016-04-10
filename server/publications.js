Wordlist = new Mongo.Collection("Wordlist");

Meteor.publish("wordlist", function() {
    return Wordlist.find();
});
