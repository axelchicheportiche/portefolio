
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu li');

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            const submenu = this.querySelector('.submenu');


            //fermer les autres sous-menus :
            menuItems.forEach(function(item) {
                if (item != menuItem) {
                    item.querySelector('.submenu').style.display = 'none';
                }
            });

            //afficher ou masquer le sous-menu actuel
            if (submenu.style.display ===  'block'){
                submenu.style.display = 'none'
            } else {
                submenu.style.display = 'block'
            }

        })
    })
})



//smooth scroll down
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// display project screenshot

// document.querySelector('.links-projet').addEventListener('mouseover', function() {
//         document.querySelector('.hover-img').style.display = 'block';
//     });

// document.querySelector('.links-projet').addEventListener('mouseout', function() {
//         document.querySelector('.hover-img').style.display = 'none';
//     });