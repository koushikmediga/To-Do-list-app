$("li").click(function(){
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

$("span").click(function(event){
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

     //create a new li and add to ul
     $("ul").append("<li>abab</li>");
	}
});