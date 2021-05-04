/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
use moment.js to display time on page
moment().format('MMMM Do YYYY, h:mm:ss a');
id selector currentDay
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
use local storage
setItem();
getItem();
methods setItem uses 2 arguments
*/

/*
show current time on page
1. select the element with the currentDay id
2. assign the textContent , should get the value of moment.js 
moment().format('MMMM Do YYYY, h:mm:ss a');
*/


/*
color code the time block

this code gives me the current hour
var d = new Date();
var n = d.getHours();

const timeInfo = [
    {
    blockId: '#hour-nine', // this field is for identifying time block div
    hourNum: 9, // this field is for representing this hour as a number ( used to comapre current hour )
    saveBtn: '#save-hour-nine'// this field is for indentifying this tine block's save button
    textId: '#text-hour-nine' //this field is for identifying this time's block text input
    storageKey: 'hour-nine' // this field is used to save this hour's data in local storage( this is the key of the key value pair )
    // 
// added button id to add the event listener
// TODO add all of save button ids in the array of obj and the blockId and hourNum
// have an idividual obj for each timeblock
},
]
for(let i = 0; i < timeInfo.length; i++) {
    
    For each time block...
    1.  Select the time block with its selector
    2. Determine whether or not this hour is in the past/present/future
    3.  Based on step 2, set the `backgroundColor`
    
}
*/
/*
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
For each time block...
1. add event listenter for clicks to the save button
2.select for textarea and get text from it ... use .val() from jquery
3. setItem() - key & value ; key is the time and val is the event 

*/
// use 1 big for loop for these steps 

const timeInfo = [
    {
        blockId: "#hour-nine",
        hourNum: 9,
        saveBtn: "#save-hour-nine",
        textId: "#text-hour-nine",
        storageKey: "hour-nine"
    },

    {
        blockId:"#hour-ten",
        hourNum:10,
        saveBtn:"#save-hour-ten",
        textId: "#text-hour-ten",
        storageKey: "hour-ten",
    },
    
    {
        blockId:"#hour-eleven",
        hourNum: 11,
        saveBtn: "#save-hour-eleven",
        textId: "#text-hour-eleven",
        storageKey: "hour-eleven"
    },

    {
        blockId:"#hour-noon",
        hourNum: 12,
        saveBtn: "#save-hour-noon",
        textId: "#text-hour-noon",
        storageKey: "hour-noon"
    },

    {
        blockId: "#hour-thirteen",
        hourNum: 13,
        saveBtn: "#save-hour-thirteen",
        textId: "text-hour-thirteen",
        storageKey: "hour-thirteen"
    },

    {
        blockId: "#hour-fourteen",
        hourNum: 14,
        saveBtn:"#save-hour-fourteen",
        textId: "#text-hour-fourteen",
        storageKey: "hour-fourteen"
    }

    {
        blockId: "#hour-fifteen",
        hourNum: 15,
        saveBtn: "#save-hour-fifteen",
        textId: "#text-hour-fifteen",
        storageKey: "hour-fifteen"
    }

    {
        blockId: "#hour-sixteen",
        hourNum: 16,
        saveBtn:"#save-hour-sixteen",
        textId: "#text-hour-sixteen",
        storageKey: "hour-sixteen",
    }

    {
        blockId:"#hour-seventeen",
        hourNum: 17,
        saveBtn: "#save-hour-seventeen",
        textId: "#text-hour-seventeen",
        storageKey: "hour-seventeen"
    }
];

for (i= 0; i < timeInfo.length; i++) {
    if (blockId !==)
}