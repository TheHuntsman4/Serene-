// Get all reward buttons
const rewardButtons = document.querySelectorAll('.task-button');

// Event listener for reward button clicks
rewardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rewardText = button.querySelector('h2').textContent;
    localStorage.setItem('selectedReward', rewardText);
    window.location.href = '../Pages/task_result.html'; // Redirect to the result page
  });
});
