function getRandomInt(max) 
{
    
    return Math.floor(Math.random() * max);
}
function rot13()
{
    document.getElementById("rot13_output").value = document.getElementById("rot13_input").value.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}
function cipher()
{
    let the_key = (getRandomInt(Date.parse('2020-10-10'))%69)+1;
    document.getElementById("key").innerHTML = the_key;
    let the_string = document.getElementById("cipher_input").value
    let len = the_string.length;
    let the_cipher = "";
    let the_plain = "";
    for(var i = 0 ; i<len ;i++)
    {
        the_cipher += String.fromCharCode(the_string.charCodeAt(i) ^ the_key);
    }
    
    document.getElementById("cipher_output").value = the_cipher;
}