"use server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "samuel.letellier@supinfo.com",
        subject: "PORTFOLIO - Contact",
        text: `Name: ${formData.get("name")}\n
            Email: ${formData.get("email")}\n
            Subject: ${formData.get("subject")}\n
            Message: ${formData.get("message")} `,
    });

};