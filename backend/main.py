from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import os
from typing import Optional
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = FastAPI(title="VisualSonicAI API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],                                  # In production, replace with specific frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for request
class VibeRequest(BaseModel):
    vibe_description: str

@app.get("/")
async def root():
    return {"message": "VisualSonicAI API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/expand-vibe")
async def expand_vibe(request: VibeRequest):
    """
    Expand a short vibe description into a detailed visual treatment using Gemini 2.0 Flash
    """
    if not request.vibe_description.strip():
        raise HTTPException(status_code=400, detail="Vibe description is required")
    
    # Get API key from environment
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY not configured")
    
    # Prepare the prompt
    user_query = f'Expand the following short-form visual prompt for a music video into a detailed, three-paragraph visual treatment description suitable for a high-end music video, focusing on lighting, composition, and emotional tone: "{request.vibe_description}"'
    system_prompt = "You are a senior AI Visual Director for a music video production studio. Generate a high-quality, inspiring, and technically focused visual treatment in exactly three distinct paragraphs, separated by newlines. Do not include any titles, headers, or introductory/closing remarks."
    
    # Gemini API endpoint - using Gemini 2.5 Flash
    api_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"

    
    payload = {
        "contents": [{"parts": [{"text": user_query}]}],
        "systemInstruction": {
            "parts": [{"text": system_prompt}]
        }
    }
    
    # Make request to Gemini API with retry logic
    max_attempts = 3
    async with httpx.AsyncClient(timeout=30.0) as client:
        for attempt in range(max_attempts):
            try:
                response = await client.post(api_url, json=payload)
                
                if response.status_code == 200:
                    result = response.json()
                    text = result.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                    
                    if text:
                        return {"treatment": text, "success": True}
                    else:
                        raise HTTPException(status_code=500, detail="No text received from Gemini API")
                
                elif response.status_code == 403:
                    raise HTTPException(status_code=403, detail="Invalid API key or API not enabled")
                
                else:
                    if attempt == max_attempts - 1:
                        raise HTTPException(status_code=response.status_code, detail=f"Gemini API error: {response.text}")
                    
            except httpx.TimeoutException:
                if attempt == max_attempts - 1:
                    raise HTTPException(status_code=504, detail="Request to Gemini API timed out")
            except httpx.RequestError as e:
                if attempt == max_attempts - 1:
                    raise HTTPException(status_code=500, detail=f"Request error: {str(e)}")
    
    raise HTTPException(status_code=500, detail="Failed to generate treatment after multiple attempts")

@app.post("/api/submit-contact")
async def submit_contact(request: dict):
    """
    Submit contact form and send emails to both company and user
    """
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    
    # Validate required fields
    required_fields = ["name", "email", "phone", "duration", "video_type", "video_idea"]
    for field in required_fields:
        if not request.get(field):
            raise HTTPException(status_code=400, detail=f"{field} is required")
    
    # Get email configuration from environment
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER", "")
    smtp_password = os.getenv("SMTP_PASSWORD", "")
    company_email = os.getenv("COMPANY_EMAIL", "hello@yousonicvision.ai")
    
    if not smtp_user or not smtp_password:
        raise HTTPException(status_code=500, detail="Email configuration not set")
    
    try:
        # Prepare email content
        user_name = request.get("name")
        user_email = request.get("email")
        phone = request.get("phone")
        label_name = request.get("label_name", "N/A")
        duration = request.get("duration")
        video_type = request.get("video_type")
        video_idea = request.get("video_idea")
        treatment = request.get("generated_treatment", "Not generated")
        
        # Email to company
        company_msg = MIMEMultipart()
        company_msg["From"] = smtp_user
        company_msg["To"] = company_email
        company_msg["Subject"] = f"New Contact Form Submission from {user_name}"
        
        company_body = f"""
New contact form submission received:

Name: {user_name}
Email: {user_email}
Phone: {phone}
Label Name: {label_name}
Song Duration: {duration}
Video Type: {video_type}

Video Idea / Visual Data:
{video_idea}

AI Generated Treatment:
{treatment}

---
Submitted via YOUSONICVISION.AI Contact Form
"""
        company_msg.attach(MIMEText(company_body, "plain"))
        
        # Email to user (confirmation)
        user_msg = MIMEMultipart()
        user_msg["From"] = smtp_user
        user_msg["To"] = user_email
        user_msg["Subject"] = "Thank you for contacting YOUSONICVISION.AI"
        
        user_body = f"""
Hi {user_name},

Thank you for reaching out to YOUSONICVISION.AI! We have received your submission with the following details:

Name: {user_name}
Email: {user_email}
Phone: {phone}
Label Name: {label_name}
Song Duration: {duration}
Video Type: {video_type}

Video Idea / Visual Data:
{video_idea}

AI Generated Treatment:
{treatment}

We will review your request and connect with you shortly.

Best regards,
The YOUSONICVISION.AI Team

---
This is an automated confirmation email.
"""
        user_msg.attach(MIMEText(user_body, "plain"))
        
        # Send emails
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            
            # Send to company
            server.send_message(company_msg)
            
            # Send to user
            server.send_message(user_msg)
        
        return {"success": True, "message": "Form submitted successfully. Check your email for confirmation."}
        
    except smtplib.SMTPException as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")
