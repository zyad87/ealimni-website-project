import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/sass/styles.scss';
import "./assets/css/style.css";
import './assets/js/scripts.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

// إضافة الاستيراد لمكتبة popperjs
import '@popperjs/core';

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactalirt');

    // التحقق من وجود العنصر قبل محاولة الوصول إليه
    if (contactAlert) {
        contactAlert.style.display = "none";
    }

    // التحقق من وجود العنصر قبل محاولة الوصول إليه
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!contactForm.checkValidity()) {
                event.stopPropagation();
            } else {
                const contactFormElement = document.getElementById("contactform");
                if (contactFormElement) {
                    contactFormElement.style.display = "none";
                }
                if (contactAlert) {
                    contactAlert.style.display = "block";
                }
            }
            
            contactForm.classList.add('was-validated');
        }, false);
    }

    // تحميل ملفات CSS بناءً على الصفحة
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

    const fullYearElement = document.getElementById('fullYear');
    if (fullYearElement) {
        fullYearElement.innerHTML = new Date().getFullYear();
    }
});
