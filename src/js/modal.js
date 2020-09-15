function createModal(options) {
    const close = options.close ? '<span class="close">&times;</span>' : ''
    return `
            <div class="modal-body">
                <div class="close-block">${close}</div>
                <h3 class="modal-header">${options.title || 'Modal'}</h3>
                <div class="modal-content">${options.content || ''}</div>
                <div class="modal-footer">${options.footer || ''}</div>
            </div>
        `
}

const zPlugin = {
    modal(options) {
        let isExists = true
        const modal = createModal(options)
        const modalElement = document.createElement('div')
        modalElement.innerHTML = modal
        modalElement.classList.add('modal')
        const hideModal = event => {
            if (event.target.classList.contains('modal') || (options.close && event.target.classList.contains('close'))) {
                config.close()
            }
        }
        modalElement.addEventListener('click', hideModal)
        document.body.appendChild(modalElement)

        const config = {
            open() {
                modalElement.firstChild.nextSibling.classList.add('show')
                modalElement.classList.add('show')
            },

            close() {
                modalElement.classList.remove('show')
                modalElement.firstChild.nextSibling.classList.remove('show')
            },

            destroy() {
                isExists = false
                document.body.removeChild(modalElement)
                modalElement.removeEventListener('click', hideModal)
            }
        }

        return config
    }
}