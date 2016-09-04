$( document ).ready(function() {

  $( "#myForm" ).submit(function(e) {
    //variaveis das perguntas
    var catProf={
        value:$("input:radio[name='catProf']:checked").val(),
        areaDestacar:$("#catProf")
    };
    var posicionamento={
        value:$("input:radio[name='posicionamento']:checked").val(),
        areaDestacar:$("#posicionamento")
    };
    var preox={
        value:$("input:radio[name='preox']:checked").val(),
        areaDestacar:$("#preox")
    };
    var sellick={
        value:$("input:radio[name='sellick']:checked").val(),
        areaDestacar:$("#sellick")
    };
    var whyNoSellick={
      value:[],
      areaDestacar:$("#whyNoSellick"),
      getValues: function(){
        $('input[type="checkbox"]').each(function() {
          if ($(this).is(":checked")) {
            whyNoSellick.value.push($(this).val());

         }
       })
         if(whyNoSellick.value.length===0){
         whyNoSellick.value="";
         }

       }
     };
    var vent={
        value:$("input:radio[name='vent']:checked").val(),
        areaDestacar:$("#vent")
    };
    var relax={
        value:$("input:radio[name='relax']:checked").val(),
        areaDestacar:$("#relax")
    };
    var fasc={
        value:$("input:radio[name='fasc']:checked").val(),
        areaDestacar:$("#escondesux")
    };
    var suga={
        value:$("input:radio[name='suga']:checked").val(),
        areaDestacar:$("#esconderoc")
    };
    var prime={
        value:$("input:radio[name='prime']:checked").val(),
        areaDestacar:$("#escondeprime")
    };
    var laringo={
        value:$("input:radio[name='laringo']:checked").val(),
        areaDestacar:$("#laringo")

    }
    var perguntas=[catProf,posicionamento, preox,sellick,vent,relax,laringo]

    //logica para verificar se respostas adicionais foram respondidas
    if(relax.value==='roc'){
      perguntas.push(suga)
      perguntas.push(prime)
    };
    if(relax.value==='sux'){
      perguntas.push(fasc)
    };
    if(relax.value==='other'){
      perguntas.push(prime)
    }

    if(sellick.value==='n'){
      whyNoSellick.getValues();
      perguntas.push(whyNoSellick);

    }



    var perguntasRespondidas=0;
    for(var i=0;i<perguntas.length;i++){
      if(!perguntas[i].value){
        perguntas[i].areaDestacar.css('background-color', '#ffb59d');
      }
      else{
        perguntas[i].areaDestacar.css('background-color', '');
        perguntasRespondidas++;
    }
  }
  if(validateForm(perguntasRespondidas,perguntas.length)){
    return true
  }
  else{
    toastr.error('Por favor, preencha os campos em falta','Questionário incompleto!')
    e.preventDefault();
    return false
  }
  })
})






function validateForm(perguntasRespondidas, perguntasTotais){
  if(perguntasRespondidas===perguntasTotais){
    return true;
}
  else{
    $('html, body').animate({scrollTop: '0px'}, 300);
    return false;
    }

}
