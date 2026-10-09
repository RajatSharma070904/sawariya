// SAWARIYA DRESSES - Interactive Fashion & Shopping Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other accordion items
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // 2. WhatsApp Direct Route & Console Logs
  const waUrl = 'https://wa.me/918003872035';
  const trackedLinks = document.querySelectorAll('a[href*="wa.me/918003872035"]');
  
  trackedLinks.forEach((link) => {
    link.addEventListener('click', () => {
      console.log('Routing to Sawariya Dresses WhatsApp Order Desk:', waUrl);
    });
  });

  // 3. Floating entrance animation for the fixed WhatsApp button
  const fixedBtn = document.getElementById('fixedWhatsAppBtn');
  if (fixedBtn) {
    fixedBtn.style.opacity = '0';
    fixedBtn.style.transform = 'translateX(-50%) translateY(30px)';
    setTimeout(() => {
      fixedBtn.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      fixedBtn.style.opacity = '1';
      fixedBtn.style.transform = 'translateX(-50%) translateY(0)';
    }, 250);
  }
});
