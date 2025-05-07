// function toggleMobileNav() {
//     const hamburgerIcon = document.querySelector('.hamburger-menu .fa-bars');
//     const closeIcon = document.querySelector('.hamburger-menu .fa-times');
    
//     if (hamburgerIcon.style.display === 'block') {
//         closeIcon.style.display = 'none';

//     } else {
//         hamburgerIcon.style.display = 'none';
//         closeIcon.style.display = 'block';
//     }
// }


// function toggleMobileNav() {
//     const mobileNav = document.getElementById('mobileNav');
//     const hamburgerIcon = document.querySelector('.hamburger-menu .fa-bars');
//     const closeIcon = document.querySelector('.hamburger-menu .fa-times');
    
//     if (mobileNav.style.display === 'block') {
//         mobileNav.style.display = 'none';
//         hamburgerIcon.style.display = 'block';
//         closeIcon.style.display = 'none';
//     } else {
//         mobileNav.style.display = 'block';
//         hamburgerIcon.style.display = 'none';
//         closeIcon.style.display = 'block';
//     }
// }

// javascript//

// function toggleMenu(){
//     const navleft = document.querySelector('.nav-link-left');
//     const navright = document.querySelector('.nav-link-right');
//     const menuIconBars = document.querySelector('.fa-bars');
//     const menuIconTimes = document.querySelector('.fa-time');
    
// navleft.Style.display = navleft.style.display === 'flex' ? 'none' : 'flex';
// navright.Style.display = navright.style.display === 'flex' ? 'none' : 'flex';


// menuIconBars.Style.display = navleft.style.display === 'flex' ? 'none' : 'flex';
// menuIconTimes.Style.display = navright.style.display === 'flex' ? 'none' : 'flex';
// }

// document.querySelector('.hamburger-menu').addEventListener('mouseenter', () =>{
//     if(window.innerWidth <= 768){
//         document.querySelector('.nav-link-left').style.display = 'flex';
//         document.querySelector('.nav-link-right').style.display = 'flex';
//     }
// });

//  document.querySelector('.nav-bar').addEventListener('mouseenter', () =>{
//         if(window.innerWidth <= 768){
//             document.querySelector('.nav-link-left').style.display = 'none';
//             document.querySelector('.nav-link-right').style.display = 'none';
//         }

// });



// function toggleMenu(){
//         const navleft = document.querySelector('.nav-link-left');
//         const navright = document.querySelector('.nav-link-right');
//         const menuIconBars = document.querySelector('.fa-bars');
//         const menuIconTimes = document.querySelector('.fa-time');
        
//     const isVisible = navleft.style.display === 'flex';

//     navleft.style.display = isVisible ? 'none' : 'flex';
//     navright.style.display = isVisible ? 'none' : 'flex';
//     menuIconBars.style.display = isVisible ? 'block' : 'none';
//     menuIconTimes.style.display = isVisible ? 'none' : 'block';
// }   

// document.querySelector('.hamburger-menu').addEventListener('mouseenter', () =>{
//    if(window.innerWidth <= 768){
//              document.querySelector('.nav-link-left').style.display = 'flex';
//              document.querySelector('.nav-link-right').style.display = 'flex';
//          }

//  });

//  document.querySelector('.nav-bar').addEventListener('mouseenter', () =>{
//             if(window.innerWidth <= 768){
//                 document.querySelector('.nav-link-left').style.display = 'none';
//                 document.querySelector('.nav-link-right').style.display = 'none';
//             }
    
// });
    


//     const hamburgerMenu = document.querySelector('.hamburger-meun');
//         const navleft = document.querySelector('.nav-link-left');
//         const navright = document.querySelector('.nav-link-right');
//         const menuIconBars = document.querySelector('.fa-bars');
//        const menuIconTimes = document.querySelector('.fa-time');
    
//        function toggleMenu(){
//         const isLeftVisible = navleft.classList.contains('flex');
//         if(isLeftVisible) {

//             navleft.classList.remove('flex');
//             navleft.classList.add('hidden');
//             navright.classList.remove('flex');
//             navright.classList.add('hidden');
//             menuIconBars.classList.remove('hidden');
//              menuIconTimes.classList.add('hidden');
//     }else{
//         navleft.classList.remove('hidden');
//         navleft.classList.add('flex');
//         navright.classList.remove('hidden');
//         navright.classList.add('flex');
//         menuIconBars.classList.remove('hidden');
//          menuIconTimes.classList.add('hidden');

//     }

// }

// hamburgerMenu.addEventListener('click', toggleMenu);

// hamburgerMenu.addEventListener('kedown' , (e) =>{
//     if (e.key === 'Enter' || e.key === ' '){
//         e.preventDefault();
//         toggleMenu();
//     }
// });

// window.addEventListener('resize', () =>{
//     if (window.innerWidth >= 768){
//         navleft.classList.remove('flex');
//         navleft.classList.add('hidden');
//         navright.classList.remove('flex');
//         navright.classList.add('hidden');
//         menuIconBars.classList.remove('hidden');
//          menuIconTimes.classList.add('hidden');

//     }
// });


// const spaceround = document.getElementById('cos');
// spaceround.innerHTML = spaceround.textContent.replace (/\S/g ,"<tpaning>$&</tpaning>");
// const ele = document.querySelectorAll('tpaning');
// for(let i = 1 ; i <ele.length; i++){
//     ele[i].style.transform = "rotate( "+ i *10.9 +"deg)";
// }







// JavaScript to toggle the menu
// function toggleMenu() {
//     const navLeft = document.querySelector('.nav-links-left');
//     const navRight = document.querySelector('.nav-links-right');
//     const hamburgerMenu = document.querySelector('.hamburger-menu');

    // Toggle the active class on the hamburger menu
    // hamburgerMenu.classList.toggle('active');
    
    // Toggle visibility of navigation links
//     navLeft.classList.toggle('active');
//     navRight.classList.toggle('active');
// }

// Add event listener to hamburger menu
// document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);




// Function to toggle the visibility of the mobile menu
function toggleMenu() {
    const navLeft = document.querySelector('.nav-links-left');
    const navRight = document.querySelector('.nav-links-right');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const iconBars = hamburgerMenu.querySelector('.fa-bars');
    const iconTimes = hamburgerMenu.querySelector('.fa-times');
    
    // Toggle active class to show/hide the menu
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');

    // Toggle the hamburger menu icons
    iconBars.style.display = iconBars.style.display === 'none' ? 'block' : 'none';
    iconTimes.style.display = iconTimes.style.display === 'none' ? 'block' : 'none';
}

// Function to handle the dropdown toggle
function toggleDropdown(event) {
    const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
    
    // Toggle the visibility of the dropdown menu
    dropdownMenu.classList.toggle('active');
}

// Event listener for the dropdown toggle (for; blog section)
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', toggleDropdown);
});

// Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !event.target.closest('.dropdown')) {
            dropdown.classList.remove('active');
        }
    });
});

// cjrr ///
// let submenu = document.getElementById("user-pic");
// function toggleMenu(){
//     submenu.classList.toggle("open-menu");
// }

 // Dark mode toggle
 const darkModeToggle = document.getElementById('dark-mode-toggle');
 darkModeToggle.addEventListener('click', () => {
   if (document.documentElement.classList.contains('dark')) {
     document.documentElement.classList.remove('dark');
     document.body.classList.remove('bg-gray-900');
     document.body.classList.add('bg-gradient-to-br', 'from-slate-700', 'via-purple-900', 'to-slate-400');
   } else {
     document.documentElement.classList.add('dark');
     document.body.classList.remove('bg-gradient-to-br', 'from-slate-700', 'via-purple-900', 'to-slate-400');
     document.body.classList.add('bg-gray-900');
   }
 });

 // Search form submit handler
 const searchForm = document.getElementById('search-form');
 searchForm.addEventListener('submit', (index) => {
   index.preventDefault();
   const query = document.getElementById('search-input').value.trim();
   if (query) {
     alert(`Searching for: ${query}`);
   } else {
     alert('Please enter a search term.');
   }
 });

 // Cart click handler
 const cart = document.getElementById('cart');
 cart.addEventListener('click', () => {
   alert('Your shopping cart is empty.');
 });

 // Notifications click handler
 const notifications = document.getElementById('notifications');
 notifications.addEventListener('click', () => {
   alert('You have 9 new notifications.');
 });

 // Sidebar menu handlers
 document.getElementById('edit-profile').addEventListener('click', () => {
   alert('Navigate to Edit Profile page.');
 });
 document.getElementById('settings-privacy').addEventListener('click', () => {
   alert('Navigate to Settings & Privacy page.');
 });
 document.getElementById('help-support').addEventListener('click', () => {
   alert('Navigate to Help & Support page.');
 });
 document.getElementById('logout').addEventListener('click', () => {
   const confirmed = confirm('Are you sure you want to logout?');
   if (confirmed) {
     alert('You have been logged out.');
   }
 });