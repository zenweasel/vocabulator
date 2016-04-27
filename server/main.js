import {Meteor} from 'meteor/meteor';
import {Wordlist} from "./collections";

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
  },
  {
    tagalog: "Kanyang",
    english: "His/Hers"
  },
  {
    tagalog: "Kanilang",
    english: "Their"
  },
  {
    tagalog: "Kangyang",
    english: "His/Hers"
  },
  {
    english: "Their",
    tagalog: "Kanilang"
  },
  {
    tagalog: "Sanggol",
    english: "Baby"
  },
  {
    tagalog: "Anak",
    english: "Child"
  },
  {
    tagalog: "Magulang",
    english: "Parent"
  },
  {
    tagalog: "Naglalaro",
    english: "Playing"
  },
  {
    tagalog: "Nagbabasa",
    english: "Reading"
  },
  {
    tagalog: "Nakasuot",
    english: "Wearing"
  },
  {
    tagalog: "Kaibigan",
    english: "Friend"
  },
  {
    tagalog: "Malaki",
    english: "Big"
  },
  {
    tagalog: "Malaiit",
    english: "Small"
  },
  {
    tagalog: "Silya",
    english: "Chair"
  },
  {
    tagalog: "Nasa",
    english: "On"
  },
  {
    tagalog: "Ibabaw",
    english: "(On) Top"
  },
  {
    tagalog: "Loob",
    english: "Inside"
  },
  {
    tagalog: "Ilalim",
    english: "Under"
  },
  {
    tagalog: "Susi",
    english: "Key(s)"
  },
  {
    tagalog: "Inidoro",
    english: "Toilet"
  },
  {
    tagalog: "Lababo",
    english: "Sink"
  },
  {
    tagalog: "Kusina",
    english: "Kitchen"
  },
  {
    tagalog: "Kuwarto",
    english: "Bedroom"
  },
  {
    tagalog: "Kama",
    english: "Bed"
  },
  {
    tagalog: "Mahal",
    english: "Love"
  },
  {
    tagalog: "Nanonood",
    english: "Spectator (watcher/watching)"
  },
  {
    tagalog: "Nakaupo",
    english: "Seated/Sitting"
  },
  {
    tagalog: "Nakatayo",
    english: "Standing"
  },
  {
    tagalog: "Nakikinig",
    english: "Listener/Listening"
  },
  {
    tagalog: "Pinapanood",
    english: "Viewer/Looker"
  },
  {
    tagalog: "Nakatira",
    english: "Occupant/Resident"
  },
  {
    tagalog: "Nasaan",
    english: "Where"
  },
  {
    tagalog: "Tasa",
    english: "Cup"
  },
  {
    tagalog: "Kami",
    english: "We"
  },
  {
    tagalog: "Namin",
    english: "we"
  },
  {
    tagalog: "Magkapatid",
    english: "Sibling"
  },
  {
    tagalog: "Isa't isa",
    english: "Each Other"
  },
  {
    tagalog: "Kumain",
    english: "Eat(ing)"
  },
  {
    tagalog: "Matulog",
    english: "Sleep(ing)"
  },
  {
    tagalog: "Isulat",
    english: "Write"
  },
  {
    tagalog: "Hinahalikan",
    english: "Kissing"
  },
  {
    tagalog: "Niyayakap",
    english: "Embracing"
  },
  {
    tagalog: "Tulay",
    english: "Bridge"
  },
  {
    tagalog: "Kalye",
    english: "Street"
  },
  {
    tagalog: "Malayo",
    english: "Far"
  },
  {
    tagalog: "Malapit",
    english: "Close"
  },
  {
    tagalog: "Bansang",
    english: "Country"
  },
  {
    tagalog: "Kanilang",
    english: "Their"
  },
  {
    tagalog: "Magkakapatid",
    english: "Brothers"
  },
  {
    tagalog: "Magkakaibigan",
    english: "Friends"
  },
  {
    tagalog: "Namin",
    english: "We"
  },
  {
    tagalog: "Natin",
    english: "Our"
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
