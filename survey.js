let currentPage = 1;

function nextPage() {
    saveFormData();
    currentPage++;
    showPage(currentPage);
}

function prevPage() {
    saveFormData();
    currentPage--;
    showPage(currentPage);
}

function saveFormData() {
    const form = document.getElementById('surveyForm');
    // Save form data to localStorage or cookies
}

function showPage(pageNumber) {
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    pages[pageNumber - 1].style.display = 'block';
}
