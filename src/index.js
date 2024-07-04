import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/sass/styles.scss';
import "./assets/css/style.css";
import './assets/js/scripts.js';

import '@fortawesome/fontawesome-free/css/all.min.css';
// src/scripts/main.js
document.getElementById("contactalirt").style.display = "none";

// التأكد من تحميل DOM بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // الحصول على النموذج
    const contactForm = document.getElementById('contactForm');
    
    // الاستماع لحدث الإرسال
    contactForm.addEventListener('submit', function(event) {
      // إيقاف الإرسال الافتراضي
      event.preventDefault();
      
      // التحقق من صحة البيانات
      if (!contactForm.checkValidity()) {
        event.stopPropagation();
      } else {
        // يمكنك إضافة الشيفرة هنا لإرسال البيانات إلى الخادم
        document.getElementById("contactform").style.display = "none";
        document.getElementById("contactalirt").style.display = "block";

      }
      
      // إضافة فئة التحقق
      contactForm.classList.add('was-validated');
    }, false);
  });
  document.getElementById('fullYear').innerHTML = new Date().getFullYear();