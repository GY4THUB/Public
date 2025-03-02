function xox() {
    window.location.href = "others/xox.html";
}

function bmi() {
    window.location.href = "others/bmi.html";
}

function drum() {
    window.location.href = "others/drumKit.html";
}

function gotoFacebook() {
    window.location.href = "https://www.facebook.com/jhon.leorine.mancia.2025";
}

function sendEmail() {
            let email = "jhonleorinemancia@gmail.com";
            let subject = "Inquiry";
            let body = "Hello, I would like to contact you.";

            let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, "_blank");
        }

        function sendSMS() {
            let phoneNumber = "09557496227";
            let message = "Hello, I would like to contact you.";
            
            let smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            window.location.href = smsLink;
        }

