

$(document).ready(function(){
    $(".inicio").fadeIn(4000);

    
    

    //Animação para os itens da NavBar
    $(".nav-link").hover(function(){
       
         $(this).stop().animate({color:'white'},200); 

            $(this).children().stop().animate({color:'#72bcd4'},200);
            

    },function(){
       
        $(this).stop().animate({color:'#C0C0C0'},200);
            $(this).children().stop().animate({color:'#C0C0C0'},200);
         
    });

    //Animação para as redes sociais
    $("#social-media>a").hover(function(){
        $(this).stop().animate({color:'white',backgroundColor:"#72bcd4"});
        
            
    },function(){
        $(this).stop().animate({color:'#C0C0C0',backgroundColor:"#2b3547"});
    });
   

    $('#curriculo').on('click', function() {
        $('#overlay')
          .css({backgroundImage: `url(${this.src})`})
          .addClass('open')
          .one('click', function() { $(this).removeClass('open'); });
      });

      $(window).scroll(function(){
        var y = $(window).scrollTop(),
            x = $(".target").offset().top-200;
            if(y>x){
                $(".target").fadeIn(400);
            }
    });

});


