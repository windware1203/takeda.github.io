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
    for(var i = 0 ; i<len ;i++)
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
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
function rsa()
{
    let p = document.getElementById("rsaNum_p").value;
    let q = document.getElementById("rsaNum_q").value;
    if(!isPrime(p) || !isPrime(q))alert("Enter prime number please");
    else
    {
        let n = p * q;
        let r = (p - 1) * (q - 1);
        let e = getRandomInt(r - 1) + 1;
        let d = 1;
        while((d * e) % r != 1)
            d++;
    }
}