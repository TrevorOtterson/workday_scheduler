// Variables
var container = $('.container')
var calendar = $('#calendar')
var currently = $('#currentDay')

// Months array
var months = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
]

function formatDates(){
    moment().format('MMMM Do YYYY, h:mm:ss a')
    moment().format('dddd')
}

