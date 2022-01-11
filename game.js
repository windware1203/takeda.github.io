var name = "";
var pionts = 0;
var charArr = [];
var rankImg = ["img/0.png", "img/1.png", "img/2.png", "img/3.png", "img/4.png",
               "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png",
               "img/10.png", "img/11.png", "img/12.png", "img/13.png", "img/14.png",
               "img/15.png", "img/16.png", "img/17.png", "img/18.png", "img/19.png"];
var rank = 0;

function init()
{
    rePoint();
    fullCharArr();
    genRot13();
}
function fullCharArr()
{
    for(var i = 0 ; i<26 ;i++)
    {
        charArr[i] = String.fromCharCode(i+65);
        
    }
    
    for(var i = 26 ; i<52 ;i++)
    {
        charArr[i] = String.fromCharCode(i+71);
        
    }

}

function getRandomInt(max) 
{
    
    return Math.floor(Math.random() * max);
}

var rot13_q = "";
function genRot13()
{
    for(var i = 0 ; i<26 ;i++)
    {
        let x = getRandomInt(50);
        let y = getRandomInt(50);
        let temp = 0;
        
        temp = charArr[x];
        charArr[x] = charArr[y];
        charArr[y] = temp;
 
    }
    
    for(var i = 0 ; i<5 ;i++)
        rot13_q += charArr[i];


    document.getElementById("rot13_str").innerHTML = rot13_q;
}
function q2()
{
    let ref = document.getElementById("fb2");
    let button = document.getElementById("b2");
    (document.getElementById("q2_flag").value == "nanaCTF{dHJddgdf_j;d;;gdgfd}") ? (ref.innerHTML="O") : (ref.innerHTML="X") ;
    if((ref.innerHTML=="O"))
    {
        button.style.display = "none";
        pionts += 10;
        rePoint();
    }
        
}
function rot13()
{
    let ref = document.getElementById("fb1");
    let button = document.getElementById("b1");
    (document.getElementById("rot13_output").value == rot13_q.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})) ? (ref.innerHTML="O") : (ref.innerHTML="X") ;
    if((ref.innerHTML=="O"))
    {
        button.style.display = "none";
        pionts += 10;
        rePoint();
    }
}

function submit()
{
    var nameInput = document.getElementById("name");
    name = nameInput.value;
    
    if(name == "")alert("Please enter your name!");
    else
    {
        var login = document.getElementById("login");
        login.style.display = "none";
        document.getElementById("gameBox").style.display = "block";

        document.getElementById("nameHTML").innerHTML = "Hi, " + name;
    }
    
}

function rePoint()
{
    document.getElementById("score").innerHTML = pionts;
    rank = Math.floor(pionts/10);
    console.log(rank);
    document.getElementById("rank").innerHTML = rank;

    document.getElementById("rankImg").src = rankImg[rank];
}