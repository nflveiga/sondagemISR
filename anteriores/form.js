

Template.form.events({	
	//=======================Pergunta da PRESSAO CRICODEIA=====================
	'change #sellick':function(e){
		console.log('changed');
		if($('input:radio[name="sellick"]:checked').val()=="n"){
		    $("#whyNoSellick").show();
		    $( "#outra" ).click(function() {
            console.log("click");
			if($('#outra').prop('checked')){
			    $('#outro').show();
			}
			else{
			    $('#outro').hide();
			    $('#outro').val("");
            
			}
		})

 }
	    else{
		$('#whyNoSellick').hide();
		$('input[name="whyNoSellick[]"]').attr('checked',false);
        $('#outro').val("");
        $('#outro').hide();

		}
	},
	//=======================Pergunta dos RELAXANTES==============================
	
	'change #relax':function(e){
		// Caso checked=SUCCINILCOLINA
		if($('input:radio[name="relax"]:checked').val()=="sux"){
            $("#escondesux").show();
        }
        else{
            $("#escondesux").hide();
            $('input[name=fasc]').attr('checked',false);  
        };
        // Caso checked=ROCURONIO
        if($('input:radio[name="relax"]:checked').val()=="roc"){
            $("#esconderoc").show();
        }
        else{
            $("#esconderoc").hide();
            $('input[name=suga]').attr('checked',false);  
        };
        // Caso checked= RM NÃO-DESPOLARIZANTE
        if($('input:radio[name="relax"]:checked').val()=="roc"
        ||$('input:radio[name="relax"]:checked').val()=="none"){
			console.log("nao desp");
			$("#escondeprime").show();
			}
		// Caso checked= SUX ou NENHUM
		else{
			$("#escondeprime").hide();
            $('input[name=prime]').attr('checked',false);
			}
		},
//=========================SUBMISSAO DO FORMULÁRIO============================

	'submit #myForm':function(e){
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
		console.log(answer);
		 Meteor.call('answerInsert', answer, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
	})
    }
			
		else console.log('nope');
 
		
	//DEFINIÇÃO DE FUNÇOES DO EVENTO SUBMIT	
	
	//validateForm()
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
    if(perguntasRespondidas===perguntas.length) return true;
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
		}
})
