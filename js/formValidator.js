
// let statusFirstname = document.querySelector(".statusMessage.firstName");
// let statusLastname = document.querySelector(".statusMessage.lastName");
// let statusEmail = document.querySelector(".statusMessage.email");
// let statusUsername = document.querySelector(".statusMessage.username");
// let statusPassword = document.querySelector(".statusMessage.password");
// let statusAdress = document.querySelector(".statusMessage.address");
let form = document.getElementsByTagName("form")[0];
let statusMessages = form.querySelectorAll(".statusMessage");
let inputs = form.querySelectorAll("input");

console.log("statusMessage");
form.addEventListener('submit', function (event) {

    event.preventDefault();
    status = true;
    inputs.forEach(function (input) {
        statusMessages.innerText == "";

        if (input.value == "") {
            statusMessages.forEach(function(statusMessage) {

                statusMessage.innerText = "skal udfylde!!";
                // status = false;
            })
        }

    });

});



statusMessages.forEach(function(message) {
    if (message == "") {
        form.addEventListener('submit', function(event){
            event.preventDefault();
            status = true
            statusMessage.innerText = "du skal udfylde nogen info";
            status = false;

            //  statusMessage.innerText = "du skal udfylde nogen info";
        });
    }
});

console.log(form);

