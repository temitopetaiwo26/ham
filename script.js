
 
// //   // const openPopup = document.getElementById('openPopup');
// //   // const closePopup = document.getElementById('closePopup');
// //   // const popup = document.getElementById('popup');

// //   // openPopup.addEventListener('click', () => {
// //   //   popup.style.display = 'flex';
// //   // });

// //   // closePopup.addEventListener('click', () => {
// //   //   popup.style.display = 'none';
// //   // });

// //   // { window.addEventListener('click', (e) => {
// //   //   if (e.target === popup) {
// //   //     popup.style.display = 'none';
// //   //   }
// //   // }); }

//   //  // Hamburger code
//   // const hamburger = document.getElementById('hamburger');
//   // const navLinks = document.getElementById('navLinks');
//   // const navItems = navLinks ? navLinks.querySelectorAll('a') : [];

//   // if (hamburger && navLinks) {
//   //   hamburger.addEventListener('click', () => {
//   //     navLinks.classList.toggle('show');
//   //     hamburger.classList.toggle('active');
//   //   });

//   //   navItems.forEach(link => {
//   //     link.addEventListener('click', () => {
//   //       navLinks.classList.remove('show');
//   //       hamburger.classList.remove('active');
//   //     });
//   //   });
//   // }



 


// //  ///////////////////////////// ///SCRIPT 2/////////////////////////////////////

// //   //  Popup functionality
// //     const openPopup = document.getElementById('openPopup');
// //     const popup = document.getElementById('popup');
// //     const closePopup = document.getElementById('closePopup');

// //     openPopup.addEventListener('click', () => {
// //       popup.classList.add('active');
// //     });

// //     closePopup.addEventListener('click', () => {
// //       popup.classList.remove('active');
// //     });

// //     popup.addEventListener('click', (e) => {
// //       if (e.target === popup) {
// //         popup.classList.remove('active');
// //       }
// //     });

// //     // Smooth scrolling for navigation links
// //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //       anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         const target = document.querySelector(this.getAttribute('href'));
// //         if (target) {
// //           target.scrollIntoView({
// //             behavior: 'smooth',
// //             block: 'start'
// //           });
// //         }
// //       });
// //     });

// //     // Navbar scroll effect
// //     window.addEventListener('scroll', () => {
// //       const navbar = document.querySelector('.navbar');
// //       if (window.scrollY > 50) {
// //         navbar.style.background = 'rgba(7, 4, 4, 0.98)';
// //         navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
// //       } else {
// //         navbar.style.background = 'rgba(17, 16, 16, 0.95)';
// //         navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
// //       }
// //     });

// //     // Mobile menu toggle (basic implementation)
// //     const hamburger = document.getElementById('hamburger');
// //     const navLinks = document.getElementById('navLinks');

// //     hamburger.addEventListener('click', () => {
// //       navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
// //     });

// //     // Service box hover effects
// //     const serviceBoxes = document.querySelectorAll('.service-box');
// //     serviceBoxes.forEach(box => {
// //       box.addEventListener('mouseenter', () => {
// //         box.style.transform = 'translateY(-10px) scale(1.02)';
// //       });
      
// //       box.addEventListener('mouseleave', () => {
// //         box.style.transform = 'translateY(0) scale(1)';
// //       });
// //     });

// //     // Add loading animation
// //     window.addEventListener('load', () => {
// //       document.body.style.opacity = '0';
// //       document.body.style.transition = 'opacity 0.5s ease';
// //       setTimeout(() => {
// //         document.body.style.opacity = '1';
// //       }, 100);
// //     });


//   // Popup functionality
//     // const openPopup = document.getElementById('openPopup');
//     // const popup = document.getElementById('popup');
//     // const closePopup = document.getElementById('closePopup');

//     // openPopup.addEventListener('click', () => {
//     //   popup.classList.add('active');
//     // });

//     // closePopup.addEventListener('click', () => {
//     //   popup.classList.remove('active');
//     // });

//     // popup.addEventListener('click', (e) => {
//     //   if (e.target === popup) {
//     //     popup.classList.remove('active');
//     //   }
//     // });

//     // // Smooth scrolling for navigation links
//     // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     //   anchor.addEventListener('click', function (e) {
//     //     e.preventDefault();
//     //     const target = document.querySelector(this.getAttribute('href'));
//     //     if (target) {
//     //       target.scrollIntoView({
//     //         behavior: 'smooth',
//     //         block: 'start'
//     //       });
//     //     }
//     //   });
//     // });

//     // Navbar scroll effect
//     // window.addEventListener('scroll', () => {
//     //   const navbar = document.querySelector('.navbar');
//     //   if (window.scrollY > 50) {
//     //     navbar.style.background = 'rgba(255, 255, 255, 0.98)';
//     //     navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
//     //   } else {
//     //     navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//     //     navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
//     //   }
//     // });

//     // Mobile menu toggle (basic implementation)
//     // const hamburger = document.getElementById('hamburger');
//     // const navLinks = document.getElementById('navLinks');

//     // hamburger.addEventListener('click', () => {
//     //   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
//     // });

//     // Service box hover effects
//     // const serviceBoxes = document.querySelectorAll('.service-box');
//     // serviceBoxes.forEach(box => {
//     //   box.addEventListener('mouseenter', () => {
//     //     box.style.transform = 'translateY(-10px) scale(1.02)';
//     //   });
      
//     //   box.addEventListener('mouseleave', () => {
//     //     box.style.transform = 'translateY(0) scale(1)';
//     //   });
//     // });

//     // // Add loading animation
//     // window.addEventListener('load', () => {
//     //   document.body.style.opacity = '0';
//     //   document.body.style.transition = 'opacity 0.5s ease';
//     //   setTimeout(() => {
//     //     document.body.style.opacity = '1';
//     //   }, 100);
//     // });

//     // ===== Popup Logic =====
// const openPopup = document.getElementById('openPopup');
// const popup = document.getElementById('popup');
// const closePopup = document.getElementById('closePopup');

// if (openPopup && popup && closePopup) {
//   openPopup.addEventListener('click', () => {
//     popup.classList.add('active');
//   });

//   closePopup.addEventListener('click', () => {
//     popup.classList.remove('active');
//   });

//   popup.addEventListener('click', (e) => {
//     if (e.target === popup) {
//       popup.classList.remove('active');
//     }
//   });
// }

// // ===== Smooth Scrolling =====
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   });
// });

// // ===== Navbar Scroll Effect =====
// window.addEventListener('scroll', () => {
//   const navbar = document.querySelector('.navbar');
//   if (navbar) {
//     if (window.scrollY > 50) {
//       navbar.style.background = 'rgba(7, 4, 4, 0.98)';
//       navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
//     } else {
//       navbar.style.background = 'rgba(17, 16, 16, 0.95)';
//       navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
//     }
//   }
// });

// // ===== Mobile Hamburger Menu =====
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');

// if (hamburger && navLinks) {
//   hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     hamburger.classList.toggle('active');
//   });

//   // Close menu when a link is clicked
//   navLinks.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", () => {
//       navLinks.classList.remove("active");
//       hamburger.classList.remove("active");
//     });
//   });
// }

// // ===== Service Box Hover Effects =====
// const serviceBoxes = document.querySelectorAll('.service-box');
// serviceBoxes.forEach(box => {
//   box.addEventListener('mouseenter', () => {
//     box.style.transform = 'translateY(-10px) scale(1.02)';
//   });
  
//   box.addEventListener('mouseleave', () => {
//     box.style.transform = 'translateY(0) scale(1)';
//   });
// });

// // ===== Page Load Animation =====
// window.addEventListener('load', () => {
//   document.body.style.opacity = '0';
//   document.body.style.transition = 'opacity 0.5s ease';
//   setTimeout(() => {
//     document.body.style.opacity = '1';
//   }, 100);
// });


// ===== Popup Logic =====
const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

if (openPopup && popup && closePopup) {
  openPopup.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(7, 4, 4, 0.98)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.background = 'rgba(17, 16, 16, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
  }
});

// ===== Mobile Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// ===== Service Box Hover Effects =====
const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0) scale(1)';
  });
});

// ===== Page Load Animation =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});



