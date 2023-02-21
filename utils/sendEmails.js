import nodemailer from "nodemailer";
import { google } from "googleapis";
import { activateEmailTemplate } from "../emails/activateEmailTemplate";
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  REACT_APP_MAILING_SERVICE_CLIENT_ID,
  REACT_APP_MAILING_SERVICE_CLIENT_SECRET,
  REACT_APP_MAILING_SERVICE_REFRESH_TOKEN,
  REACT_APP_SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  REACT_APP_MAILING_SERVICE_CLIENT_ID,
  REACT_APP_MAILING_SERVICE_CLIENT_SECRET,
  REACT_APP_MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

//send email

export const sendEmail = (to, url, txt, subject, templates) => {
  oauth2Client.setCredentials({
    refresh_token: REACT_APP_MAILING_SERVICE_REFRESH_TOKEN,
  });
  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: REACT_APP_SENDER_EMAIL_ADDRESS,
      clientId: REACT_APP_MAILING_SERVICE_CLIENT_ID,
      clientSecret: REACT_APP_MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: REACT_APP_MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });
  const mailOptions = {
    from: REACT_APP_SENDER_EMAIL_ADDRESS,
    to: to,
    subject: subject,
    html: templates(to, url),
  };
  smtpTransport.sendMail(mailOptions, (err, infos) => {
    if (err) return err;
    return infos;
  });
};
