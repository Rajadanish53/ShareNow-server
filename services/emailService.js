const nodemailer = require("nodemailer");
async function sendMail({res, from, to, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    // host:process.env.SMTP_HOST,
    // port:process.env.SMTP_PORT,
    // secure:false,
    // auth:{
    //     user:process.env.MAIL_USER,
    //     pass:process.env.MAIL_PASS
    // }
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user:process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    
  });
  let info = await transporter.sendMail({
    from: `ShareNow() <${from}>`,
    to,
    subject,
    text,
    html,
  },(err,info)=>{
    console.log("inside callback")
      if(err){
        console.log(err.message)
          return res.status(422).json({error:"Something went wrong"})
      }
      console.log(info)
      return res.json({success:`Email sented sucessfully to ${info.accepted[0]}`})
  });
  
}
module.exports = sendMail;
