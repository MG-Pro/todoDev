const nodemailer = require('nodemailer');
const emailParams = require('../../../params').email;

const sendEmail = (data) => {
  const output = `
<h3>Message</h3>
<p>${data.body}</p>
  `;

  let smtpTransport;
  try {
    smtpTransport = nodemailer.createTransport({
      host: emailParams.host,
      port: 465,
      secure: true,
      auth: {
        user: emailParams.user,
        pass: emailParams.pass
      }
    });
  } catch (e) {
    return console.log('Error: ' + e.name + ":" + e.message);
  }

  return new Promise((resolve, reject) => {
    smtpTransport.sendMail({
      from: 'sale1@sushi-woki.ru',
      to: data.email,
      subject: data.subject,
      text: data.body,
      html: output
    })
      .then(info => {
        resolve(info);
      })
      .catch(err => {
        reject(err);
      })
  });
};

module.exports = sendEmail;
