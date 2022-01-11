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
    let the_key = getRandomInt(98)+1;
    document.getElementById("key").innerHTML = the_key;
    let the_string = document.getElementById("cipher_input").value
    let len = the_string.length;
    let the_cipher = "";
    let the_plain = "";
    for(let i = 0 ; i<len ;i++)
    {
        the_cipher += String.fromCharCode(the_string.charCodeAt(i) ^ the_key);
    }
    document.getElementById("plainShow").innerHTML = the_string;
    document.getElementById("cipherShow").innerHTML = the_cipher;
    document.getElementById("cipher_output").value = the_cipher;
}

function quick(a,b,c)
{
	let ans=1;   
	a=a%c;   
	while(b!=0)
	{
		if(b&1) ans=(ans*a)%c;   
		b>>=1;    
		a=(a*a)%c;   
	}
	return ans;
}
function isPrime(num) 
{
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
function rsa()
{
    let p = document.getElementById("rsaNum_p").value;
    let q = document.getElementById("rsaNum_q").value;
    let process = document.getElementById("rsa_process");
    process.innerHTML = "";
    if(p == "" || q == "")alert("Enter numbers please!");
    else if(!isPrime(p) || !isPrime(q))alert("Enter prime numbers( > 0) please");
    else
    {
        let n = p * q;
        let r = (p - 1) * (q - 1);
        let e = r-1;
        var d = 0;
        while(true)
        {
            if(((d * e) % r == 1) && (e != d))break;
            d++;
        }
        process.innerHTML += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp; p = " + p + ", q = " + q +"&nbsp;&nbsp;<br><br></span>");//#BCB8B1
        process.innerHTML += ("<span style='background-color: yellow;'> &nbsp;&nbsp;n = p * q </sapn>&nbsp;&nbsp;<br><br>"
        + "<span style='background-color: #00FFFF;'>&nbsp;&nbsp;"
        + n + " = " + p + " * " + q +"&nbsp;&nbsp;<br><br></span>");
        process.innerHTML += ("<span style='background-color: yellow;'>&nbsp;&nbsp;&phi; (n) = r = (p-1) * (q-1) </sapn>&nbsp;&nbsp;<br><br>" 
        + "<span style='background-color: #00FFFF;'>&nbsp;&nbsp;"
        + r + " = " + (p-1) + " * " + (q-1) +"&nbsp;&nbsp;<br><br></span>");
        process.innerHTML += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp;e = " + e +"&nbsp;&nbsp;<br><br></span>");
        process.innerHTML += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp;d = " + d +"&nbsp;&nbsp;<br><br></span>");
    }
}