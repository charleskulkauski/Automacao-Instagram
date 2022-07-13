//Consulta a classe que pertence do botao curtir e faz o cliqu
function clickButtonAll(){
    let object = document.querySelectorAll('._aamw > ._abl- > ._abm0._abl_')
    for (const iterator of object) {
        iterator.click()
    }
}

//Rolar a tela para curtir mais publicações
function rolarTela(){
    let rolar = document.querySelectorAll('._aamw > ._abl-')
    for (const iterator of rolar) {
        iterator.scrollIntoView()
    }
}

//Tempo entre uma curtida e outra
const tempo = setInterval(()=>{
    clickButtonAll()
    rolarTela()
}, 10540)

tempo

//Parar o programa
clearInterval(tempo)