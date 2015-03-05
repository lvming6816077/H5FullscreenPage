# H5FullscreenPage
## Doc
H5FullscreenPage.init(options);

options:(default)

<pre>
{
    'type' : 1,
    'pageShow' : function(page){},
    'pageHide' : function(page){},
    'useArrow' : true,
    'useAnimation' : true,
    'useMusic' : {
        'autoPlay' : true,
        'loopPlay' : true,
        'src' : 'http://mat1.gtimg.com/news/2015/love/FadeAway.mp3'
    }
 };
</pre>
####type
This value have 8 types[1-8], every type has the different scroll animation, you can change it for yourself.
####pageShow
After every page into the screen this function will run and give a param to this page dom.
####pageHide
After every page out the screen this function will run and give a param to this page dom.
####useArrow
Is use arrow or not.
####useAnimation
Is use part animation or not.
####useMusic
Is use music or not ,if not use put this value to null.

###Use css animaion

<pre>
<div class="part fadeIn" data-delay="1300"></div>
</pre>

If you want to use css animaion in your page. you can add a class with .part and choose what animation to use. data-delay let the animation delay some seconds to run.
animation list:[fadeIn,slideLeft,slideRight,slideUp,slideDown,rotateIn,zoomIn,heartBeat,rollInLeft,rollInRight]
