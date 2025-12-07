function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
    event.target.classList.add('active');
}

function openTemplate(type) {
    showPage('template-preview');
    document.getElementById('preview-fields').innerHTML =
        `<div class="panel"><strong>${type} template preview.</strong></div>`;
}
