var name = "";
var pionts = 0;
var charArr = [];
var rankImg = ["img/0.png", "img/1.png", "img/2.png", "img/3.png", "img/4.png",
               "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png",
               "img/10.png", "img/11.png", "img/12.png", "img/13.png", "img/14.png",
               "img/15.png", "img/16.png", "img/17.png", "img/18.png", "img/19.png"];

var rankName = ["菜雞I", "菜雞II", "菜雞III", "平民I", "平民II",
               "平民III", "老鳥I", "老鳥II", "老鳥III", "一二三",
               "二二三", "三二三", "一枝獨秀", "兩枝獨秀", "三枝獨秀",
               "資科猩猩", "MP沒有力量", "你是神", "你是鬼", "你是武田"];

var rank = 0;


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
    
    for(var i = 0 ; i<30 ;i++)
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
var rot13_qq = "";
function genRot133()
{
    
    for(var i = 0 ; i<28 ;i++)
    {
        let x = getRandomInt(50);
        let y = getRandomInt(50);
        let temp = 0;
        
        temp = charArr[x+1];
        charArr[x+1] = charArr[y];
        charArr[y] = temp;
 
    }
    
    for(var i = 0 ; i<5 ;i++)
        rot13_qq += charArr[i];


    document.getElementById("rot13_str_11").innerHTML = rot13_qq;
}

var rot13_qqq = "";
function genRot1333()
{
    
    for(var i = 0 ; i<27 ;i++)
    {
        let x = getRandomInt(50);
        let y = getRandomInt(50);
        let temp = 0;
        
        temp = charArr[x];
        charArr[x] = charArr[y];
        charArr[y] = temp;
 
    }
    
    for(var i = 0 ; i<5 ;i++)
        rot13_qqq += charArr[i];


    document.getElementById("rot13_str_111").innerHTML = rot13_qqq;
}
var cmt_q111 = 0;
function rot13_111()
{
    let ref = document.getElementById("fb111");
    let button = document.getElementById("b111");
    (document.getElementById("rot13_output_111").value == rot13_qqq.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})) ? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (17-cmt_q111);
        pionts += get_pionts;
        alert("get "+get_pionts + " points !");
        rePoint();
    }else cmt_q111++;
    document.getElementById("error111").innerHTML = cmt_q111;
}
var cmt_q2 = 0;
function q2()
{
    let bd = "ananPGS{qUWqqtqs_w;q;;tqtsq}";
    let ans =  bd.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    let ref = document.getElementById("fb2");
    let input = document.getElementById("q2_flag").value;
    let button = document.getElementById("b2");
    (input == ans)? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (15-cmt_q2);
        pionts += get_pionts;
        alert("get "+get_pionts + " points !");
        
        rePoint();
    }else cmt_q2++;
     document.getElementById("error2").innerHTML = cmt_q2;   
}
var cmt_q1 = 0;
function rot13()
{
    let ref = document.getElementById("fb1");
    let button = document.getElementById("b1");
    (document.getElementById("rot13_output").value == rot13_q.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})) ? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (10-cmt_q1);
        pionts += get_pionts;
        alert("get "+get_pionts + " points !");
        
        rePoint();
    }else cmt_q1++;
    document.getElementById("error1").innerHTML = cmt_q1;
}
var cmt_q11 = 0;
function rot13_11()
{
    let ref = document.getElementById("fb11");
    let button = document.getElementById("b11");
    (document.getElementById("rot13_output_11").value == rot13_qq.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})) ? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (12-cmt_q11);
        pionts += get_pionts;
        alert("get "+get_pionts + " points !");
        
        rePoint();
    }else cmt_q11++;
    document.getElementById("error11").innerHTML = cmt_q11;
}
/*
    document.getElementById("rot13_output").value = document.getElementById("rot13_input").value.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});*/
var cmt_q3 = 0;
function q3()
{
    let bd = "ananPGS{c33xno00_1_f33_h_qrnqorrs}";
    let ans =  bd.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    let ref = document.getElementById("fb3");
    let input = document.getElementById("q3_flag").value;
    let button = document.getElementById("b3");
    (input == ans)? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (23-cmt_q3);
        pionts += get_pionts;
        alert("get "+get_pionts + " points !");
        
        rePoint();
    }else cmt_q3++;
    document.getElementById("error3").innerHTML = cmt_q3;
}
var cmt_q4 = 0;
function q4()
{
    let bd = "ananPGS{8mCLLwccCb_18sNew05rqZL}";
    let ans =  bd.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    let ref = document.getElementById("fb4");
    let input = document.getElementById("q4_flag").value;
    let button = document.getElementById("b4");
    (input == ans)? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (30-cmt_q4);
        pionts += get_pionts;
        alert("get "+get_pionts + " points !");
        
        rePoint();
    }
    else cmt_q4++;
    document.getElementById("error4").innerHTML = cmt_q4;
}
var cmt_p5 = 0;
function p5()
{
    
    let ans =  parseInt(hexSTring,16);
    let ref = document.getElementById("fb-p5");
    let input = document.getElementById("p5_flag").value;
    let button = document.getElementById("b-p5");
    (input == ans)? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (25-(cmt_p5*cmt_p5));
        pionts += get_pionts;
        alert("get " +get_pionts + " points !");
        
        rePoint();
    }
    else cmt_p5++;
    document.getElementById("error-p5").innerHTML = cmt_p5;
}
var cmt_p55 = 0;
function p55()
{
    let ans =  dec_hex; 
    let ref = document.getElementById("fb-p55");
    let input = document.getElementById("p55_flag").value;
    let button = document.getElementById("b-p55");
    (input == ans)? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (25 - (cmt_p55*cmt_p55));
        pionts += get_pionts;
        alert("get " +get_pionts + " points !");
        
        rePoint();
    }
    else cmt_p55++;
    document.getElementById("error-p55").innerHTML = cmt_p55;
}
var cmt_robot = 0;
function robot()
{
    let bd = "ananPGS{fEV_iweEWVcbf1*-Zbs}";
    let ans =  bd.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    let ref = document.getElementById("fb-robot");
    let input = document.getElementById("robot_flag").value;
    let button = document.getElementById("b-robot");
    (input == ans)? (ref.innerHTML="O") : (ref.innerHTML="<img src = img/incorrect.png>") ;
    if(ref.innerHTML=="O")
    {
        ref.innerHTML = "<img src = img/correct.png>";
        button.style.display = "none";
        let get_pionts = (25-(cmt_robot*2));
        pionts += get_pionts;
        alert("get " +get_pionts + " points !");
        
        rePoint();
    }
    else cmt_robot++;
    document.getElementById("error-robot").innerHTML = cmt_robot;
}
var hexSTring = "";
function hex()
{
    var a = getRandomInt(1000).toString(16);
    hexSTring = a;
    document.getElementById("hex").innerHTML = a;
}
var decSTring = "";
var dec_hex = "";
function dec()
{
    var a = getRandomInt(1000);
    decSTring = a;
    dec_hex = a.toString(16);
    document.getElementById("dec").innerHTML = a;
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
function init()
{
    rePoint();
    fullCharArr();
    genRot13();
    hex();
    dec();
    genRot133();
    genRot1333();
    document.getElementById("error1").innerHTML = cmt_q1;
    document.getElementById("error11").innerHTML = cmt_q11;
    document.getElementById("error111").innerHTML = cmt_q111;
    document.getElementById("error2").innerHTML = cmt_q2;
    document.getElementById("error3").innerHTML = cmt_q3;
    document.getElementById("error4").innerHTML = cmt_q4;
    document.getElementById("error-p5").innerHTML = cmt_p5;
    document.getElementById("error-p55").innerHTML = cmt_p55;
    document.getElementById("error-robot").innerHTML = cmt_robot;
}
function rePoint()
{
    document.getElementById("score").innerHTML = pionts;
    rank = Math.floor(pionts/10);
    if(rank > 19) rank=19;
    document.getElementById("rank").innerHTML = rank;
    document.getElementById("rankName").innerHTML = rankName[rank];
    document.getElementById("rankImg").src = rankImg[rank];
}
