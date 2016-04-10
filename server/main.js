import {Meteor} from 'meteor/meteor';
// import Wordlist from "./schemas";

const defaultWordlist = [
    {
        english: "Here",
        tagalog: "Dito"
    },
    {
        english: "Tomorrow",
        tagalog: "Bukas"
    },
    {
        english: "Without",
        tagalog: "Walang"
    }
];


// Let's bootstrap some words in so we can get this thing working
Meteor.startup(() => {
    let wordLength = Wordlist.find().count();
    if (!wordLength) {
        for (let word of defaultWordlist) {
            Wordlist.insert(word);
        }
    }
});
