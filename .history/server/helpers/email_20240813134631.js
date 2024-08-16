const nodemailer=require('nodemailer');
const sendEmail=async options=>{
    const transport={
        // host:process.env.SMTP_HOST,
        // port:process.env.SMTP_PORT,
        // auth:{
        //     user:process.env.SMTP_USER,
        //     pass:process.env.SMTP_PASS
        // }
        service: 'gmail', // e.g., 'gmail'
         auth: {
            user: 'tharsikan650@gmail.com',
            pass: 'kcidvznokomcjejh',
        },
    };
    

    const transporter=nodemailer.createTransport(transport);

    const message={
        // from:`${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        from:"tharsikan650@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await transporter.sendMail(message)
}

module.exports=sendEmail;