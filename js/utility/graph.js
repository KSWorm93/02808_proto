
function getDisplayedWeekNum() {
    var week = document.getElementById('weekText').innerHTML;
    week = parseInt(week.split(' ')[1]);
    return week;
  }
  
  function changeWeek(back) {
    var week = getDisplayedWeekNum();
  
    if(back) {
      if(week < 2) {
        return;
      }
      week -= 1;
    } else {
      if(week > 51) {
        return
      }
      week += 1;
    }
  
    var storageWeek = 'week-' + week;
    var data = getDataFromStorage(storageWeek);
    createGraph(data);
    document.getElementById('weekText').innerHTML = getText('weekText') + week;
    calcWeekTotalHeadache(storageWeek);
    
    toggleHeadache(week != moment().week());
  }
  
  function toggleHeadache(toggle = false) {
    document.getElementById('headBtn').disabled = toggle;
  }
  
  
  function createGraph(data) {
    var ctx = document.getElementById('headacheChart');
  
    if(ctx.classList.contains('chartCreated')) {
      update();
    } else {
      create();
      ctx.classList.add('chartCreated');
      document.getElementById('weekButtons').removeAttribute('hidden');
      document.getElementById('weekText').innerHTML = 'Week ' + moment().week();
    }
  
    function update() {
      headacheChart.data.datasets.forEach((dataset) => {
        dataset.data = data;
      });
      headacheChart.update();
    }
  
    function create() {
      headacheChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            getText('monday'), 
            getText('tuesday'), 
            getText('wednesday'), 
            getText('thursday'), 
            getText('friday'), 
            getText('saturday'), 
            getText('sunday')
          ],
          datasets: [{
            label: getText('graphText'),
            data: data,
            backgroundColor: [
              'rgba(114, 147, 203, 0.8)',
              'rgba(225, 151, 76, 0.8)',
              'rgba(132, 186, 91, 0.8)',
              'rgba(211, 94, 96, 0.8)',
              'rgba(144, 103, 167, 0.8)',
              'rgba(171, 104, 87, 0.8)',
              'rgba(204, 194, 12, 0.8)',
            ]
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
    