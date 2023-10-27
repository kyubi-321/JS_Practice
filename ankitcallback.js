// callback practice

function loadScript(src , callback){
    var script = document.createElement("script");
    script.src = src;

    script.onload = function(){
        console.log("script loaded with SRC :" , script);
        callback(src);
    }

    document.body.appendChild(script);

}


function helo(src){
    alert("hello there i am hello"+src);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" , helo)