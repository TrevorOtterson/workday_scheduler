// Variables
var header = $('.jumbotron')
var date = $('#currentDay')
var container = $('.container')
var timeSlot = $('.time-block')

$(document).ready(function () {

    // Pull times from moment.js
    var current = moment().format('MMMM Do YYYY, h:mm A')
    var hour24 = moment().format('H')

    // sets date text in header
    var dateHeader = (date)
    dateHeader.text(current)

    // Pulls data from local stoarage
    var storedData = JSON.parse(localStorage.getItem('storedData'))
    if (storedData !== null) {
        txtArea = storedData
    }

    for (var i = 9; i <= 17; i++) {
        // index for array use offset from hour
        var hour = i - 9
    }

    rowColor(timeSlot, i)
    // function to update row color
    function rowColor(row, i) {

        if (i < hour24) {
            // $hourRow.css('')
            row.css("background-color", "lightgrey")
        }
        else if (i > hour24) {
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

