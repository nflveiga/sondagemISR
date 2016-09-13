$( document ).ready(function() {
//BS TOOLTIP INIT
   $('[data-toggle="tooltip"]').tooltip(); 
//--------------------------------EVENTOS-----------------------------------------------------------

//WHYNOSELLICK SHOW
$( '#sellick' ).change(function() {
   if($('input:radio[name="sellick"]:checked').val()=='n'){
        $('#whyNoSellick').show();
   }
   else{
       $('#whyNoSellick').hide();
      $( '.whyNoSellick' ).prop( 'checked', false );


}
});

//ANOS DE XP
$( '#catProf' ).change(function() {
  if($('input:radio[name="catProf"]:checked').val()=='especialista'){
    $('#anosXpDiv').show();
  }
  else{
    $('#anosXpDiv').hide();
    $("#anosXpDiv option[value='']").prop('selected', true);
    $("#anosXpDiv option[value='']").prop('disabled', true);
  }
})


//RELAXANTES - SUCCINILCOLINA - FASCICULAÇÕES SHOW
$( '#relax' ).change(function() {
    if($('input:radio[name="relax"]:checked').val()=='sux'){
        $('#escondesux').show();
    }
    else{
        $('#escondesux').hide();
        $('.fasc').prop('checked',false);
    };


//RELAXANTES - ROCURONIO - SUGAMMADEX SHOW
    if($('input:radio[name="relax"]:checked').val()=='roc'){
        $('#esconderoc').show();
    }
    else{
        $('#esconderoc').hide();
        $('.suga').prop('checked',false);
        };


//RELAXANTES - OUTROS

    if($('input:radio[name="relax"]:checked').val()=="roc"
    ||$('input:radio[name="relax"]:checked').val()=="other"){
        $("#escondeprime").show();
			}
		// Caso checked= SUX ou NENHUM
    else{
        $("#escondeprime").hide();
        $('.prime').prop('checked',false);
			}

})

//MODAL do email -> campos em branco quando se esconde
$('#mail-modal').on('hidden.bs.modal', function (e) {
  $(this)
    .find("input,textarea")
       .val('')
       .end();
})



//MOSTRAR LOADING
window.loading=function loading(){
  $("#loading").show();
  $("#mailForm").hide();
}


})
