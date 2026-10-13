// Applies the latest portfolio changes (typed roles, BFSI domains, professional summary).
// Run from the root of your repo:   node apply-changes.mjs
// Safe to run twice. Keeps your line endings (LF or CRLF).
import fs from 'node:fs';

const edits = [
  {
    "file": "src/components/About.js",
    "old": "          <FxCard tilt={2} sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>\n            <Typography sx={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' }, lineHeight: 1.4, letterSpacing: '-0.02em' }}>\n              {about.summary}",
    "new": "          <FxCard tilt={2} sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>\n            <Typography sx={{ fontFamily: FONTS.display, fontWeight: 500, fontSize: { xs: '1.1rem', md: '1.3rem' }, lineHeight: 1.6, letterSpacing: '-0.01em' }}>\n              {about.summary}"
  },
  {
    "file": "src/components/Experience.js",
    "old": "          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5 }}>\n            <Pill>{experience.domain}</Pill>\n            <Pill>{experience.location}</Pill>",
    "new": "          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5 }}>\n            {experience.domains.map((dm) => (\n              <Pill key={dm}>{dm}</Pill>\n            ))}\n            <Pill>{experience.location}</Pill>"
  },
  {
    "file": "src/data/portfolio.js",
    "old": "  resume: '/Marmik_Shah_Resume.pdf',\n  typedRoles: [",
    "new": "  resume: '/Marmik_Shah_Resume.pdf',\n  // Each line completes the sentence \"<role> who ...\". Keep them short (about 45 characters or fewer).\n  typedRoles: ["
  },
  {
    "file": "src/data/portfolio.js",
    "old": "  typedRoles: [\n    'builds event-driven platforms.',\n    'designs real-time APIs.',\n    'ships loyalty and rewards systems.',\n    'keeps services running with zero downtime.',\n  ],",
    "new": "  typedRoles: [\n    'builds event-driven loyalty platforms.',\n    'designs real-time, API-driven microservices.',\n    'scales BFSI and rewards systems on Kafka.',\n    'ships zero-downtime production services.',\n    'turns complex reward rules into reliable code.',\n  ],"
  },
  {
    "file": "src/data/portfolio.js",
    "old": "  tagline:\n    'I build the backend systems behind loyalty and rewards programs: Kafka ingestion pipelines, real-time APIs and low-latency services that process millions of records every day.',\n};",
    "new": "  tagline:\n    'I build backend systems for BFSI, loyalty and rewards platforms: Kafka ingestion pipelines, real-time APIs and low-latency services that process millions of records every day.',\n};"
  },
  {
    "file": "src/data/portfolio.js",
    "old": "export const about = {\n  // Keep this to one or two short sentences.\n  summary: 'I build the backend systems behind loyalty and rewards platforms, where high volume, low latency and correctness all matter at once.',\n  // Short proof points, shown as a checklist.\n  points: [",
    "new": "export const about = {\n  // A short professional summary: two sentences, covering domain, tenure and promotion.\n  summary:\n    'Senior Software Developer building backend platforms for the BFSI, loyalty and rewards domain since June 2023, promoted from Software Developer in April 2025. I design event-driven, API-first systems, from Kafka pipelines ingesting 1M+ records a day to real-time services with 99% of transactions under 800ms.',\n  // Three proof points that add to the summary, shown as a checklist.\n  points: ["
  },
  {
    "file": "src/data/portfolio.js",
    "old": "  points: [\n    'Kafka ingestion handling 1M+ records a day',\n    'Real-time APIs replacing T+1 bulk-file settlement, 99% under 800ms',\n    'Architected a channel loyalty product for manufacturers and finance companies',",
    "new": "  points: [\n    'Architected a channel loyalty product for manufacturers and finance companies',"
  },
  {
    "file": "src/data/portfolio.js",
    "old": "    'Architected a channel loyalty product for manufacturers and finance companies',\n  ],",
    "new": "    'Architected a channel loyalty product for manufacturers and finance companies',\n    'Low-latency balance service handling 300 TPS with caching and Bloom filters',\n    'Zero downtime on production services; Redis memory cut by over 50%',\n  ],"
  },
  {
    "file": "src/data/portfolio.js",
    "old": "    { label: 'Promoted', value: 'April 2025' },\n    { label: 'Domain', value: 'Loyalty and rewards' },\n  ],",
    "new": "    { label: 'Promoted', value: 'April 2025' },\n    { label: 'Domain', value: 'BFSI, Loyalty and Rewards' },\n  ],"
  },
  {
    "file": "src/data/portfolio.js",
    "old": "  group: 'A Bill Desk Group Company',\n  domain: 'Loyalty and rewards platforms',\n  location: 'Mumbai, India',",
    "new": "  group: 'A Bill Desk Group Company',\n  domains: ['BFSI', 'Loyalty', 'Rewards'],\n  location: 'Mumbai, India',"
  }
];

let failed = 0;
const byFile = {};
for (const e of edits) (byFile[e.file] ||= []).push(e);

for (const [file, list] of Object.entries(byFile)) {
  if (!fs.existsSync(file)) { console.log(`MISSING  ${file} (run this from the repo root)`); failed++; continue; }
  const raw = fs.readFileSync(file, 'utf8');
  const crlf = raw.includes('\r\n');
  let text = raw.replace(/\r\n/g, '\n');
  let applied = 0, already = 0;
  for (const { old, new: next } of list) {
    if (text.includes(old)) { text = text.replace(old, () => next); applied++; }
    else if (text.includes(next)) already++;
    else { console.log(`FAILED   ${file}: could not find this text:\n${old.split('\n').slice(0, 3).join('\n')}\n...`); failed++; }
  }
  if (applied) fs.writeFileSync(file, crlf ? text.replace(/\n/g, '\r\n') : text);
  console.log(`${applied ? 'UPDATED ' : 'OK      '} ${file}  (${applied} applied, ${already} already there)`);
}
console.log(failed ? `\n${failed} problem(s). Send me the lines above.` : '\nDone. Now: git add . && git commit -m "Update summary, domains and typed roles" && git push');
process.exit(failed ? 1 : 0);
