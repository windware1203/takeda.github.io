function getRandomInt(max) 
{
    
    return Math.floor(Math.random() * max);
}
function rot13()
{
    document.getElementById("rot13_output").value = document.getElementById("rot13_input").value.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}
function setup() {
  
  var e = document.getElementById("watchme");
  e.addEventListener("animationstart", listener, false);
  e.addEventListener("animationend", listener, false);
  e.addEventListener("animationiteration", listener, false);

  var e = document.getElementById("watchme");

}
function listener(e) {
  var l = document.createElement("li");
  switch(e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
function setlocation(location)
{
    window.location = location;
}

function cipher()
{
    let the_string = document.getElementById("cipher_input").value
    if(the_string =="")alert("Empty input!");
    else
    {
        let the_key = getRandomInt(98)+1;
        document.getElementById("key").innerHTML = the_key;

        let len = the_string.length;
        let the_cipher = "";
        let the_plain = "";
        for(let i = 0 ; i<len ;i++)
        {
            the_cipher += String.fromCharCode(the_string.charCodeAt(i) ^ the_key);
        }
        document.getElementById("plainShow").textContent  = the_string;
        document.getElementById("cipherShow").textContent  = the_cipher;
        document.getElementById("cipher_output").value = the_cipher;
    }
    
}

function quick(a,b,c)
{
	let ans = 1;   
	a %= c;   
	while(b!=0)
	{
		if(b & 1) ans=(ans * a) % c;   
		b >>= 1;    
		a=(a * a) % c;   
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
    let the_string = parseInt(document.getElementById("rsa_input").value,10);
    let the_cipher = 0;
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
        process.innerHTML  += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp; p = " + p + ", q = " + q +"&nbsp;&nbsp;<br><br></span>");//#BCB8B1
        process.innerHTML  += ("<span style='background-color: yellow;'> &nbsp;&nbsp;n = p * q </sapn>&nbsp;&nbsp;<br><br>"
        + "<span style='background-color: #00FFFF;'>&nbsp;&nbsp;"
        + n + " = " + p + " * " + q +"&nbsp;&nbsp;<br><br></span>");
        process.innerHTML += ("<span style='background-color: yellow;'>&nbsp;&nbsp;&phi; (n) = r = (p-1) * (q-1) </sapn>&nbsp;&nbsp;<br><br>" 
        + "<span style='background-color: #00FFFF;'>&nbsp;&nbsp;"
        + r + " = " + (p-1) + " * " + (q-1) +"&nbsp;&nbsp;<br><br></span>");
        process.innerHTML += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp;e = " + e +"&nbsp;&nbsp;<br><br></span>");
        process.innerHTML += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp;d = " + d +"&nbsp;&nbsp;<br><br></span>");
        the_cipher = quick(the_string,e,n);
        process.innerHTML += ("<span style='background-color: yellow;'>&nbsp;&nbsp;plain<sup>e</sup> (mod n) &equiv; cipher </sapn>&nbsp;&nbsp;<br><br>");
        process.innerHTML += ("<span style='background-color: #00FFFF;'>&nbsp;&nbsp;"+ the_string +"<sup>"+e+"</sup> (mod "+n+") &equiv; " + the_cipher + "</sapn>&nbsp;&nbsp;<br><br>");
        document.getElementById("rsa_output").value = the_cipher;
    }
}