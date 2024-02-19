document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-toggle');
    const list = document.querySelector('.unordered-list');

    toggleButton.addEventListener('click', function() {
        list.style.display = (list.style.display === 'none' || list.style.display === '') ? 'flex' : 'none';
    });
});