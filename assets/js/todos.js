$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
	
    /* this is old code used for same functionality
    if li is grey
    if($(this).css("color")==="rgb(128, 128, 128)"){
        //turn it black
        $(this).css("color","black");
        $(this).css({
	       color:"black",
	        textDecoration: "none",
                    });

    }
    //else 
    else{
    	  //turn it grey
    	$(this).css({
	       color:"gray",
	        textDecoration: "line-through",
                    });
        } 
 	*/
});

//click on X to delete a todo 

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
           $(this).remove();
	});
	event.stopPropagation();
});


//creating new Todos

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//creating a new todo
     var todoText = $(this).val();
      $(this).val("");
     //create a new li and add to ul
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> "  + todoText + "</li>");
	}
});