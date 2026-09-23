const cases = {
  zenith: {
    title: 'Zenith Bank Mobile App', kicker: '01 / DIGITAL BANKING', image: 'zenith.webp', background: '#d8c4bf', imageAlt: 'Zenith Bank mobile banking interface screens', role: 'Lead Product Designer', scope: 'UX strategy, UI design, design system integration', timeline: '8–10 weeks for the revamp',
    intro: 'A clearer, more human mobile banking experience for everyday financial tasks.',
    sections: [
      ['The challenge', 'The existing app had become visually crowded. Navigation and task flows were difficult to follow, and the experience offered limited personalization. The team needed to modernize the app while maintaining the trust customers expect from a bank.'],
      ['What I did', 'I led the revamp across UX strategy, interface design, and design system integration. Discovery included stakeholder interviews, an app audit, heuristic evaluation, and competitor benchmarking. We used those findings to clarify navigation, simplify key journeys, and create more consistent interface patterns.'],
      ['The outcome', 'The redesigned app launched. According to my CV, improvements to key journeys contributed to a 20% increase in money-transfer completion and a 40% increase in bill-payment adoption. These figures describe product outcomes and are not isolated causal estimates of the redesign.']
    ]
  },
  'smart-id': {
    title: 'Smart ID', kicker: '02 / ENTERPRISE FINTECH', image: 'smart-id.webp', background: '#c8dce7', imageAlt: 'Smart ID reporting dashboard', role: 'Product Designer', scope: 'Research, workflows, web interface', timeline: 'July 2024 – March 2025',
    intro: 'A more usable way for financial institutions to manage card issuance and PIN requests.',
    sections: [
      ['The challenge', 'Card and PIN issuance depended on fragmented manual steps. Earlier Smart ID workflows were difficult to navigate, with limited reporting and integration options as usage grew.'],
      ['What I did', 'I led design across the financial-institution and Interswitch admin interfaces, working with product and engineering to translate complex operational requirements into clearer request and tracking flows. The design work drew on internal stakeholder collaboration and iteration.'],
      ['The outcome', 'Smart ID is live and used by banks and the Interswitch admin team. The case study describes ongoing iteration rather than a measured before-and-after performance claim.']
    ]
  },
  pearlx: {
    title: 'PearlX', kicker: '03 / WEB3 EXPERIENCE', image: 'pearlx.webp', background: '#d9d1e8', imageAlt: 'PearlX DAO platform interface', role: 'Product Designer / UX Researcher', scope: 'Research, strategy, web experience', timeline: '5 weeks',
    intro: 'Making it easier to explore communities, join DAOs, and participate with confidence.',
    sections: [
      ['The challenge', 'People new to DAOs struggled to discover communities, understand how they worked, and make their first meaningful contribution. Managing activity across multiple DAOs added another layer of friction.'],
      ['What I did', 'I interviewed users, reviewed existing DAO platforms, mapped needs and journeys, and designed an experience for discovering, joining, and contributing to DAOs. The interface prioritizes clarity for people unfamiliar with Web3.'],
      ['The outcome', 'The resulting concept brings discovery, participation, proposals, and contribution management into one experience. The supplied case study documents the design process; it does not report a launched-product performance metric.']
    ]
  },
  'mobile-pos': {
    title: 'Mobile POS', kicker: '04 / PAYMENTS', image: 'mobile-pos.webp', background: '#c7d7d5', imageAlt: 'Mobile POS concept overview', role: 'Product Designer', scope: 'Mobile design, onboarding, transaction flows', timeline: '3 months',
    intro: 'A lightweight point-of-sale concept built around the daily needs of small merchants.',
    sections: [
      ['The challenge', 'Nano and micro business owners need practical ways to accept payments and access digital financial services, including those without formal business registration.'],
      ['What I did', 'I worked with a UX researcher, product manager, and engineer on the end-to-end mobile POS experience. The work focused on simplifying onboarding, KYC, and transaction flows for merchants and cashpoint agents.'],
      ['The outcome', 'The project produced a mobile POS concept and interactive prototype. The supplied materials do not include measured adoption or business outcomes.']
    ]
  }
};
const key = new URLSearchParams(location.search).get('project');
const item = cases[key];
if (!item) {
  document.getElementById('case-title').textContent = 'Project not found';
  document.getElementById('case-intro').textContent = 'Return to selected work to explore the available case studies.';
  document.getElementById('case-cover').hidden = true;
} else {
  document.title = `${item.title} — Chizurum Ibeawuchi`;
  document.getElementById('case-kicker').textContent = item.kicker;
  document.getElementById('case-title').textContent = item.title;
  document.getElementById('case-intro').textContent = item.intro;
  document.getElementById('case-cover').style.background = item.background;
  const image = document.getElementById('case-image'); image.src = `assets/${item.image}`; image.alt = item.imageAlt;
  const aside = document.getElementById('case-aside');
  [['ROLE',item.role],['SCOPE',item.scope],['TIMELINE',item.timeline]].forEach(([label,value]) => {
    const div = document.createElement('div'); const span = document.createElement('span');
    span.textContent = label; div.append(span, document.createTextNode(value)); aside.append(div);
  });
  const content = document.getElementById('case-content');
  item.sections.forEach(([heading, body]) => {
    const section = document.createElement('section'); const h2 = document.createElement('h2'); const p = document.createElement('p');
    h2.textContent = heading; p.textContent = body; section.append(h2,p); content.append(section);
  });
}
