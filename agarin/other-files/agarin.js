function play1() {
    window.location.href = "other-files/xox.html"
}
function play2() {
    window.location.href = "other-files/bmi.html"
}
function play3() {
    window.location.href = "other-files/magicBall.html"
}
function play4() {
    window.location.href = "other-files/catch.html"
}

function contact1() {
    window.location.href = "https://www.facebook.com/share/1EnGBUR5Y8/";
}

function contact2() {
    let email = "maryjaneagarap01@gmail.com"; // Replace with your email
            let subject = "Inquiry"; // Replace with your subject
            let body = "Hello Jane Agarin, I would like to contact you."; // Replace with your message

            let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, "_blank");
}

function contact3() {
    let phoneNumber = "09480420581"; // Replace with your phone number
            let message = "Hello, I would like to contact you."; // Replace with your message
            
            let smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            window.location.href = smsLink;
}

