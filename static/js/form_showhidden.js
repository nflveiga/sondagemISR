$( document ).ready(function() {

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

})

