import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, mobile, message } = (await req.json()) as {
      name?: string;
      email?: string;
      mobile?: string;
      message?: string;
    };

    if (!name || !email || !message) {
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

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Website inquiry - ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Mobile: ${mobile || "—"}`, "", message].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
