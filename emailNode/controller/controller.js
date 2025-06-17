import nodemailer from "nodemailer"

export const sendMail = async (req, res) => {
    // let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'eldora.flatley@ethereal.email',
            pass: 'uJsvyE5EHw6y3FAgBm'
        }
    });

    // const info =await transporter.sendMail(mailOptions,callback)

    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, shubootera98146@gmail.com baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      
    console.log("Sending mail...")
    console.log("Message sent : %s",info.messageId)
    res.json(info)

} 