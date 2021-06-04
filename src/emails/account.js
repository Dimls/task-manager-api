const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from : 'mllsdim@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}.Let me know how you get along with the app.`
    })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from : 'mllsdim@gmail.com',
        subject: 'Goodbye.',
        text: `We are sorry to hear that you are leaving the app, ${name}.We hope that you will come back at some point.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}