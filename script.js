// Script for the countdown clock
// Set the date to where it counts down to
var countDownDate = new Date("May 26, 2023 16:43:52").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML =
    "<div class=\"days\"> \
        <div class=\"numbers\">" + days + "</div>Days</div> \
    <div class=\"hours\"> \
        <div class=\"numbers\">" + hours + "</div>Hours</div> \
    <div class=\"minutes\"> \
        <div class=\"numbers\">" + minutes + "</div>Minutes</div> \
    <div class=\"seconds\"> \
        <div class=\"numbers\">" + seconds + "</div>Seconds</div> \
    </div>";

  // When the countdown is on the date, they shoul have arrived and this text will appear
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Welcome to Mars";
  }
}, 1000);


// Sets the font and font color of the charts
Chart .defaults.global.defaultFontFamily = ' "GothamBold", Helvetica, sans-serif';
Chart .defaults.global.defaultFontColor = 'rgba(134, 117, 78)';

// Script for graph of distance traveled over time
var ctx = document.getElementById('distance').getContext('2d');
var distance = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1 hr', '2 hr', '3 hr', '4 hr', '5 hr', '6 hr'],// This sets the data for the x-as
        datasets: [{
            data: [18.9, 46.54, 75.902, 87.1, 126.269, 155.436], // This determines the data displayed in the graph
            backgroundColor: [ // This sets the fill color
                'rgba(237, 83, 56, 0.3)',
                'rgba(237, 83, 56, 0.3)',
                'rgba(237, 83, 56, 0.3)',
                'rgba(237, 83, 56, 0.3)',
                'rgba(237, 83, 56, 0.3)',
                'rgba(237, 83, 56, 0.3)'
            ],
            borderColor: [
                'rgba(237, 83, 56, 1)',
                'rgba(237, 83, 56, 1)',
                'rgba(237, 83, 56, 1)',
                'rgba(237, 83, 56, 1)',
                'rgba(237, 83, 56, 1)',
                'rgba(237, 83, 56, 1)'
            ],
            borderWidth: 5,
            lineTension: 0, // Makes the line straight between the dots
            borderCapStyle: 'round',
            // fill: false,
            pointRadius: 5, // This determines the size of the graph point
            pointHoverRadius: 10 // This will make the graph point bigger when you hover
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Ensures that the graph starts at 0 and not from lowest data
                }
            }]
        },
        title: {
            display: true,
            text: 'Distance in km (x 1000)',
            fontSize: 14,
        },
        legend: {
            display: false
        }
    }
});


// Script for bar chart of resources overview
var ctx = document.getElementById('resources').getContext('2d');
var resources = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fuel', 'Water', 'Energy'],// This sets the data for the x-as
        datasets: [{
            data: [85, 62, 97], // This determines the data displayed in the bar chart
            backgroundColor: [ // This sets the fill color
                'rgba(255, 50, 50, 0.2)',
                'rgba(54, 162, 255, 0.2)',
                'rgba(255, 216, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 50, 50, 1)',
                'rgba(54, 162, 255, 1)',
                'rgba(255, 216, 86, 1)'
            ],
            borderWidth: 3,
            hoverBackgroundColor: [
                'rgba(255, 50, 50, 1)',
                'rgba(54, 162, 255, 1)',
                'rgba(255, 216, 86, 1)'
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Ensures that the graph starts at 0 and not from lowest data
                }
            }]
        },
        title: {
            display: true,
            text: 'The resources are presented in %',
            fontSize: 14,
        },
        legend: {
            display: false
        }
    }
});


//Script for the toggle switch Mars vs Earth
  function marsEarthH2() {
    var x = document.getElementById("marsEarthH2");
    if (x.innerHTML === "Mars") {
      x.innerHTML = "Earth";
    } else {
      x.innerHTML = "Mars";
    }
  }
  
  function marsEarthP() {
    var x = document.getElementById("marsEarthP");
    if (x.innerHTML === "55 844 564 million km") {
      x.innerHTML = "155 436 thousand km";
    } else {
      x.innerHTML = "55 844 564 million km";
    }
  }
