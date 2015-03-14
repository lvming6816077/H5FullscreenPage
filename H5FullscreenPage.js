(function(){
         var opt = {
            'type' : 1,
            'pageShow' : function(){},
            'pageHide' : function(){},
            'useParallax' : true,
            'useArrow' : true,
            'useAnimation' : true,
            'useMusic' : {
                'autoPlay' : true,
                'loopPlay' : true,
                'src' : 'http://mat1.gtimg.com/news/2015/love/FadeAway.mp3'
            }
         };
         window.H5FullscreenPage = {
            'init' : function(option){
                $.extend(opt,option);
                initDom(opt);
                initEvent(opt);
            }
         };
         
         var obj = {
             '1' : {
                 'upDrag' : function(percentage, event){
                     var translateY = 1 - 0.7*percentage;//位置系数，可以微调
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)'); //下一个item上移动
                 },
                 'downDrag' : function(percentage, event){
                     var translateY = -(0.7*percentage);
                     $(event.target).prev().css('-webkit-transform', 'translate3d(0,'+(translateY*100 - 100)+'%,0)');
                     $(event.target).css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)');//当前item下移动
                 },
                 'nextSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'translate3d(0,-100%,0)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,0,0)');
                 },
                 'prevSlide' : function(event){
                     $(event.target).prev().css('-webkit-transform', 'scale(1)'); 
                     $(event.target).css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 },
                 'showSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'scale(1)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 }
             },
             '2' : {
                 'upDrag' : function(percentage, event){
                     var scale = 1 - 0.2*percentage;//缩放系数，可以微调
                     var translateY = 1 - 0.7*percentage;//位置系数，可以微调
                     $(event.target).css('-webkit-transform', 'scale('+scale+')');//当前item缩小
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)'); //下一个item上移动
                 },
                 'downDrag' : function(percentage, event){
                     var scale = 0.8 - 0.2*percentage;
                     var translateY = -(0.7*percentage);
                     $(event.target).css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)');//当前item下移动
                     $(event.target).prev().css('-webkit-transform', 'scale('+scale+')');//前一个item放大
                 },
                 'nextSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'scale(.8)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,0,0)');
                 },
                 'prevSlide' : function(event){
                     $(event.target).prev().css('-webkit-transform', 'scale(1)'); 
                     $(event.target).css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 },
                 'showSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'scale(1)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 }
             },
             '3' : {
                 'upDrag' : function(percentage, event){
                     var translateY = 1 - 0.4*percentage;//位置系数，可以微调
                     $(event.target).css('-webkit-transform', 'translate3d(0,'+(translateY*100 - 100)+'%,0)');
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)'); //下一个item上移动
                 },
                 'downDrag' : function(percentage, event){
                     var translateY = -(0.4*percentage);
                     $(event.target).prev().css('-webkit-transform', 'translate3d(0,'+(translateY*100 - 100)+'%,0)');
                     $(event.target).css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)');//当前item下移动
                 },
                 'nextSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'translate3d(0,-100%,0)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,0,0)');
                 },
                 'prevSlide' : function(event){
                     $(event.target).prev().css('-webkit-transform', 'scale(1)'); 
                     $(event.target).css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 },
                 'showSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'scale(1)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 }
             },
             '4' : {
                 'upDrag' : function(percentage, event){
                     var translateY = 1 - 0.4*percentage;//位置系数，可以微调
                     $(event.target).css('-webkit-transform', 'translate3d(0,'+(translateY*100 - 100)+'%,0)');
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)'); //下一个item上移动
                 },
                 'downDrag' : function(percentage, event){
                     var translateY = -(0.4*percentage);
                     $(event.target).prev().css('-webkit-transform', 'translate3d(0,'+(translateY*100 - 100)+'%,0)');
                     $(event.target).css('-webkit-transform', 'translate3d(0,'+translateY*100+'%,0)');//当前item下移动
                 },
                 'nextSlide' : function(event){
                     $(event.target).addClass('zindex');
                     setTimeout(function(){
                         $(event.target).removeClass('no-animation').css('-webkit-transform', 'translate3d(0,-100%,0)');
                         $(event.target).next().removeClass('zindex').addClass('no-animation').css('-webkit-transform', 'translate3d(0,0,0)');
                     },100);
                     
                 },
                 'prevSlide' : function(event){
                     
                     $(event.target).prev().css('-webkit-transform', 'translate3d(0,0,0)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,100%,0)'); 
                     $(event.target).removeClass('zindex');
                 },
                 'showSlide' : function(event){
                     $(event.target).css('-webkit-transform', 'scale(1)'); 
                     $(event.target).next().css('-webkit-transform', 'translate3d(0,100%,0)'); 
                 }
             }
         };
         var dragThreshold = 0.15; //临界值
         var dragStart = null;//开始抓取标志位
         var percentage = 0;//拖动量的百分比
          
         function touchStart(event) {
            if (dragStart !== null) return;
             if (!$(event.target).hasClass('item')) {
                 $('.overlay').hide();
                 return;
             }
            if (event.touches) {
                event = event.touches[0];
            }
             //抓取时的所在位置
            dragStart = event.clientY;
          
             //分别关闭item的动画效果,动画效果只在松开抓取时出现
            $(event.target).addClass('no-animation');
            $(event.target).next().addClass('no-animation');
            $(event.target).prev().addClass('no-animation');

         }
          
         function touchMove (event) {
             //console.log(33);
            //防止ios拖动事件
            event.preventDefault();
            
            if (dragStart === null) return;
             if (!$(event.target).hasClass('item')) {
                 $('.overlay').hide();
                 return;
             }
            if (event.touches) {
                event = event.touches[0];
            }
             //得到抓取开始时于进行中的差值的百分比
            percentage = (dragStart - event.clientY) / window.screen.height;//
             
            if (percentage > 0) {
                // //向上拖动
                var scale = 1 - 0.5*percentage;//缩放系数，可以微调
                // var translateY = 1 - 0.4*percentage;//位置系数，可以微调
                // $(event.target).css('-webkit-transform', 'scale('+scale+')');//当前item缩小
                // $(event.target).next().css('-webkit-transform', 'translateY('+translateY*100+'%)'); //下一个item上移动
                 //$(event.target).css('opacity', ''+scale+'');//当前item缩小
                 obj[opt.type].upDrag(percentage, event);
                 
            } else if ($(event.target).prev()) {
                //向下拖动
                // var scale = 0.8 - 0.2*percentage;
                // var translateY = -(0.4*percentage);
                // $(event.target).css('-webkit-transform', 'translateY('+translateY*100+'%)');//当前item下移动
                // $(event.target).prev().css('-webkit-transform', 'scale('+scale+')');//前一个item放大
                 obj[opt.type].downDrag(percentage, event);
            }
            
         }
          
         function touchEnd (event) {
            //防止多次滚动，故增加一个覆盖层
            $('.overlay').show();
            dragStart = null;
             if (!$(event.target).hasClass('item')) {
                 $('.overlay').hide();
                 return;
             }
            $(event.target).removeClass('no-animation');
            $(event.target).next().removeClass('no-animation');
            $(event.target).prev().removeClass('no-animation');
            
            //抓取停止后，根据临界值做相应判断
            if (percentage >= dragThreshold) {
                nextSlide(event);
            } else if ( Math.abs(percentage) >= dragThreshold ) {
                prevSlide(event);
            } else {
                showSlide(event);
            }
             //重置percentage
            percentage = 0;

         }
         function swipeUp(event){
            if (!$(event.target).hasClass('item')) {
                return;
            }
             nextSlide(event);
             //$(event.target).css('-webkit-transform', 'translateY(-101%)'); 
             //$(event.target).next().css('-webkit-transform', 'translateY(0)'); 
         }
         function swipeDown(event){
            if (!$(event.target).hasClass('item')) {
                return;
            }
             prevSlide(event);
             //$(event.target).css('-webkit-transform', 'translateY(101%)'); 
             //$(event.target).prev().css('-webkit-transform', 'translateY(0)'); 
         }
         function nextSlide(event){
            //$(event.target).removeClass('parallax-item');
            //恢复到原样，或者展示下一item
            if ($(event.target).next().length) {
                $(event.target).attr('state','prev');
                $(event.target).next().attr('state','next');

                orderPart($(event.target).next());
                obj[opt.type].nextSlide(event);
            } else {
                obj[opt.type].showSlide(event);
            }
            
         }
         function prevSlide(event){
            //$(event.target).removeClass('parallax-item');
            if ($(event.target).prev().length) {
                $(event.target).attr('state','prev');
                $(event.target).prev().attr('state','next');
                obj[opt.type].prevSlide(event);
            } else {
                obj[opt.type].showSlide(event);
            }
            
         }
         function showSlide(event){
            //$(event.target).removeClass('parallax-item');
             obj[opt.type].showSlide(event);
         }
         function initDom(opt){
            $('body').addClass('H5FullscreenPage');
            if (opt.useAnimation) {
                var items = $('.item').slice(1,$('.item').length);
                items.find('.part').addClass('hide');
            }
            $('body').append('<div class="overlay"></div>');
            if (opt.useArrow) {
                $('.item').slice(0,$('.item').length-1).append('<span class="arrow"></span>');
            }
            if (opt.useMusic) {
                var autoplay = opt.useMusic.autoPlay ? 'autoplay="autoplay"' : '';
                var loopPlay = opt.useMusic.loopPlay ? 'loop="loop"' : '';
                var src = opt.useMusic.src;
                $('body').append('<span class="music play"><audio id="audio" src='+src+' '+autoplay+' '+loopPlay+'></audio></span>');
            }
         }
         function orderPart(dom){
            var parts = $(dom).find('.part');
            parts.forEach(function(item){
                var time = $(item).attr('data-delay') || 100;
                setTimeout(function(){
                    $(item).removeClass('hide');
                },time);
            });
         }
         function initEvent(opt){
            if (opt.useParallax) {

                var orginData = {x:0,y:0};
                window.addEventListener('deviceorientation',function(event){
                    var gamma = event.gamma;
                    var beta = event.beta;

                    var x = -gamma;
                    var y = -beta;
                    
                    if (Math.abs(Math.abs(x) - Math.abs(orginData.x)) < 0.1 || Math.abs(Math.abs(y) - Math.abs(orginData.y)) < 0.1) {
                        orginData.x = x;
                        orginData.y = y;
                        return;
                    } else {
                        orginData.x = x;
                        orginData.y = y;
                    }
                    
                    var halfWidth = window.innerWidth / 2;  
                    var halfHeight = window.innerHeight / 2;  
                 
                    
                    var max = 5;
                    var items = $('.parallax');
                    items.forEach(function(item){
                        var dx = (item.getBoundingClientRect().width/max)*(x / halfWidth);
                        var dy = (item.getBoundingClientRect().width/max)*(y / halfHeight);
                        
                        if ($(item).hasClass('item')) {
                            //$(item).addClass('parallax-item');
                            dx = -dx/1 + 50;
                            dy = -dy/1 + 50;
                            item.style['background-position'] = ''+dx+'% '+dy+'%';
                            //$(item).removeClass('parallax-item');
                        } else {
                            item.style['transform'] = item.style['-webkit-transform'] = 'translate3d('+dx+'px,'+dy+'px,0)'; 
                        }
                        
                        
                    });
                     
                   
                }, false);
            }
            $('.music').on('tap',function(){
                $(this).toggleClass('play');
                var audio = document.getElementById('audio');
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            });
            // 绑定事件
            $(document).on('touchmove', function(e){
                e.preventDefault();
            });
            if (opt.type > 4) {
                opt.type = opt.type - 4;
                $('.item').on({
                    'swipeUp': swipeUp,
                    'swipeDown': swipeDown
                });
            } else {
                $('.item').on({
                   'touchstart': touchStart,
                   'touchmove': touchMove,
                   'touchend': touchEnd,
                   'touchcancel': touchEnd
                });
            }
            
            $('.item').on('tap', function(){
                //覆盖层隐藏
                $('.overlay').hide();
            });
            $('.item').on('transitionend', function(event){
               //覆盖层隐藏
               $('.overlay').hide();
               //console.log($(event.target).attr('state'));
               if ($(event.target).attr('state') == 'next') {
                    opt.pageShow(event.target);
               } else {
                    opt.pageHide(event.target);
               }
               // opt.pageComplete(event.target);
               // debugger;
            });
            $('.overlay').on('tap', function(){
                //覆盖层隐藏
                $('.overlay').hide();
            });
         }
         
    })();