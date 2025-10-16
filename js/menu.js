document.getElementById('menuToggle').addEventListener('click', () => {
    const menuBtn = document.getElementById('menuToggle')
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    sidebar.classList.toggle('hidden');
    main.classList.toggle('full');
    menuBtn.classList.toggle('active');
});
