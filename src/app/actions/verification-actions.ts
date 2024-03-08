"use server";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from "uuid";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(req: any, res: any) {
    if (req.method === "POST") {
        // Generiere einen eindeutigen Token oder Schlüssel
        const token = generateUniqueToken();

        const { to, subject, text } = req.body;
        const msg = {
            to,
            from: "tag-der-ausbildung@gso.schule.koeln",
            subject,
            text,
        };
        try {
            await sgMail.send(msg);
            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

export async function compareCode(code: String, email: String) {}

function generateUniqueToken() {
    return uuidv4();
}
