/**
 * Caltech Longevity Club — Sponsor Form Notifications
 *
 * Adds an onFormSubmit trigger to your existing sponsorship Google Form
 * so longevity@caltech.edu gets pinged on every submission.
 *
 * SETUP:
 *   1. Open script.google.com → New project
 *   2. Paste this whole file
 *   3. Run `installSponsorTrigger` once (you'll be prompted for permissions)
 *   4. Done — every future submission will email longevity@caltech.edu
 */

const NOTIFICATION_EMAIL = 'longevity@caltech.edu';
const SPONSOR_FORM_ID = '1wmM4aao4UqPMEiU5H0tWROEokqJKinxkUxu7wKcbr3A';

function installSponsorTrigger() {
  const form = FormApp.openById(SPONSOR_FORM_ID);

  // Remove any existing triggers for this form to avoid duplicates
  ScriptApp.getProjectTriggers().forEach((t) => {
    if (t.getHandlerFunction() === 'onSponsorFormSubmit') {
      ScriptApp.deleteTrigger(t);
    }
  });

  ScriptApp.newTrigger('onSponsorFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();

  Logger.log('Sponsor-form notification trigger installed ✔');
  Logger.log('Notifications will be sent to: ' + NOTIFICATION_EMAIL);
}

function onSponsorFormSubmit(e) {
  const itemResponses = e.response.getItemResponses();
  const respondentEmail = e.response.getRespondentEmail();
  const submittedAt = e.response.getTimestamp();

  let body = `New sponsorship inquiry received\n`;
  body += `Submitted at: ${submittedAt}\n`;
  if (respondentEmail) body += `Respondent email: ${respondentEmail}\n`;
  body += `--------------------------------------------\n\n`;

  itemResponses.forEach((ir) => {
    const q = ir.getItem().getTitle();
    const a = ir.getResponse();
    body += `${q}\n${Array.isArray(a) ? a.join(', ') : a}\n\n`;
  });

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: 'New Sponsor Inquiry — Caltech Longevity Club',
    body: body,
    replyTo: respondentEmail || NOTIFICATION_EMAIL,
  });
}
