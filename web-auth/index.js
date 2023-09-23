const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.sendCustomVerificationEmail = functions.auth.user().onCreate((user) => {
    const displayName = user.displayName || "User";
    const appURL = "https://your-app-url.com"; // Replace this with your actual app URL
  
    const mailOptions = {
      from: '"sayak surksha" <noreply@your-app-name.com>',
      to: user.email,
      subject: "Verify your email for Your App Name",
      html: `
        <p>Hello ${displayName},</p>
        <p>Follow this link to verify your email address:</p>
        <a href="${appURL}/__/auth/action?mode=verifyEmail&oobCode=${user.emailVerificationToken}">
          Verify Email Address
        </a>
        <p>If you didn’t ask to verify this address, you can ignore this email.</p>
        <p>Thanks,</p>
        <p>Your App Name Team</p>
      `,
    };
  
    return admin
      .firestore()
      .collection("mail")
      .add(mailOptions)
      .then((response) => {
        console.log("Custom verification email sent:", response);
      })
      .catch((error) => {
        console.error("Error sending custom verification email:", error);
      });
  });
  