lerp =  function(a,b,u){
    return (1-u) * a + u * b;
}
fade = function(element, property ,start ,end , duration) {
    let interval = 110;
    let steps = duration/interval;
    let step_u = 1.0/steps;
    let u = 0.0;
    let theInterval = setInterval(function(){
         if (u >= 1.0) {
             clearInterval(theInterval)
         }
         let r = parseInt(lerp(start.r, end.r, u));
         let g = parseInt(lerp(start.g, end.g, u));
         let b = parseInt(lerp(start.b, end.b, u));
         let colourName = 'rgb('+r+','+g+','+b+')';
         el.style.setProperty(property, colourName);
         u += step_u;
    }, interval);
};

el = document.getElementById('fad');
property = 'color';
startColor = {r: 14, g: 122, b: 230};
endColor = {r: 255, g: 0, b: 43};
fade(el, 'color',endColor,startColor,1000);

setTimeout(function(){
    fade(el, 'color',endColor,startColor,1000);
}, 2000);