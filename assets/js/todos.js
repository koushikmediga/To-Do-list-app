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