const dropdownButton = document.querySelector('.relative button');
const dropdownContent = document.querySelector('.absolute');

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('hidden');
});