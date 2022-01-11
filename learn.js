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
    if(!isPrime(p) || !isPrime(q))alert("Enter prime numbers( > 0) please");
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
        process.innerHTML += ("p = " + p + ", q = " + q +"<br>");//#BCB8B1
        process.innerHTML += ("<span style='background-color: yellow;'> n = p * q </sapn><br>"
        + "<span style='background-color: #406060;'>"
        + n + " = " + p + " * " + q +"<br></span>");
        process.innerHTML += ("<span style='background-color: yellow;'>r = (p-1) * (q-1) </sapn><br>" 
        + "<span style='background-color: #406060;'>"
        + r + " = " + (p-1) + " * " + (q-1) +"<br></span>");
        process.innerHTML += ("<span style='background-color: #406060;'>e = " + e +"<br></span>");
        process.innerHTML += ("<span style='background-color: #406060;'>d = " + d +"<br></span>");
    }
}