/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);

/* Special Header */
function getScrollTop(){
    return  scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
}

function $(id){
    return document.getElementById(id);
}

window.onscroll = function(){
    if(getScrollTop() <= 1){
        var changeA = $('header');
        var changeB = $('header-change');
        changeA.style.backgroundColor = 'transparent';
        changeB.innerHTML = '';
    }else{
        var changeA = $('header');
        var changeB = $('header-change');
        changeA.style.backgroundColor = '#fff';
        changeB.innerHTML = '<style>.navbar-default .navbar-nav>li>a{color: #333 !important;} .navbar-default{box-shadow: rgba(231, 233, 222, 0.45) 0px 2px 20px;}</style>';
    }
}
/* End of Special Header */