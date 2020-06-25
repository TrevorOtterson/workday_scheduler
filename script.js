// Variables
// var header = $('.jumbotron')
// var date = $('#currentDay')
// var container = $('.container')
// var timeSlot = $('.time-block')

// $(document).ready(function () {

//     // Pull times from moment.js
//     time = setInterval(current, 1000)
//     var current = moment().format('MMMM Do YYYY, h:mm:ss A')
//     var hour24 = moment().format('H')

//     // sets date text in header
//     var dateHeader = (date)
//     dateHeader.text(current)

//     // Pulls data from local stoarage
//     var storedData = JSON.parse(localStorage.getItem('storedData'))
//     if (storedData !== null) {
//         txtArea = storedData
//     }

//     for (var i = 9; i <= 17; i++) {
//         // index for array use offset from hour
//         var hour = i - 9
//     }

//     rowColor(timeSlot, i)
//     // function to update row color
//     function rowColor(row, i) {

//         if (i < hour24) {
//             // row.css('')
//             row.css("background-color", "grey")
//         }
//         else if (i > hour24) {
//             row.css("background-color", "rgb(41, 92, 0)")
//         }
//         else {
//             row.css("background-color", "red")
//         }
//     }

//     // saves to local storage
//     // onclick function to listen for user clicks on plan area
//     $(document).on('click', 'i', function(event) {
//         event.preventDefault()

//         var saveIndex = $(this).attr('save-id')
//         var inputId = '#input-' + saveIndex
//         var sValue = $(inputId).val()
//         var txtArea = storedData
//         console.log(txtArea)
//         txtArea[{saveIndex}] = sValue
//         localStorage.setItem('storedData', JSON.stringify(txtArea))
//     })
// })

// Variables
var header = $('.jumbotron')
var date = $('#currentDay')
var container = $('.container')
var timeSlot = $('.time-block')
$(document).ready(function () {

    function checkHours() {
        $('.time-block').each(function () {
         var blockHour = parseInt($(this).data('hour'));
         var currentHour = moment().hours();
     
         if (blockHour < currentHour) {
          $(this).addClass('past');
         } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
         } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
         }
        });
       }

       setInterval(checkHours, 1000);

    // Pull times from moment.js
    var current = moment().format('MMMM Do YYYY, h:mm:ss a')
    var hour24 = moment().format('H');
    // sets date text in header
    var dateHeader = (date)
    dateHeader.text(current)
    // Pulls data from local stoarage
    var storedData = JSON.parse(localStorage.getItem('storedData'))
    if (storedData !== null) {
        txtArea = storedData
    }
    for (var hour = 9; hour <= 17; hour++) {
        // index for array use offset from hour
        var index = hour - 9;
    }
    timeSlot.each(function(){
        var row = $(this);
        var rowTime = $(this).attr("data-hour");
        rowTime = parseInt(rowTime);
        hour24 = parseInt(hour24);
        //console.log(row);
        console.log("rowTime: " + rowTime);
        //console.log("hourOffset: " + hourOffset);
        console.log("hour24: " + hour24);
        if (rowTime < hour24) {
            console.log("should be past");
            // $hourRow.css('')
            row.addClass("past");
        }
        else if (rowTime === hour24) {
            console.log("should be present");
            row.addClass("present");
        }
        else if (rowTime > hour24) {
            console.log("should be future");
            row.addClass("future");
        } else {
            console.log("for some reason, none of the condidtions were filled.");   
        }
    });

    rowColor(timeSlot, hour)
    // function to update row color
    function rowColor(row, hour) {

        console.log(row);
        console.log(hour);
        console.log(hour24);
        console.log(rowTime);

        if (hour < hour24) {
            // $hourRow.css('')
            row.css("background-color", "grey")
        }
        else if (hour > hour24) {
            row.css("background-color", "rgb(41, 92, 0)")
        }
        else {
            row.css("background-color", "red")
        }
    };

    // saves to local storage
    // onclick function to listen for user clicks on plan area
    $(document).on('click', 'i', function (event) {
        event.preventDefault();
        var saveIndex = $(this).attr('save-id');
        var inputId = '#input-' + saveIndex;
        var sValue = $(inputId).val();
        var txtArea = storedData
        txtArea[saveIndex] = sValue;
        localStorage.setItem('storedData', JSON.stringify(txtArea));
    });
})