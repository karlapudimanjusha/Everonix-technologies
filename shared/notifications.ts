export async function sendNotification(type: 'contact' | 'apply' | 'newsletter', payload: any) {
  const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;

  console.log(`[Notification] Dispatching submission for: ${type}`);

  // 1. Webhook Notification Delivery
  if (webhookUrl) {
    try {
      const isDiscord = webhookUrl.includes("discord.com/api/webhooks/");
      let body: any;

      if (isDiscord) {
        body = {
          embeds: [
            {
              title: `📬 New Form Submission: ${type.toUpperCase()}`,
              fields: Object.entries(payload).map(([key, val]) => ({
                name: key.charAt(0).toUpperCase() + key.slice(1),
                value: typeof val === "string" ? val : JSON.stringify(val),
                inline: false,
              })),
              timestamp: new Date().toISOString(),
              color: 5814783, // Cyan/Accent theme color
            }
          ]
        };
      } else {
        // Generic JSON webhook payload
        body = {
          event: `form_submission`,
          type,
          data: payload,
          timestamp: new Date().toISOString()
        };
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`HTTP status ${res.status}`);
      }
      console.log(`[Notification] Webhook payload delivered successfully for ${type}`);
    } catch (err) {
      console.error(`[Notification] Webhook delivery failed for ${type}:`, err);
    }
  }

  // 2. Email Notification Delivery via Resend API
  if (resendApiKey) {
    try {
      const toEmail = process.env.NOTIFICATION_EMAIL_TO || "Info@everonixtek.com";
      const fromEmail = process.env.NOTIFICATION_EMAIL_FROM || "onboarding@resend.dev";
      
      const emailBody = {
        from: fromEmail,
        to: toEmail,
        subject: `New Everonix Form Submission: ${type.toUpperCase()}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #0891b2; margin-top: 0;">New ${type.toUpperCase()} Submission</h2>
            <p style="color: #4b5563;">A new visitor has submitted a form on the Everonix website.</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse;">
              ${Object.entries(payload)
                .map(([key, val]) => `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px; vertical-align: top;">
                      ${key.charAt(0).toUpperCase() + key.slice(1)}:
                    </td>
                    <td style="padding: 8px 0; color: #1f2937; vertical-align: top;">
                      ${typeof val === "string" ? val.replace(/\n/g, "<br/>") : JSON.stringify(val)}
                    </td>
                  </tr>
                `).join("")}
            </table>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 11px; color: #9ca3af;">Sent automatically from everonixtek.com backend.</p>
          </div>
        `
      };

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },
        body: JSON.stringify(emailBody),
      });

      if (!res.ok) {
        throw new Error(`HTTP status ${res.status}`);
      }
      console.log(`[Notification] Resend email sent successfully for ${type}`);
    } catch (err) {
      console.error(`[Notification] Resend email delivery failed for ${type}:`, err);
    }
  }

  // Fallback Logger
  if (!webhookUrl && !resendApiKey) {
    console.log(
      `[Notification] [ALERT] Form submission received but NO active notification integrations (webhook/email) are configured. Set NOTIFICATION_WEBHOOK_URL or RESEND_API_KEY in environment variables. Form payload:`,
      payload
    );
  }
}
