function sendMail() {
    const parms = {
        email : document.getElementById ("name") . value, 
        phone : document.getElementById ("phone") . value,
        message : document.getElementById ("message").value,
    }

    emailjs.send("service_sq3kzju","template_kw3q2a3",parms).then(alert("Email Sent!!"))
}