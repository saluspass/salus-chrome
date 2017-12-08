function isAccount(id) {
    id = id.toLowerCase();
    return id.includes("username") || id.includes("email");
}

function replacePassword(username, password){
    var inputs = document.getElementsByTagName('input');
    for (var i = 0, l = inputs.length; i < l; i++) {
        if(inputs[i].type == "password") {
            inputs[i].value = password;
        }
        else if((inputs[i].type == "text" || inputs[i].type == "email") && isAccount(inputs[i].id)) {
            inputs[i].value = username;
        }
    }
}

var getUrl = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};

var tabURL = window.location.href;
console.log(getUrl(tabURL));

replacePassword("username", "password");