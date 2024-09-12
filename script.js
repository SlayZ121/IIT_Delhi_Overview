const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq, index) => {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');

    if (index === 0 || index === 1) {
        question.classList.add('active');
    }

    question.addEventListener('click', () => {
        question.classList.toggle('active');
        if (question.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollHeight = window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const triggerHeight = pageHeight * 0.01; 

    if (scrollHeight > triggerHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.zIndex = '1000';
        navbar.style.width = '100%';
    } else {
        navbar.style.position = 'relative';
    }
});
