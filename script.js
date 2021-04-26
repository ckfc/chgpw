  



$(document).ready(function(){

$("#chgpw").click(function(){   


var t0018_chgpw = "https://script.google.com/macros/s/AKfycby2_Y7GrPBMao9yj3fDUnXrCjH0iJjUJlLn0M2g-mjNg8ZGpdf1GMuJsKymdmzQ2w48wg/exec"
$.ajax({
    url: t0018_chgpw,

    data: {
        "userid": $('#userid').val(),
        "olduserpw":$('#olduserpw').val(),
        "newuserpw":$('#newuserpw').val(),
    },
    success: function(response) {
	
    try {
        var obj = JSON.parse(response);
        for (var b in obj) {   //test     //["11m","02:00pm-03:00pm","rudy","0200  meeting room half hour"]
          
          if (b=='msg') {
			alert(obj[b])
          }

          if (b=='error') {
			alert(obj[b])
          }
          
		  
		  
         }


    } catch(e) {
        alert(e); // error in the above string (in this case, yes)!
    }

    },
    error: function(){alert("失敗！")}
  });


  });

//--------------------------------

//----------------------------------

})

