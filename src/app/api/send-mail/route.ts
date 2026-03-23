import { NextResponse } from "next/server";
import { sendMail, type FormType } from "@/lib/mailService";

export const runtime = "nodejs";

const VALID_FORM_TYPES: FormType[] = ["contact", "consultation", "job_application"];

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let name: string, email: string, phone: string | undefined,
        subject: string | undefined, message: string,
        formType: string, position: string | undefined,
        resumeBuffer: Buffer | undefined, resumeName: string | undefined;

    if (contentType.includes("multipart/form-data")) {
      // Handle FormData (with file upload)
      const formData = await req.formData();
      name      = (formData.get("name")     as string) || "";
      email     = (formData.get("email")    as string) || "";
      phone     = (formData.get("phone")    as string) || undefined;
      subject   = (formData.get("subject")  as string) || undefined;
      message   = (formData.get("message")  as string) || "";
      formType  = (formData.get("formType") as string) || "";
      position  = (formData.get("position") as string) || undefined;

      const file = formData.get("resume") as File | null;
      if (file && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        resumeBuffer = Buffer.from(arrayBuffer);
        resumeName   = file.name;
      }
    } else {
      // Handle JSON (contact / consultation forms)
      const body = await req.json();
      ({ name, email, phone, subject, message, formType, position } = body);
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required." },
        { status: 400 }
      );
    }
    if (!VALID_FORM_TYPES.includes(formType as FormType)) {
      return NextResponse.json(
        { success: false, message: "Invalid formType. Use: contact | consultation | job_application" },
        { status: 400 }
      );
    }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 501 }
      );
    }

    await sendMail({
      name, email, phone, subject, message,
      formType: formType as FormType,
      position, resumeBuffer, resumeName,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("[send-mail] Error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
