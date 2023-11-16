"use server"

import { ValidationSchema } from "../../components/contact/FormInput";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import ReceivedEmail from "./emails/EmailReceived";
import ConfirmationEmail from "./emails/EmailConfirmation";


export async function emailHandler(data:ValidationSchema) {
    // perhaps save some of the data to a database ? just in case we want to contact them directly
    const ownerAddress = process.env.GOOGLE_GMAIL_ACCOUNT!;
    // this transport the email from the website to the client to confirm the message is received 
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: ownerAddress,
            pass: process.env.GOOGLE_SECRET_PASS_KEY
        }
    });

    // this render the email to an html format that we just created before 
    const emailHtmlUser = render(
        <ConfirmationEmail
        userFirstName={data.firstName}
        emailSubject={data.emailSubject.label}
        purposeOfEmail={data.purposeOfEmail != undefined? data.purposeOfEmail!:"No Purpose"}
    />);

    const emailHtmlOwner = render(
        <ReceivedEmail
        userFirstName={data.firstName}
        userLastName={data.lastName}
        phoneNumber={data.phoneNumber}
        email={data.email}
        emailMessage={data.emailMessage}
        emailSubject={data.emailSubject.label}
        purposeOfEmail={data.purposeOfEmail != undefined? data.purposeOfEmail! : "No Purpose"}
    />)
    
    const toUserOptions = {
        from:{
            name: "Fabio Almer",
            address: ownerAddress
        },
        to: data.email,
        subject: `${data.firstName + " " + data.lastName} - ${data.emailSubject.label}`,
        html: emailHtmlUser,
      };


      const toOwnerOptions = { // send email to ourselves with the other template
        from:{
            name: "Personal Site",
            address: ownerAddress
        },
        to: ownerAddress,
        subject: `${data.firstName + " " + data.lastName} - ${data.emailSubject.label}`,
        html: emailHtmlOwner,
      };

    transporter.sendMail(toUserOptions,(error,result)=> {
        if (error) {
            console.error("Error Sending Email:",error)
        } else {
            console.log("Email to user has been sent:",result.response)
        }
    });

    transporter.sendMail(toOwnerOptions,(error,result)=> {
        if (error) {
            console.error("Error when send email to owner address:", error )
        } else {
            console.log("Email to owner address has been sent:", result.response)
        }
    })

    // this transport the email from the website to use with the information we need
}


