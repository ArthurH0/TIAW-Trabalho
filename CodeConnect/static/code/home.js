
function teste(elemento) {
    var f = elemento.id;
    var conteudo = document.getElementById("parag")
    var texto = "";

    if (f == "bver1") {
        alert(f)

        var produtoatual =
        `<div class="row">
          <div class="col-12">
            <p>oi</oi>
          </div>
        </div>`;
    
   texto += produtoatual
   
    } else if( f == 'bver2'){
        alert(f)
    } else if( f == 'bver3'){
        alert(f)
    }else if ( f == 'bver4'){
        alert(f)
    }else if ( f == 'bver5'){
        alert(f)
    }else if (f == 'bver6'){

    }

    conteudo.innerHTML += texto;

}