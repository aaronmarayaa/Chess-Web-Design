// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
  labels: ['Blitz', 'Rapid', 'Bullet', 'Puzzle'],
  datasets: [{
    label: '',
    data: [700, 1000, 512, 770],
    backgroundColor: ['rgba(255, 238, 0, 0.2)', 'rgba(172, 42, 42, 0.2)', 'rgba(100, 54, 17, 0.2)', 'rgba(1, 91, 188, 0.2)'],
    borderColor: ['rgba(255, 238, 0)',  'rgba(172, 42, 42)', 'rgba(100, 54, 17)', 'rgba(1, 91, 188)'],
    borderWidth: 1
  }]
};

// Create the chart
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: { plugins: { legend: { display: false } } }
});