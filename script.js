document.querySelectorAll('.carousel-item img').forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.src; 
      document.getElementById('modalImage').src = imgSrc;
    });
  });