class Notification {
    send() {
        console.log("General Send Function!");
    }
}

class Email1 extends Notification {
    send() {
        console.log("Sending Email!");
    }
}

class SMS extends Notification {
    send() {
        console.log("Sending SMS");
    }
}

class WhatsApp extends Notification {
}

const email = new Email1();
email.send();

const sms = new SMS();
sms.send();

const whts = new WhatsApp();
whts.send();