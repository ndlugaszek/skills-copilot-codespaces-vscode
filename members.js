function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/skills/' + member + '/' + skill, true);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Member " + member + " has been added to skill " + skill);
        } else {
            console.log("Error " + xhr.status);
        }
    }
}