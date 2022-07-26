const dspspd = searchParam.get('dspspd') || 2
const spd = searchParam.get('spd') || 0.05
TweenMax.staggerFrom('.snip1579', parseFloat(dspspd) ,{
    y: 100,
    ease: Back.easeOut,
    scale: 0.2,
    opacity: 0
}, parseFloat(spd))

$('.snip1579').hover(function() {
    // TweenMax.to($(this).find('img'),0.1,{
    //     autoAlpha:1,ease:Linear.easeNone
    // })
    TweenMax.to($(this).find('figcaption h4'),0.2,{
        x:-200,opacity:0,ease:Linear.easeNone
    })
    TweenMax.to($(this).find('figcaption h5'),0.2,{
        x:200,opacity:0,ease:Linear.easeNone
    })
}, function() {
    TweenMax.to($(this).find('figcaption h5'),0.2,{
        x:0,opacity:1,ease:Back.easeOut
    })
    TweenMax.to($(this).find('figcaption h4'),0.2,{
        x:0,opacity:1,ease:Back.easeOut
    })
    // TweenMax.to($(this).find('img'),0.1,{
    //     autoAlpha:0.3,ease:Back.easeOut
    // })
})