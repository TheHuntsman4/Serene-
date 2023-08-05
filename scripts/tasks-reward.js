// Get all reward buttons
const rewardButtons = document.querySelectorAll('.task-button');

// Event listener for reward button clicks
rewardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rewardText = button.querySelector('h2').textContent;
    console.log(`Clicked on reward: ${rewardText}`);
  });
});