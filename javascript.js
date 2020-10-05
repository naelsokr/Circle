/** change the Iamge */

 document.getElementById("angel").addEventListener("click",img_chang);
 document.getElementById("radius").addEventListener("click",img_chang1);
 document.getElementById("arc-legth").addEventListener("click",img_chang2);
 document.getElementById("chord").addEventListener("click",img_chang3);
 document.getElementById("srface-area").addEventListener("click",img_chang4);
 function img_chang(){
    document.getElementById("chang").src= "./image/angel.png" ;
}
function img_chang1(){
    document.getElementById("chang").src= "./image/r.png" ;
}
function img_chang2(){
    document.getElementById("chang").src= "./image/L.png" ;
}
function img_chang3(){
    document.getElementById("chang").src= "./image/C.png" ;
}
function img_chang4(){
    document.getElementById("chang").src= "./image/area.png" ;
}

/**
function radius_abrechnung(){

}**/
/**start angel , radius*/

var angel;  /**زاوية x */
var radius;  /**نصف القطر r*/
var arc_legth;  /** طول القوس L*/
var chord;  /**الوتر C */
var srface_area;  /**مساحة السطح a */
var r;


function arc_legth_abrechnung(){
    if(isNaN(angel) && (isNaN(arc_legth)) && isNaN(srface_area)){
        var Angel_function = angel_abrechnung();
        var x = ((2*Math.PI)*(Angel_function))/360;
        var L = radius*x;
    }
    else if(isNaN(angel) && isNaN(arc_legth) && isNaN(chord)){
        var Angel_function = angel_abrechnung();
        var L = ((radius * Angel_function *(2*(Math.PI)))/360);
    }
    
    else if(isNaN(radius) && isNaN(arc_legth) && isNaN(chord)){
        var radius_function = radius_abrechnung();
        var L = ((radius_function * angel *(2*(Math.PI)))/360);
    }
    else if(isNaN(srface_area) && isNaN(arc_legth) && isNaN(radius)){
        var radius_function = radius_abrechnung();
        var L = ((radius_function * angel *(2*(Math.PI)))/360);
    }
    else{
        var L = ((radius * angel *(2*(Math.PI)))/360) ;
    }
    document.getElementById("test").innerHTML= L;
return L;
}
function chord_abrechnung(){
    if  (isNaN(radius) && isNaN(angel)){
        var radius_function = radius_abrechnung();
        var Angel_function = angel_abrechnung();
        var x = ((Angel_function*Math.PI)/180);
        var C = 2*(radius_function*( Math.sin(0.5*(x))));
    }
    else if(isNaN(angel) && isNaN(arc_legth) && isNaN(chord)){
        var Angel_function = angel_abrechnung();
        var x = ((Angel_function*Math.PI)/180);
        var C = 2*(radius*( Math.sin(0.5*(x))));
    }
   else if(isNaN(angel) && isNaN(chord) && isNaN(srface_area)){
    var Angel_function = angel_abrechnung();
    var x = ((Angel_function*Math.PI)/180);
    var C = 2*(radius*( Math.sin(0.5*(x))));
   }   
    else if (isNaN(radius) && isNaN(chord) && isNaN(srface_area)){
        var radius_function = radius_abrechnung();
        var x = ((angel*Math.PI)/180);
        var C = 2*(radius_function*( Math.sin(0.5*(x))));
    }
    else if(isNaN(radius) && isNaN(arc_legth) && isNaN(chord)){
        var radius_function = radius_abrechnung();
        var x = ((angel*Math.PI)/180);
        var C = 2*(radius_function*( Math.sin(0.5*(x))));
    }
    else {
        var x = ((angel*Math.PI)/180);
        var C = 2*(radius*( Math.sin(0.5*(x))));
          }
    document.getElementById("test1").innerHTML= C;
return C;
}

function srface_area_abrechnung(){
    if (isNaN(angel) && isNaN(srface_area) && isNaN(chord)){
        var A =0.5 *(arc_legth)*radius
    }
    
    else if(isNaN(srface_area) && isNaN(arc_legth) && isNaN(radius)){
        var function_arc_legth_abrechnung = arc_legth_abrechnung();
        var radius_function = radius_abrechnung();
        var A =0.5 *(function_arc_legth_abrechnung)*radius_function;
    }
    else if(isNaN(angel) && isNaN(arc_legth) && isNaN(srface_area)){
        var Angel_function = angel_abrechnung();
        var x =((Math.PI)*(2)*(Angel_function))/(360);
        var A = ((0.5)*(radius*radius)*(x));
    }
    else if(isNaN(srface_area) && isNaN(radius) && isNaN(chord)) {
        var radius_function = radius_abrechnung();
        var A =0.5 *(arc_legth)*radius_function
    }
    else {
    var A =(0.50*(radius*radius)*((angel*(2*Math.PI))/360));
    }
    document.getElementById("test2").innerHTML= A;
return A;
}
/**start angel , radius*/
/**start arc-length , face_area*/
function radius_abrechnung(){
    if(isNaN(srface_area) && isNaN(chord) && isNaN(radius)){
    r = (arc_legth) / ((angel*(2*Math.PI))/360);
    }
    else if (isNaN(radius) && isNaN(arc_legth) && isNaN(chord)){
   var r = Math.sqrt((srface_area)/(0.5*((angel*(2*Math.PI))/360)));
    }
    else if(isNaN(srface_area) && isNaN(arc_legth) && isNaN(radius)){
        var x = ((angel*Math.PI)/180);
        r = (chord*0.5)/(Math.sin(0.5*(x)))
        }
    else{
    r = (srface_area)/(0.5*arc_legth);
    }
    document.getElementById("test3").innerHTML= r;
return r;
}
/**الراديان والزاوية*/
function angel_abrechnung(){
    if (isNaN(srface_area) && isNaN(angel) && isNaN(chord)){
        var serface_area_function = srface_area_abrechnung();
        var angel_radian = (serface_area_function)/(0.5*(radius*radius));
        var angel_degree =(angel_radian*360)/(2*Math.PI);
    }
    else if(isNaN(angel) && isNaN(arc_legth) && isNaN(chord)){
        var angel_radian = (srface_area)/(0.5*(radius*radius));
        var angel_degree =(angel_radian*360)/(2*Math.PI);
    }
    /** (r.sinx=0.5*chord)*/
    else if(isNaN(angel) && isNaN(arc_legth) && isNaN(srface_area)){
    var angel_sinn = ((0.5)*chord)/(radius);
    var d =(Math.asin(angel_sinn)*2);
    var angel_degree = (d*180)/(Math.PI)
    }
    else if (isNaN(angel) && isNaN(radius)) {
        var R =  radius_abrechnung();
        var angel_radian = (srface_area)/(0.5*(R*R));
        var angel_degree =(angel_radian*360)/(2*Math.PI);
        }
    else{
        var angel_degree= "NaN"
    }
    document.getElementById("test4").innerHTML =angel_degree;
return angel_degree;
}
/**end arc-length , face_area*/


function read_theInput(){
    angel =parseInt(document.getElementById("angel").value);
    radius =parseInt(document.getElementById("radius").value);
    arc_legth =parseInt(document.getElementById("arc-legth").value);
    chord =parseInt(document.getElementById("chord").value);
    srface_area =parseInt(document.getElementById("srface-area").value);
    if(isNaN(angel) && isNaN(radius) && isNaN(srface_area))
    {  alert("Es ist unmöglich, die Gleichung aus diesen beiden Eingaben zu lösen")}
     if (isNaN(angel) && isNaN(radius) && isNaN(arc_legth))
    {  alert("Es ist unmöglich, die Gleichung aus diesen beiden Eingaben zu lösen")}
    else{
    radius_abrechnung();
    angel_abrechnung();
    chord_abrechnung();
    arc_legth_abrechnung();    
    srface_area_abrechnung(); } 
}