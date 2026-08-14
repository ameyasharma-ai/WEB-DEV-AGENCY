import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log("New Lead Submission Received:", data);

    const formspreeResponse = await fetch("https://formspree.io/f/mppaldkg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!formspreeResponse.ok) {
      throw new Error("Failed to submit to Formspree");
    }
    
    return NextResponse.json({ success: true, message: "Lead captured successfully" });
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
