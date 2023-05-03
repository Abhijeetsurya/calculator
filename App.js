function add(){
    var a = 0, b = 0;
    a = form.ddd.value;
    b = a.charAt(a.length-1)
    if(b=='+' || b =='-' || b =='/' || b=='*'){
        form.ddd.value=a.substring(0, a.length-1);
        form.ddd.value+='+';
    }else{
        form.ddd.value+='+';
    }
}

function sub(){
    var a = 0, b = 0;
    a = form.ddd.value;
    b = a.charAt(a.length-1)
    if(b=='+' || b =='-' || b =='/' || b=='*'){
        form.ddd.value=a.substring(0, a.length-1);
        form.ddd.value+='-';
    }else{
        form.ddd.value+='-';
    }
}

function mul(){
    var a = 0, b = 0;
    a = form.ddd.value;
    b = a.charAt(a.length-1)
    if(b=='+' || b =='-' || b =='/' || b=='*'){
        form.ddd.value=a.substring(0, a.length-1);
        form.ddd.value+='*';
    }else{
        form.ddd.value+='*';
    }
}

function div(){
    var a = 0, b = 0;
    a = form.ddd.value;
    b = a.charAt(a.length-1)
    if(b=='+' || b =='-' || b =='/' || b=='*'){
        form.ddd.value=a.substring(0, a.length-1);
        form.ddd.value+='/';
    }else{
        form.ddd.value+='/';
    }
}