const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
      to: email,
      from: 'mayleneski@gmail.com',
      subject: 'Welcome to the Task-Manager App',
      text: `Hi ${name}, thank you for signing up for the Task-Manager Application.  We hope you can keep track of all your to-do list items easier!`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
      to: email,
      from: 'mayleneski@gmail.com',
      subject: 'You successfully cancelled your Task-Manager account',
      text: `We're sorry to see you go! ${name}, please let us know if there is anything we could improve in the application to better suit your needs.`
  })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

