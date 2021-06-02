// querySelector
// addEventListener
var day = document.querySelector('.day')
var hour = document.querySelector('.hour')
var minute = document.querySelector('.minute')
var second = document.querySelector('.second')
var input = document.querySelector('.input')
var btn = document.querySelector('.btn')
var end = document.querySelector('.ending')

btn.addEventListener('click', () => {
  setInterval(count_down, 1000)
})

function count_down() {
  var eventTime = new Date(input.value)
  var todayTime = new Date()
  const totalTime = eventTime - todayTime
  
  if (totalTime == 0) {
    end.innerHTML = 'Your time ends up!'
  }
  else if (totalTime > 0){
    var totalSecond = Math.floor(totalTime / 1000)
    var totalMinute = Math.floor(totalSecond / 60)
    var totalHour = Math.floor(totalMinute / 60)
    var totalDay = Math.floor(totalHour / 24)
  
    var remainHour = totalHour % 24
    var remainMinute = totalMinute % 60
    var remainSecond = totalSecond % 60
    
     // Making beautiful look
    if(remainSecond < 10 && remainSecond >= 0) {
      remainSecond = '0' + remainSecond
    }
    if(remainMinute < 10 && remainMinute >= 0) {
      remainMinute = '0' + remainMinute
    }
    if(remainHour < 10 && remainHour >= 0) {
      remainHour = '0' + remainHour
    }
    if(totalDay < 10 && totalDay >= 0) {
      totalDay = '0' + totalDay
    }
    
     // Count Down Showing
    day.innerHTML = totalDay
    hour.innerHTML = remainHour
    minute.innerHTML = remainMinute
    second.innerHTML = remainSecond
    
  }
}