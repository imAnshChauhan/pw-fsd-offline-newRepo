class NotificationInterface {
    send(message) {
        throw "Must be implemented";
    }
}

class EmailNotification extends NotificationInterface {
    send(message) {
        console.log("Email Sent: ", message);
    }
}

class SMSNotification extends NotificationInterface {
    send(message) {
        console.log("SMS sent: ", message);
    }
}

let email = new EmailNotification();
email.send("email message");

let sms = new SMSNotification();
sms.send("sms message");