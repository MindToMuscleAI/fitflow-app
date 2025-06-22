const startBtn = document.getElementById('start-workout');
if (startBtn) {
  startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Workout Started!');
  });
}
