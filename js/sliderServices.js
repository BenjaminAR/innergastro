


document.addEventListener('DOMContentLoaded', function() {
    var serviceOne = document.getElementById('services-one');
    var serviceTwo = document.getElementById('services-two');
  
    document.getElementById('services-prev').addEventListener('click', function() {
      toggleServices(false);
    });
  
    document.getElementById('services-next').addEventListener('click', function() {
      toggleServices(true);
    });
  
    function toggleServices(next) {
      if (next) {
        serviceOne.style.display = 'none';
        serviceTwo.style.display = 'flex';
      } else {
        serviceOne.style.display = 'flex';
        serviceTwo.style.display = 'none';
      }
    }
  });
  