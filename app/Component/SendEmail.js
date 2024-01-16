"use server";
import {Resend} from "resend";
export const sendEmail = async (formData) => {
    try {
        let resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "samuel.letellier@supinfo.com",
            subject: "PORTFOLIO - Contact",
            text: `Name: ${formData.get("name")}\n
                Email: ${formData.get("email")}\n
                Subject: ${formData.get("subject")}\n
                Message: ${formData.get("message")} `,
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};