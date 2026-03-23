import nodemailer from "nodemailer";

export type FormType = "contact" | "consultation" | "job_application";

export interface MailPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  formType: FormType;
  position?: string;
  resumeBuffer?: Buffer;
  resumeName?: string;
}

const SUBJECTS: Record<FormType, string> = {
  contact: "New Contact Message",
  consultation: "New Consultation Request",
  job_application: "New Job Application",
};

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
}

function buildAdminText(p: MailPayload): string {
  return [
    `Form Type : ${p.formType.replace(/_/g, " ").toUpperCase()}`,
    `Name      : ${p.name}`,
    `Email     : ${p.email}`,
    p.phone    ? `Phone     : ${p.phone}`    : null,
    p.position ? `Position  : ${p.position}` : null,
    p.resumeName ? `Resume    : ${p.resumeName} (see attachment)` : null,
    "",
    "Message:",
    "--------",
    p.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

function buildAutoReplyHtml(p: MailPayload): string {
  const formLabel = p.formType === "job_application"
    ? "job application"
    : p.formType === "consultation"
    ? "consultation request"
    : "message";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrap { max-width: 580px; margin: 40px auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #0a0a0a; padding: 36px 40px; text-align: center; }
    .header h1 { color: #00e5ff; font-size: 24px; margin: 0; letter-spacing: 1px; }
    .body { padding: 36px 40px; color: #333333; line-height: 1.7; }
    .body h2 { color: #111; font-size: 20px; margin-bottom: 8px; }
    .summary { background: #f9f9f9; border-left: 4px solid #00e5ff; padding: 16px 20px; border-radius: 4px; margin: 24px 0; font-size: 14px; color: #555; }
    .footer { background: #f0f0f0; text-align: center; padding: 20px; font-size: 12px; color: #999; }
    .footer a { color: #00e5ff; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>LUMIEN</h1>
    </div>
    <div class="body">
      <h2>Hi ${p.name},</h2>
      <p>Thank you for reaching out to Lumien. We have successfully received your <strong>${formLabel}</strong> and our team will review it shortly.</p>
      <div class="summary">
        <strong>Submission Summary</strong><br/>
        ${p.position ? `<b>Position:</b> ${p.position}<br/>` : ""}
        <b>Message:</b> ${p.message.slice(0, 150)}${p.message.length > 150 ? "…" : ""}
      </div>
      <p>We typically respond within <strong>1–2 business days</strong>. If your matter is urgent, feel free to reply to this email.</p>
      <p>Warm regards,<br/><strong>Team Lumien</strong></p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Lumien &nbsp;|&nbsp; <a href="https://lumien-india.com">lumien-india.com</a>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function sendMail(payload: MailPayload): Promise<void> {
  const transporter = createTransporter();
  const to   = process.env.SMTP_TO!;
  const from = process.env.SMTP_FROM!;
  const emailSubject = payload.subject || SUBJECTS[payload.formType];

  // Build attachments array
  const attachments = payload.resumeBuffer && payload.resumeName
    ? [{ filename: payload.resumeName, content: payload.resumeBuffer }]
    : [];

  // 1. Notify company (plain text + attachment)
  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `${emailSubject} – ${payload.name}`,
    text: buildAdminText(payload),
    attachments,
  });

  // 2. HTML auto-reply to user
  await transporter.sendMail({
    from,
    to: payload.email,
    subject: `We received your ${SUBJECTS[payload.formType].toLowerCase()} – Lumien`,
    html: buildAutoReplyHtml(payload),
  });
}
