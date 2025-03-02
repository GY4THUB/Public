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
    window.location.href = "https://www.facebook.com/profile.php?id=100071201298122";
}

function sendEmail() {
            let email = "runinobalagtas51@gmail.com";
            let subject = "Inquiry";
            let body = "Hello Balagtas, I would like to contact you.";

            let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, "_blank");
        }

        function sendSMS() {
            let phoneNumber = "09656004126";
            let message = "Hello Balagtas, I would like to contact you.";
            
            let smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            window.location.href = smsLink;
        }

