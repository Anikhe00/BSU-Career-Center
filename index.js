const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    const jobPost = button.previousElementSibling; 
    
    jobPost.classList.toggle('expanded');

    button.textContent = jobPost.classList.contains('expanded') ? 'Show less' : 'Show more';
  });
});
