import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, position, coverLetter, resumeName } = (await req.json()) as {
      fullName?: string;
      email?: string;
      phone?: string;
      position?: string;
      coverLetter?: string;
      resumeName?: string;
    };

    if (!fullName || !email || !position || !coverLetter) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM;
    const to = process.env.SMTP_TO;

    if (!host || !port || !user || !pass || !from || !to) {
      return NextResponse.json({ error: "Email is not configured" }, { status: 501 });
    }

    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass, type: "login" },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const text = [
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || ""}`,
      `Position: ${position}`,
      resumeName ? `Resume file selected: ${resumeName}` : "Resume file selected: (none)",
      "",
      "Cover Letter:",
      coverLetter,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Job application - ${position} - ${fullName}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
