let aScroll=$("#about").offset().top;
let tScroll=$("#team").offset().top;

$(window).scroll(()=>{
    let sscroll=$(window).scrollTop();
    if(sscroll+200>=aScroll && sscroll<tScroll){
        $(".md").fadeTo(1000,1)
        $("nav").css("backgroundColor","#200526")
        $("#btn-up").css("display","block")
        $("#btn-up i").css("display","block")
  
  
    }
    else if(sscroll+600>=tScroll){
        $(".sk").fadeTo(2000,1)
        $("nav").css("backgroundColor","pink")
        $("#btn-up").css("display","block")
        $("#btn-up i").css("display","block")
    }
    else{
        $("nav").css("backgroundColor","transparent") 
        $("#btn-up").css("display","none")
        $("#btn-up i").css("display","none")
   
    }
   
})

 $("#btn-up").click(()=>{
    $(window).scrollTop(0)
})
$(".nav-item a").click((e)=>{
    console.log(e.target);
    $(e.target).addClass("active-class").parent().siblings().find("a").removeClass('active-class');

})

