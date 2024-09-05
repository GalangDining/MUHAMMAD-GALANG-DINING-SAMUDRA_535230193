function scrollAnimation() {
    const Thisis = document.getElementById('Aduh');
    const name = document.getElementById('name');
    const photo = document.querySelector('.photo');
    const details = document.querySelectorAll('.details h2, .details p');

        document.getElementById('showContactBtn').addEventListener('click', function() {
        const contactInfo = document.getElementById('contactInfo');
        
        if (contactInfo.classList.contains('hidden')) {
            contactInfo.classList.remove('hidden');
            contactInfo.classList.add('visible');
            this.textContent = 'Hide Contact Info';  
        } else {
            contactInfo.classList.remove('visible');
            contactInfo.classList.add('hidden');
            this.textContent = 'Show Contact Info'; 
        }
    });

    if (Thisis.getBoundingClientRect().top < window.innerHeight) {
        Thisis.style.opacity = '1';
        Thisis.style.transform = 'translateX(0)';
    }

    if (name.getBoundingClientRect().top < window.innerHeight) {
        name.style.opacity = '1';
        name.style.transform = 'translateY(0)';
    }

    if (photo.getBoundingClientRect().top < window.innerHeight) {
        photo.style.opacity = '1';
        photo.style.transform = 'translateX(0)';
        details.forEach((detail) => {
            detail.style.opacity = '1';
            detail.style.transform = 'translateY(0)';
        });
    }
}

window.addEventListener('scroll', scrollAnimation)
