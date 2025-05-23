// script.js - For Header & Footer functionality

document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle (Hamburger)
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Sticky header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if(window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetID);
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 70, // adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });

});
