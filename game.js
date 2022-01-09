var name = "";
function submit()
{
    var nameInput = document.getElementById("name");
    name = nameInput.value;
    
    if(name == "")alert("Please enter your name!");
    else
    {
        var login = document.getElementById("login");
        login.style.display = "none";
        document.getElementById("gameBox").style.visibility = "visible";

        document.getElementById("nameHTML").innerHTML = "Hi, " + name;
    }
    
}