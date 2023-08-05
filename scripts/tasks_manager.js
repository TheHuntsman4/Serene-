// Get all task buttons
const taskButtons = document.querySelectorAll('.task-button');

// Event listener for task button clicks
taskButtons.forEach(button => {
  button.addEventListener('click', () => {
    const taskText = button.querySelector('h2').textContent;
    localStorage.setItem('selectedTask', taskText);
    window.location.href = '../Pages/task_rewards.html'; // Redirect to the rewards page
  });
});
