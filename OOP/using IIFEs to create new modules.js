//IIEFs can be used to group related fucntinality together
//for example

/*we can group 
mixins together*/

// given two mixins

function glideMixin(obj){
    obj.glide=function(){
        console.log("Gliding on water");
    }
}

function flyMixin(obj){
    obj.fly=function(){
        console.log("I am flying");
    }
}


//we can group these in one module 

let mixinModule=(function(){
    return {
        glideMixin:function(obj){
            obj.glide=function (){
                console.log("I am gliding");
            }
        },
        flyMixin:function(obj){
            obj.fly=function(){
                console.log("I am flying");
            }
        }
    }
})();

/// the two mixins have all been wrapped in the mixinModule as shown above.