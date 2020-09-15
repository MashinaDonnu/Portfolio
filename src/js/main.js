window.onload = () => {
    document.getElementsByClassName('header-burger')[0].addEventListener('click', function() {
        const activeClass = 'active'
        this.classList.toggle(activeClass)
        document.getElementsByClassName('navigation')[0].classList.toggle(activeClass)
    })
    const anchors = document.querySelectorAll('a[href*="#"]')
    anchors.forEach((anchor) => {
        if (!anchor.classList.contains('contacts')) {
            anchor.addEventListener('click', function (event) {
                event.preventDefault()
                const id = this.getAttribute('href')
                const yOffset = -50
                const section = document.getElementById(id.slice(1))
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset

                window.scrollTo({top: y, behavior: "smooth"})
            })
        }
    })
    const contacts = `
        <div class="contacts-list">
            <div class="contact-item"><strong>Email: </strong><a href="mailto:zagatin999@gmail.com">zagatin999@gmail.com</a></div>
            <div class="contact-item"><strong>Skype: </strong><a href="skype:zagatin999@gmail.com">zagatin999@gmail.com</a></div>
            <div class="contact-item"><strong>Telegram, Viber: </strong><a href="tel:+380930172658">+380930172658</a></div>
            <div class="contact-item"><strong>Номер телефона: </strong><a href="tel:+380930172658">+380930172658</a></div>
            <div class="contact-item soc">
                <a href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%B7%D0%B0%D0%B3%D0%B0%D1%82%D0%B8%D0%BD-7a9846188/" target="_blank">Linkedin </a>
                <a href="https://www.instagram.com/dmitriy_zahatin/" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100017188752945" target="_blank">Facebook</a>
            </div>
        </div>
    `

    const modal = zPlugin.modal({
        close: true,
        title: 'Контакты',
        content: contacts
    })

    document.getElementsByClassName('contacts')[0].addEventListener('click', event => {
        event.preventDefault()
        modal.open()
    })
}

