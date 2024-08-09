var arr_hinh=[
    "./image/banner0.png",
    "./image/banner1.png",
    "./image/banner2.png",
]
var index = 0;

function next(){
    index++;
    if(index>=arr_hinh.length) index=0;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];

    if(index==0)
    {
        var id=document.getElementById("dots0")
        id.style.color="blue"
        var id1=document.getElementById("dots1")
        id1.style.color="white"
        var id2=document.getElementById("dots2")
        id2.style.color="white"
    }
    else if(index==1)
    {
        var id=document.getElementById("dots1")
        id.style.color="blue"
        var id1=document.getElementById("dots0")
        id1.style.color="white"
        var id2=document.getElementById("dots2")
        id2.style.color="white"
    }
    else if(index==2)
    {
        var id=document.getElementById("dots2")
        id.style.color="blue"
        var id1=document.getElementById("dots1")
        id1.style.color="white"
        var id2=document.getElementById("dots0")
        id2.style.color="white"
    }
    
}

function prev(){
    index--;
    if(index<0) index=arr_hinh.length-1;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];

    if(index==0)
    {
        var id=document.getElementById("dots0")
        id.style.color="blue"
        var id1=document.getElementById("dots1")
        id1.style.color="white"
        var id2=document.getElementById("dots2")
        id2.style.color="white"
    }
    else if(index==1)
    {
        var id=document.getElementById("dots1")
        id.style.color="blue"
        var id1=document.getElementById("dots0")
        id1.style.color="white"
        var id2=document.getElementById("dots2")
        id2.style.color="white"
    }
    else if(index==2)
    {
        var id=document.getElementById("dots2")
        id.style.color="blue"
        var id1=document.getElementById("dots1")
        id1.style.color="white"
        var id2=document.getElementById("dots0")
        id2.style.color="white"
    }
}

function dots0(){
    index=0;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];

    if(index==0)
    {
        var id=document.getElementById("dots0")
        id.style.color="blue"
        var id1=document.getElementById("dots1")
        id1.style.color="white"
        var id2=document.getElementById("dots2")
        id2.style.color="white"
    }
}

function dots1(){
    index=1;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];
    if(index==1)
    {
        var id=document.getElementById("dots1")
        id.style.color="blue"
        var id1=document.getElementById("dots0")
        id1.style.color="white"
        var id2=document.getElementById("dots2")
        id2.style.color="white"
    }
}

function dots2(){
    index=2;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];
  if(index==2)
    {
        var id=document.getElementById("dots2")
        id.style.color="blue"
        var id1=document.getElementById("dots1")
        id1.style.color="white"
        var id2=document.getElementById("dots0")
        id2.style.color="white"
    }
}

setInterval("next()", 8000);



