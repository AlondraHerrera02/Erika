let principal = document.getElementById('cont-principal');

servicios = new Array();

servicios[0] = ['img/Manicure.png'],
servicios[1] = ['img/Pedicure.png'],
servicios[2] = ['img/Depilacion.png'];


if(principal){
    for(i=0;i<servicios.length;i++){
        let creaimg = document.createElement('img');

        creaimg.setAttribute('src', servicios[i][0]);

        principal.appendChild(creaimg);
    }
}