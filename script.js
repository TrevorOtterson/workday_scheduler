// Variables//
var header = $('.jumbotron')
var date = $('#currentDay')
var container = $('.container')
var timeSlot = $('.time-block')

$(document).ready(function() {
//     if (!localStorage.getItem('time-block')){
//         updateDailyTasks(storedData);
//     } else {
//         let object = JSON.parse(localStorage.getItem('time-block'))
//         updateDailyTasks(object)
//         }
//         function updateDailyTasks (storedData){
//             $(".row").each(function(){
//                let texting = $(this).children("div");
//                $(this).children("textarea").text(storedData[texting.text()])
//             })
//         }
    // Pull times from moment.js
    var current = moment().format('MMMM Do YYYY, h:mm:ss A')
    var hour24 = moment().format('H');
    // sets date text in header
    var dateHeader = (date)
    dateHeader.text(current)

    // Pulls data from local stoarage
    var storedData = JSON.parse(localStorage.getItem('storedData'))
    if (storedData !== null) {
        //txtArea = storedData
    }
    else {
        storedData = {}
    }
    for (var hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
        var index = hour - 9;
    }
    
    for(var i=0; i<timeSlot.length; i++) {
        var row = timeSlot[i];
        //console.log(row);
        var rowTime = $(row).attr("data-hour");
        rowTime = parseInt(rowTime);
        hour24 = parseInt(hour24);
        //console.log(row);
        console.log("rowTime: " + rowTime);
        //console.log("hourOffset: " + hourOffset);
        //console.log("hour24: " + hour24);
        if (rowTime < hour24) {
            console.log("should be past");
            // $hourRow.css('')
            $(row).addClass("past");
        }
        else if (rowTime === hour24) {
            console.log("should be present");
            $(row).addClass("present");
        }
        else if (rowTime > hour24) {
            console.log("should be future");
            $(row).addClass("future");
        } else {
            console.log("for some reason, none of the condidtions were filled.");   
        }
    };
    
    // saves to local storage
    // onclick function to listen for user clicks on plan area
     $(document).on('click', 'i', function(event) {
         event.preventDefault();
         var saveIndex = $(this.parentElement.parentElement).attr('data-hour');
         var inputValue = $('.text')
         var sValue = inputValue.val();
         storedData[saveIndex] = sValue;
         localStorage.setItem('storedData', JSON.stringify(storedData));
     });

});