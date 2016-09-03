//=========================SUBMISSAO DO FORMULÁRIO============================

$( document ).ready(function() {
//EVENTO DE SUBMISSAO
$( "#myForm" ).submit(function(e) {
    e.preventDefault();
    if(validateForm()){
        console.log('cool');
        var answer = {
        catProf: $(e.target).find('[name=catProf]:checked').val(),
        posicionamento: $(e.target).find('[name=posicionamento]:checked').val(),
        preox: $(e.target).find('[name=preox]:checked').val(),
        sellick: $(e.target).find('[name=sellick]:checked').val(),
        whyNoSellick: getValues(),
        outraNoSellick:$(e.target).find('[name=outraNoSellick]').val(),
        vent:$(e.target).find('[name=vent]:checked').val(),
        relax:$(e.target).find('[name=relax]:checked').val(),
        fasc:$(e.target).find('[name=fasc]:checked').val(),
        suga:$(e.target).find('[name=suga]:checked').val(),
        prime:$(e.target).find('[name=prime]:checked').val(),
        }
    
    }
			
    else console.log('nope');
});
})






//DEFINIÇÃO FUNÇÕES: validateForm()
function validateForm(){
    var erro="Preencha os dados em falta..."
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
 //   var whyNoSellick={
   //     value:[],
     //   areaDestacar:$("#whyNoSellick"),
       // getValues: function(){
         //   $('input[type="checkbox"]').each(function() {
           // if ($(this).is(":checked")) {
            //whyNoSellick.value.push($(this).val());
                
            //}
    //}
    //)
    
      //  if(whyNoSellick.value.length===0){
        //    whyNoSellick.value="";   
        //}
           
    //}
    //}
    ;
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
    
    
    var perguntas=[catProf,posicionamento, preox,sellick,vent,relax]
    if (sellick.value==="n"){
        whyNoSellick.getValues();
        perguntas.push(whyNoSellick);
    }
    if(relax.value==="sux"){
        perguntas.push(fasc);
    }
    else if (relax.value==="roc"){
        perguntas.push(suga, prime);
    }
    else if(relax.value && (relax.value!="none")){
        perguntas.push(prime);
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
    if(perguntasRespondidas===perguntas.length){
        console.log("done")
        return true;
    }
    else{
        $("#error-message").show();
        $('html, body').animate({scrollTop: '0px'}, 300);
        return false;
        }
    
};

function getValues(){
    var values=[]
    $('input[type="checkbox"]').each(function() {
        if ($(this).is(":checked")) {
            values.push($(this).val());
        }
    })
    return values;
		}
		
