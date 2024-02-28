document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  
    window.addEventListener('scroll', function() {
      document.querySelectorAll('.fade-in').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementTop < windowHeight - 200) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    });
  });
