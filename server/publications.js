import { Wordlist } from "./collections";

Wordlist.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Meteor.publish("wordlist", function() {
    return Wordlist.find();
});
