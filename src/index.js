import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/sass/styles.scss';
import "./assets/css/style.css";
import './assets/js/scripts.js';

import '@fortawesome/fontawesome-free/css/all.min.css';
document.getElementById("contactalirt").style.display = "none";

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (!contactForm.checkValidity()) {
        event.stopPropagation();
      } else {
        document.getElementById("contactform").style.display = "none";
        document.getElementById("contactalirt").style.display = "block";

      }
      
      contactForm.classList.add('was-validated');
    }, false);
  });


  // تحميل ملفات CSS بناءً على الصفحة
document.addEventListener("DOMContentLoaded", function() {


  // التحقق من صحة النموذج عند الإرسال
  const forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function(form) {
      form.addEventListener('submit', function(event) {
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
  });
});

  document.getElementById('fullYear').innerHTML = new Date().getFullYear();