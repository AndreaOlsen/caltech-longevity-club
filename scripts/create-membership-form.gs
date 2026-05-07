/**
 * Caltech Longevity Club — Membership Application Form Generator
 *
 * Run this ONCE in Google Apps Script (script.google.com → New project → paste → Run).
 * It creates the form, configures it, and sets up an email notification trigger.
 *
 * After running, check the execution log for the public form URL.
 */

const NOTIFICATION_EMAIL = 'longevity@caltech.edu';
const FORM_TITLE = 'Caltech Longevity Club — Membership Application';
const FORM_DESCRIPTION =
  'Join a network of Caltech students, scientists, and industry leaders ' +
  'advancing human longevity research. Tell us a bit about yourself and ' +
  'we will follow up with next steps.';

function createMembershipForm() {
  const form = FormApp.create(FORM_TITLE)
    .setDescription(FORM_DESCRIPTION)
    .setCollectEmail(true)
    .setAllowResponseEdits(false)
    .setAcceptingResponses(true)
    .setShowLinkToRespondAgain(false)
    .setConfirmationMessage(
      'Thanks for applying! We will review your application and follow up at the email you provided. — Caltech Longevity Club'
    );

  // ── Personal info ──────────────────────────────────────────────
  form.addTextItem().setTitle('Full name').setRequired(true);

  form
    .addTextItem()
    .setTitle('LinkedIn or personal website (optional)');

  // ── Affiliation ────────────────────────────────────────────────
  form
    .addMultipleChoiceItem()
    .setTitle('What is your current affiliation?')
    .setChoiceValues([
      'Caltech undergraduate',
      'Caltech graduate student',
      'Caltech postdoc',
      'Caltech faculty / staff',
      'Researcher at another institution',
      'Industry / biotech',
      'Other',
    ])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle('Department, lab, or company');

  // ── Interests ──────────────────────────────────────────────────
  form
    .addCheckboxItem()
    .setTitle('Which areas of longevity are you most interested in?')
    .setChoiceValues([
      'Aging biology / mechanisms',
      'Therapeutics & drug discovery',
      'AI / machine learning for longevity',
      'Biomarkers & diagnostics',
      'Clinical translation',
      'Lifestyle, nutrition, performance',
      'Entrepreneurship / startup',
      'Policy & ethics',
    ]);

  form
    .addParagraphTextItem()
    .setTitle('Why do you want to join the Caltech Longevity Club?')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('How would you like to contribute? (research, events, content, sponsorship intros, etc.)');

  // ── Logistics ──────────────────────────────────────────────────
  form
    .addMultipleChoiceItem()
    .setTitle('Are you interested in the May 22–24 Longevity Hackathon?')
    .setChoiceValues([
      'Yes, I want to compete',
      'Yes, I want to mentor / judge',
      'Maybe — tell me more',
      'No',
    ]);

  // ── Set up notification trigger ────────────────────────────────
  ScriptApp.newTrigger('onMembershipFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();

  // ── Output URLs ────────────────────────────────────────────────
  const publishedUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();

  Logger.log('============================================');
  Logger.log('FORM CREATED ✔');
  Logger.log('Public URL (use on website):');
  Logger.log(publishedUrl);
  Logger.log('');
  Logger.log('Edit URL:');
  Logger.log(editUrl);
  Logger.log('============================================');

  return { publishedUrl, editUrl };
}

/**
 * Email-notification trigger. Fires on every form submission.
 */
function onMembershipFormSubmit(e) {
  const itemResponses = e.response.getItemResponses();
  const respondentEmail = e.response.getRespondentEmail();
  const submittedAt = e.response.getTimestamp();

  let body = `New membership application received\n`;
  body += `Submitted at: ${submittedAt}\n`;
  body += `Respondent email: ${respondentEmail}\n`;
  body += `--------------------------------------------\n\n`;

  itemResponses.forEach((ir) => {
    const q = ir.getItem().getTitle();
    const a = ir.getResponse();
    body += `${q}\n${Array.isArray(a) ? a.join(', ') : a}\n\n`;
  });

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: 'New Membership Application — Caltech Longevity Club',
    body: body,
    replyTo: respondentEmail || NOTIFICATION_EMAIL,
  });
}
