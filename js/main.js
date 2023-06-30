document.addEventListener('DOMContentLoaded', function () {
    //========================================
    //  Content to be displayed below navbar    
    //========================================
    // Get the height of the fixed navbar
    var navbarHeight = document.getElementById('header').offsetHeight;

    // Add padding to the top of each section to offset for the fixed navbar
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.style.paddingTop = navbarHeight + 'px';
    });

    // Smooth scrolling when a navigation link is clicked
    var navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.hash);
            window.scrollTo({
                top: target.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
    //---------------------end---------------------------------


    //========================================
    //              Back To Top    
    //========================================
    // Select the back-to-top button element
    const backToTopButton = document.querySelector('.back-to-top');

    // Function to scroll to the top of the page with smooth behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add a click event listener to the button
    backToTopButton.addEventListener('click', scrollToTop);

    // Function to toggle the visibility of the back-to-top button
    const toggleBackToTopButton = () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    };

    // Add a scroll event listener to toggle the visibility of the button
    window.addEventListener('scroll', toggleBackToTopButton);

    // --------------backtotop end-----------------------------------


    //========================================
    //              Sticky Navbar    
    //========================================
    const topbar = document.getElementById('topbar');
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 100) {
            topbar.classList.add('hide-topbar');
            header.classList.add('fix-nav');
        } else {
            topbar.classList.remove('hide-topbar');
            header.classList.remove('fix-nav');
        }

    });
    // ------------------------sticky navbar end----------------------------- //


    //========================================
    //           Mobile Nav Toggle    
    //========================================
    document.addEventListener('click', function (e) {
        const mobileNavToggle = e.target.closest('.mobile-nav-toggle');
        const navbar = document.querySelector('#navbar');

        if (mobileNavToggle) {
            navbar.classList.toggle('navbar-mobile');
            mobileNavToggle.classList.toggle('bx-menu');
            mobileNavToggle.classList.toggle('bx-x');
        }
    });
    // -------------------nav toggle end-------------------------------------------


    // Glightbox initialization
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    //Aos initialization
    AOS.init();

    //PureCounter initialization
    new PureCounter();
});
