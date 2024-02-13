let mode = "dark"

function handleScroll() {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section) {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            if (mode === "dark") {
                link.classList.remove('active-link-light');
                if (visibleHeight >= window.innerHeight / 2) {
                    link.classList.add('active-link-dark');
                } else {
                    link.classList.remove('active-link-dark');
                }
            } else {
                link.classList.remove('active-link-dark');
                if (visibleHeight >= window.innerHeight / 2) {
                    link.classList.add('active-link-light');
                } else {
                    link.classList.remove('active-link-light');
                }
            }

        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.lightIcon').addEventListener('click', () => {
    mode = "light"
    handleScroll()
    document.querySelector('.contPrinc-dark').classList.add('contPrinc-light')
    document.querySelector('.contPrinc-dark').classList.remove('contPrinc-dark')

    document.querySelector('.foto img').setAttribute('src', 'imagenes/Yo.jpg')

    document.querySelector('.separador-dark').classList.add('separador-light')
    document.querySelector('.separador-dark').classList.remove('separador-dark')

    document.querySelector('.darkIcon').classList.add('darkIcon-light')
    document.querySelector('.darkIcon').classList.remove('darkIcon-dark')
    document.querySelector('.lightIcon').classList.add('lightIcon-light')
    document.querySelector('.lightIcon').classList.remove('lightIcon-dark')

    document.querySelectorAll('.texto h1, .texto h3,.textProj h2').forEach(element => {
        element.classList.add('titles-light-color')
        element.classList.remove('titles-dark-color')
    })
    document.querySelectorAll('.techs-dark').forEach(element => {
        element.classList.add('techs-light')
        element.classList.remove('techs-dark')
    })
    document.querySelectorAll('.text-dark-color').forEach(element => {
        element.classList.add('text-light-color')
        element.classList.remove('text-dark-color')
    })
    document.querySelectorAll('div.textProj').forEach(element => {
        element.classList.add('textProj-light')
        element.classList.remove('textProj-dark')
    })
    document.querySelectorAll('.links a').forEach(element => {
        element.classList.add('text-light-color')
        element.classList.remove('text-dark-color')
    })
    document.querySelectorAll('.links a').forEach(element => {
        element.classList.add('after-light')
    })
    document.querySelector('.contacto h2').classList.remove('text-light-color')
    document.querySelector('.contacto h2').classList.add('titles-light-color')
})

document.querySelector('.darkIcon').addEventListener('click', () => {
    mode = "dark"
    handleScroll()
    document.querySelector('.contPrinc-light').classList.add('contPrinc-dark')
    document.querySelector('.contPrinc-light').classList.remove('contPrinc-light')

    document.querySelector('.foto img').setAttribute('src', 'imagenes/Yoo.jpg')

    document.querySelector('.separador-light').classList.add('separador-dark')
    document.querySelector('.separador-light').classList.remove('separador-light')

    document.querySelector('.darkIcon-light').classList.add('darkIcon-dark')
    document.querySelector('.darkIcon-light').classList.remove('darkIcon-light')
    document.querySelector('.lightIcon-light').classList.add('lightIcon-dark')
    document.querySelector('.lightIcon-light').classList.remove('lightIcon-light')

    document.querySelectorAll('.texto h1, .texto h3,.textProj h2').forEach(element => {
        element.classList.add('titles-dark-color')
        element.classList.remove('titles-light-color')
    })
    document.querySelectorAll('.techs-light').forEach(element => {
        element.classList.add('techs-dark')
        element.classList.remove('techs-light')
    })
    document.querySelectorAll('.text-light-color').forEach(element => {
        element.classList.add('text-dark-color')
        element.classList.remove('text-light-color')
    })
    document.querySelectorAll('div.textProj').forEach(element => {
        element.classList.add('textProj-dark')
        element.classList.remove('textProj-light')
    })
    document.querySelectorAll('.links a').forEach(element => {
        element.classList.add('text-dark-color')
        element.classList.remove('text-light-color')
    })
    document.querySelectorAll('.links a').forEach(element => {
        element.classList.remove('after-light')
    })
    document.querySelector('.contacto h2').classList.remove('titles-light-color')
    document.querySelector('.contacto h2').classList.add('titles-dark-color')
})