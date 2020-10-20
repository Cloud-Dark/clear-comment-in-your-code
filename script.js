function transcode() {
     var code = document.getElementById('code').value;
     var clear_comments= code.replace(/<!--(.*?)-->/g,'')
                             .replace(/\/\/.*/gm, '')
                             .replace(/\/\*(.|[\r\n])*?\*\//g, '');
     return clear_comments;
     
 }
 document.getElementById("trans").onclick = function(){
     document.getElementById('clear_comment').value=transcode();
 };