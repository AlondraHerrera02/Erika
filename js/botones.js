function botonUno(){
    let click = document.querySelector('.click');
    let list = document.querySelector('.list');
    click.addEventListener("click",()=>{
        list.classList.toggle('newlist')
    });
    }
    
    botonUno();
    
    function botonDos(){
        let clickDos = document.querySelector('.click-dos');
        let listDos = document.querySelector('.list-dos');
        clickDos.addEventListener("click",()=>{
            listDos.classList.toggle('newlist-dos')
        });
    }
    
    botonDos();
    
    
    
    function botonTres(){
        let clickTres = document.querySelector('.click-tres');
        let listTres = document.querySelector('.list-tres');
        clickTres.addEventListener("click",()=>{
            listTres.classList.toggle('newlist-tres')
        });
    }
    
    botonTres();