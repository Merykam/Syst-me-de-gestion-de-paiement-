const nodemailer = require("nodemailer");

const sendMail = async(email, token) => {
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "99b526ae614c16",
          pass: "b8acbb8dc65efc"
        }
      });
    
      const info = await transport.sendMail({
        from: '"AlloMedia 👻" <AllomMedia@gmail.com>', 
        to: email,
        subject: "Verify Email", 
        html: `<a href="/api/auth/activate/${token}">click here to verify</a>`, 
      });
}


module.exports = {sendMail}