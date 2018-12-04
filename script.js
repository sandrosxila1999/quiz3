$(document).ready(function(){
$.ajax({
    type:'GET',
    url:'https://api.saministro.com/companies/177',
    success: function (data) {
            var result=0;
            $('#photo').append('<img src="'+data.cover_photo+'">');
            $('#title').append('<h1>'+data.name+'</h1>');
            if(data.is_verified==1){
            $('#title').append('<div id="verify_true"></div>');
            }
            else{
                $('#title').append('<div id="verify_false"></div>');
            }
            $('#description').append('<p>'+data.description+'</p>');
            console.log(data.reviews.length);
            var p=data.reviews.length;
            console.log(p);
            for(let i=0 ; i<p;i++){
                result = result + data.reviews[i].rating;
            }
            $('#title').append('<p>reviwes:'+result/p+'</p>');



            }
  });

  
})