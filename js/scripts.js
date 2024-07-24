document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    document.addEventListener('click', function (event) {
        var isClickInsideMenu = navbarCollapse.contains(event.target);
        var isClickOnToggler = navbarToggler.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggler) {
            var isMenuOpen = navbarToggler.getAttribute('aria-expanded') === 'true';
            if (isMenuOpen) {
                navbarToggler.click();
            }
        }
    });
});
