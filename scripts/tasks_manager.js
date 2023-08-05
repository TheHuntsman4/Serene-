// Get all task buttons
const taskButtons = document.querySelectorAll('.task-button');

// Event listener for task button clicks
taskButtons.forEach(button => {
  button.addEventListener('click', () => {
    const taskText = button.querySelector('h2').textContent;
    console.log(`Clicked on task: ${taskText}`);
  });
});


