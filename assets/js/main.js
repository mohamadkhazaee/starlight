$(document).ready(function(){

    //start of compare page
    $('.item-close').click(function(){
        $(this).parent().parent().remove();
    })
    //end of compare page


    //start ofhover add to card in main
    $('.remove-item').click(function(){
        $(this).parent().remove()
    })
    //end of hover add to card in main

        //start of owl item
$('.owl-item-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
$('.owl-item-slider .item a').click(function(){
    let itemImg = $(this).children()
   let itemImgSrc = itemImg.attr('src')
   $('.main-img img').attr('src' , itemImgSrc)
})

    $('.inc').click(function(){
        let count =parseInt($('.inp-count').val())
        count +=1;
        $('.inp-count').val(count)
    })
    $('.dec').click(function(){
        let count =parseInt($('.inp-count').val())
        count -=1;
        $('.inp-count').val(count)
    })
    $('.item-page-owl').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1100:{
                items:3
            }
        }
    })
//end of owl item
      //start of slider owl carousel
      $('.main-slider').owlCarousel({
        items:1,
        loop:true,
        center:true,
        dots:false,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

    $('.url').click(function(){
       $('.url').removeClass('active')
       $(this).addClass('active')
    })
    //end of slider owl carousel
    //start of res menu toggle
    $('.res-btn-toggle').click(function(){
        $('#megaMenu').toggleClass('mega-res-show');
        $(".res-menu-overlay").toggleClass('overlay-show')
    })
    $('.res-menu-overlay').click(function(){
        $('#megaMenu').toggleClass('mega-res-show');
        $(".res-menu-overlay").toggleClass('overlay-show')
    })
    $('.mega-1-toggle-btn').click(function(){
        $(this).next().slideToggle();
    })
    $('.row-title').click(function(){
        $(this).next().slideToggle();
    })
    $('.mega-2-toggle-btn').click(function(){
        $(this).next().slideToggle();
    })
    $('.mega-3-toggle-btn').click(function(){
        $(this).next().slideToggle();
    })
    $('.mega-3-uls ul .header').click(function(){
        $(this).nextAll().toggleClass('d-block')
    })
    //end of res menu toggle
  

    //start of related owl carousel
    $('.related-owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    //end of related owl carousel

    //start of multi-tab owl
    $('.multi-tab-owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1100:{
                items:3
            }
        }
    })
    //end of multi tab-owl

    //start of owl topics
    $('.owl-topics').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
    //end of owl topics

        //start of owl brands
        $('.owl-brands').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
        //end of owl brands

        //start of add login btns to side menu
            let accBtns = $('.account-btns').clone();
            accBtns.addClass('account-btns-res')
            $('.category-menu').prepend(accBtns)
        //end of add login btns to side menu

        
//start of open and close category shop page
$('#category-toggle-btn').click(function(){
    $(this).children().toggleClass('fa-minus')
    $(this).children().toggleClass('fa-plus')
    $('.category-ul ul').slideToggle()
})
//end of open and close category shop page

$('#range-toggle-btn').click(function(){
    $(this).children().toggleClass('fa-minus')
    $(this).children().toggleClass('fa-plus')
    $('.range-box').slideToggle()
})


//start of buy cart and wishlist
$('.table-row-del').click(function(){
    $(this).parent().parent().remove()
})
//end of buy cart and wishlist

})

//start of range price show
let rangeValue = $('#range').val() 
let rangeMax = $('#range').attr('max')
$('.range-selected').text(rangeValue)
$('.range-max').text(rangeMax)
function rangehandle(){
    let rangeValue = $('#range').val() 
$('.range-selected').text(rangeValue)

}
//end of range price show