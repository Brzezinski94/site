function sendEmail(){
    Email.send({
        HOST:"smtp.gmail.com",
        Username: "himars1994@gmail.com",
        password: "bqkqrjrgtwtvtyat",
        To:"himars1994@gmail.com",
        From :document.getElementById("email").value,
        Subject:"New Contact Form Enquiry",
        Body:"And this is the body"
    }).then(
        message =>alert(message)
    );  
}