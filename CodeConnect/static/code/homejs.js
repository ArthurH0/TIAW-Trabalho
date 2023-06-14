z
function teste(elemento) {
    var f = elemento.id;
    var conteudo = document.getElementById("parag");
    var texto = "";

    if (f == "bver1") {

        var produtoatual =
        `<div class="container">
        <div class="row">
        <div class="col-12 ">
        <div class="card justify-content-center">
        <img class="card-img-top" src="../images/postImgs/react1.png" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-center" style="font-size:20px;">O React normalmente vence nesse tópico, por causa do React Native que permite desenvolver aplicativos nativos com React, porém o Angular não fica atrás. Usando o NativeScript que permite desenvolver aplicativos nativos com Angular e Vue. Ambos oferecem desempenho comparativo e conjuntos de recursos.</p>
        </div>
        </div>
      </div>
      </div>
      </div>
        `;
    
   texto = produtoatual
   
    } else if( f == 'bver2'){

        var produtoatual =
        ` 
        <div class="container">
        <div class="row">
        <div class="col-12">
        <div class="card"">
        <img class="card-img-top" src="../images/postImgs/operador (1).png" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-center" style="font-size:20px;">O operador ternário ( ? : ) funciona assim:

          Você tem uma condição que deve ser validada como verdadeira ou falsa.
          
          Se a condição for verdadeira o operador retorna uma expressão e se for falsa retorna outra expressão.
          
          Sintaxe:
          
              condição ? expressão1_se_true : expressão2_se_false</p>
        </div>
        </div>
      </div>
      </div>
      </div>
        `;
    
   texto = produtoatual
        
    } else if( f == 'bver3'){
        var produtoatual =
        ` 
        <div class="container">
        <div class="row">
        <div class="col-12">
        <div class="card"">
        <img class="card-img-top" src="../images/postImgs/unity.png" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-center" style="font-size:20px;">Você é desenvolvedor ou artista visual? Esta pergunta geralmente afeta a decisão das equipes responsáveis pela produção visual e desenvolvimento de games. É fácil adivinhar: desenvolvedores irão preferir o motor Unity, mas artistas visuais vão optar pelo Unreal, simplesmente devido à diferença nos visuais.</p>
        </div>
        </div>
      </div>
      </div>
      </div>
        `;
        texto = produtoatual

        
    }else if ( f == 'bver4'){

        var produtoatual =
        ` 
        <div class="container">
        <div class="row">
        <div class="col-12">
        <div class="card"">
        <img class="card-img-top" src="../images/postImgs/ia (1).png" alt="Card image cap">
        <div class="card-body">
          <p class="card-text text-center" style="font-size:20px;">O Google busca fornecer informações precisas e relevantes a partir de fontes existentes na internet, enquanto o ChatGPT procura gerar respostas em linguagem natural a partir do conhecimento e das informações armazenadas em sua memória</p>
          <p class="card-text text-center" style="font-size:20px;">Qual é a diferença entre o Chat GPT e um chatbot convencional? Enquanto o Chat GPT é uma tecnologia de modelo de linguagem capaz de compreender o significado das frases, um chatbot tradicional se baseia em regras estabelecidas previamente.</p>
        </div>
        </div>
      </div>
      </div>
      </div>
        `;
    
   texto = produtoatual
       
    }else if ( f == 'bver5'){

        var produtoatual =
        ` 
        <div class="container">
        <div class="row">
        <div class="col-12">
        <div class="card">
        <img class="card-img-top" src="../images/postImgs/processador.jpg" alt="Card image cap">
        <div class="card-body"

        <p class="card-text text-center" style="font-size:20px;">Escolher o processador certo para o seu computador é muito importante. Dependendo do tipo de uso desejado e do hardware disponível, comprar o chip errado pode significar pagar a mais sem necessidade ou até limitar o desempenho de uma máquina que deveria ser poderosa. Enquanto a Intel oferece diferentes modelos de Core i3, Core i5, Core i7 e Core i9, a AMD faz o mesmo com os Ryzen 3, Ryzen 5, Ryzen 7 e Ryzen 9, o que pode confundir o usuário na hora de comprar.</p>

          <p class="card-text text-center" style="font-size:20px;">A Intel tende a brilhar em tarefas mais trabalhosas, como edição de vídeo e jogos, mas os processadores AMD Ryzen tendem a ter um valor melhor quando se trata de gráficos e para aqueles que planejam usar seus PCs principalmente para tarefas de produtividade e não muito mais.</p>

          
        </div>
        </div>
      </div>
      </div>
      </div>
        `;
    
   texto = produtoatual
        
    }else if (f == 'bver6'){

        var produtoatual =
        ` 
        <div class="container">
        <div class="row">
        <div class="col-12">
        <div class="card"">
        <img class="card-img-top" src="../images/postImgs/gpu.jpg" alt="Card image cap">
        <div class="card-body t>

          <p class="text-center" style="font-size:20px;">A Nvidia anunciou, na terça-feira (20), suas novas GPUs de alto desempenho da série RTX. As placas de vídeo RTX 4080 e RTX 4090, que chegam ao mercado em outubro por valores a partir dos US$ 899 (R$ 4.649, em conversão direta e sem impostos), prometem superar em até quatro vezes o desempenho de modelos de gerações anteriores. Elas estarão disponíveis em versões que contam com até 24 GB de VRAM no padrão GDDR6X.
          Os novos modelos da linha RTX prometem entregar um desempenho aprimorado com tecnologias como Ray Tracing e DLSS, além de oferecer suporte ao Nvidia ShadowPlay para quem realiza streaming. Elas também têm capacidade de reprodução de jogos na resolução de até 8K com 60 FPS e suporte a HDR.</p>

          
        </div>
        </div>
      </div>
      </div>
      </div>
        `;
    
   texto = produtoatual

    }

    conteudo.innerHTML = texto;

}