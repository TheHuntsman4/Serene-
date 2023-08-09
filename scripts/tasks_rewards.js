// Get all reward buttons
const rewardButtons = document.querySelectorAll('.task-button');

// Event listener for reward button clicks
rewardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rewardText = button.querySelector('h2').textContent;
    const rewardlottieSrc = button.querySelector('lottie-player').getAttribute('src');
    localStorage.setItem('rewardlottieSrc',rewardlottieSrc)
    localStorage.setItem('selectedReward', rewardText);
    window.location.href = '../Pages/task_result.html'; // Redirect to the result page
  });
});
