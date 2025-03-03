function project1() {
    window.location.href = "others/xox.html";
}

function project2() {
    window.location.href = "others/drumkit.html";
}

function project3() {
    window.location.href = "others/bmi.html";
}

function facebook() {
    window.location.href = "https://www.facebook.com/share/19pFHp4eAM/";
}

function mail() {
    let email = "allanyozephl@gmail.com"; // Replace with your email
            let subject = "Inquiry"; // Replace with your subject
            let body = "Hello, I would like to contact you."; // Replace with your message

            let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, "_blank");
}

function phone() {
    let phoneNumber = "09656049973"; // Replace with your phone number
            let message = "Hello Lacanilao!, I would like to contact you."; // Replace with your message
            
            let smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            window.location.href = smsLink;
}