export const AlertError = {
    Element: document.querySelector('.alertErro'),
    open() { 
        AlertError.Element.classList.add('open') //adicionando o open
    },
    close() {
        AlertError.Element.classList.remove('open') // removendo
    }
}

