function cMaker(name, value, exdays) {
    const day = new Date();
    day.setTime(day.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expired = "expires=" + day.toUTCString();
    document.cookie = name + "=" + value + ";" + expired + ";path=/";
}

function getCookie(nam) {
    let updated = nam + "=";
    let splitCookie = document.cookie.split(';');
    for(let i = 0; i < splitCookie.length; i++)
    {
        let crum = splitCookie[i];
        while (crum.charAt(0) == ' ')
        {
            crum = crum.substring(1);
        }
        if (crum.indexOf(updated) == 0)
        {
            return crum.substring(updated.length, crum.length);
        }
    }
    return "";
}

function cInspector() {
    let user = getCookie("username");
    if (user != "") {
        alert("Hello " + user + ", welcome back to the website!");
    } else {
        user = prompt("Please enter your name: ", "");
        if (user != "" && user != null) {
            cMaker("username", user, 365);
        }
    }
}