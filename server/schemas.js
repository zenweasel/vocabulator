Wordlist = new Mongo.Collection("wordlist");

Wordlist.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});



WordlistSchema = new SimpleSchema({
    english: {
        type: String,
        label: "English"
    },
    tagalog: {
        type: String,
        label: "Tagalog"
    },
    wordGroup: {
        type: Number,
        label: "Word Group",
        defaultValue: 1
    }
});

Meteor.methods({
    deleteWord: function (id) {
        check(id, String);
        Wordlist.remove(id);
        console.log("Wordlist: " + id + " deleted");
    }
});

Wordlist.attachSchema( WordlistSchema );

Meteor.publish("wordlist", function() {
    return Wordlist.find();
});


