var name = "";
var team = "";
function submit()
{
    var nameInput = document.getElementById("name");
    name = nameInput.value;
    
    
    var login = document.getElementById("login");
    login.style.display = "none";
    
    team = document.querySelector('input[name="type"]:checked').value;
    
    document.getElementById("nameHTML").innerHTML = name;
    document.getElementById("typeHTML").innerHTML = type;

    document.getElementById("gameBox").style.display = "block";
}