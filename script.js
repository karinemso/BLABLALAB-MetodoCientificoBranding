let palavras = document.querySelectorAll('.palavra')
let counter = 0
let refresh = document.querySelector('.refresh')
let btnrefresh = document.querySelector('#btnrefresh')



function selected(element){
    palavra = element.target
    
    if(counter <5){
        palavra.disabled = 'true'

        palavra.style.color = 'white'
        palavra.style.background = 'green'
        
    }
    else if( counter < 10 ){
        palavra.disabled = 'true'
        palavra.style.color = 'white'
        palavra.style.background = 'red'
    }
    else{
        refresh.style.display = 'flex'
        
    }
    
    counter++

}

palavras.forEach(element => {
    element.addEventListener('click', selected)
    
});

function restart(){
    document.location.reload()
}
btnrefresh.addEventListener('click', restart)