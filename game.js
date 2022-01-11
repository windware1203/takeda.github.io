var name = "";
var pionts = 0;
var charArr = [];


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

function rot13()
{
    let ref = document.getElementById("fb1");
    (document.getElementById("rot13_output").value == rot13_q.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})) ? (ref.innerHTML="O") : (ref.innerHTML="X") ;
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
        document.getElementById("gameBox").style.display = "inline";

        document.getElementById("nameHTML").innerHTML = "Hi, " + name;
    }
    
}

function rePoint()
{
    document.getElementById("score").innerHTML = pionts;
}