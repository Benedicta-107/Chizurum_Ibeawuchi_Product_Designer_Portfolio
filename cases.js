const cases = {
  zenith: {
    title: 'Zenith Bank Mobile App',
    kicker: '01 / DIGITAL BANKING · LIVE PRODUCT',
    image: 'projects/zenith/cover.webp',
    imageAlt: 'Cover for the Zenith Bank mobile app revamp',
    background: '#d8c4bf',
    coverCaption: 'A full mobile-banking revamp designed as a scalable, more personalised experience.',
    meta: [
      ['CLIENT', 'Zenith Bank'],
      ['ROLE', 'Lead Product Designer'],
      ['SCOPE', 'UX strategy, UI design, design-system integration'],
      ['TIMELINE', '8–10 weeks'],
      ['STATUS', 'Launched product']
    ],
    intro: 'Reframing a high-traffic banking app around clarity, faster access to everyday tasks, and a system that could evolve with the product.',
    sections: [
      {
        type: 'text',
        heading: 'The challenge',
        body: [
          'The existing mobile experience had become visually crowded, with inconsistent patterns, complex navigation, limited personalisation, and accessibility gaps. The redesign needed to modernise the experience without compromising the familiarity and trust expected from a major banking product.',
          'The goal was broader than a visual refresh: create a clearer information architecture, simplify core journeys, and establish reusable patterns that could support future features across Android and iOS.'
        ]
      },
      {
        type: 'list',
        eyebrow: 'DISCOVERY & RESEARCH',
        heading: 'Understand the friction before changing the interface',
        body: ['Discovery combined stakeholder interviews, an app audit, heuristic evaluation, and competitor benchmarking. The work surfaced several recurring themes:'],
        items: [
          'A cluttered interface and inconsistent visual patterns.',
          'Complex navigation and unclear task flows for frequent banking actions.',
          'A one-size-fits-all experience with little room for personalisation.',
          'Accessibility issues around hierarchy, contrast, and legibility.',
          'A need to make the product feel more current without losing banking trust and security.'
        ]
      },
      {
        type: 'text',
        eyebrow: 'UX STRATEGY',
        heading: 'Turn findings into an experience direction',
        body: [
          'Research findings were synthesised into personas, journey maps, and friction points. From there, the design direction centred on faster access to high-frequency actions, clearer navigation, contextual calls to action, and modular components that could be reused as the product grew.',
          'The project was split into five milestones. Each milestone ended with a design review with the bank team, feedback, and iteration before the next set of flows moved forward.'
        ]
      },
      {
        type: 'callout',
        label: 'COLLABORATION MODEL',
        title: 'Five structured milestones over roughly ten weeks',
        text: 'Breaking the redesign into milestone reviews created a regular feedback loop with stakeholders, reduced late-stage rework, and gave product and engineering clearer hand-off points.'
      },
      {
        type: 'media',
        eyebrow: 'CORE EXPERIENCE',
        heading: 'Onboarding and authentication',
        body: ['Registration supported multiple verification routes while keeping the sequence explicit. Returning users could access the app with a shorter passcode or biometric path.'],
        layout: 'wide-stack',
        images: [
          {src: 'projects/zenith/register.webp', alt: 'Zenith Bank registration flow across multiple mobile screens', caption: 'Registration flow — progressive steps and multiple authentication options.'},
          {src: 'projects/zenith/login.webp', alt: 'Zenith Bank login flow showing light and dark interface variants', caption: 'Login — faster returning-user access with passcode and biometric options.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'PERSONALISATION',
        heading: 'Make the dashboard work around the user',
        body: ['Customisable quick links let customers pin the actions they use most, reducing unnecessary navigation and making the dashboard more relevant to different banking habits.'],
        layout: 'wide',
        images: [
          {src: 'projects/zenith/quick-links.webp', alt: 'Zenith Bank quick links customisation flow', caption: 'Customise Quick Links — selecting and arranging frequently used actions.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'EVERYDAY BANKING',
        heading: 'Simplify high-frequency transaction journeys',
        body: ['Transfers, bill payments, transaction history, and scheduled payments were treated as connected parts of the same everyday banking system rather than isolated screens.'],
        layout: 'wide-stack',
        images: [
          {src: 'projects/zenith/transfer.webp', alt: 'Zenith Bank transfer flow', caption: 'Transfers — clear categories, review, authentication, and success states.'},
          {src: 'projects/zenith/saved-beneficiary.webp', alt: 'Zenith Bank transfer flow to a saved beneficiary', caption: 'Saved beneficiaries — reducing friction for trusted repeat transfers.'},
          {src: 'projects/zenith/bills.webp', alt: 'Zenith Bank bills payment flow', caption: 'Bills — browse, select, review, authenticate, and complete.'},
          {src: 'projects/zenith/history.webp', alt: 'Zenith Bank transaction history flow', caption: 'Transaction history — filters, detail views, receipts, and repeat actions.'},
          {src: 'projects/zenith/scheduled.webp', alt: 'Zenith Bank scheduled payment screens', caption: 'Scheduled payments — create, review, pause, edit, or remove recurring activity.'}
        ]
      },
      {
        type: 'metrics',
        eyebrow: 'PRODUCT OUTCOMES',
        heading: 'What changed after launch',
        intro: 'The redesign shipped as part of the live Zenith mobile product. Reported product-level outcomes include:',
        items: [
          {value: '20%', label: 'increase in money-transfer completion'},
          {value: '40%', label: 'increase in bill-payment adoption'},
          {value: 'Live', label: 'mobile experience delivered across the product'}
        ],
        note: 'These are product-level outcomes associated with the wider launch, not isolated causal estimates of design alone.'
      },
      {
        type: 'text',
        eyebrow: 'REFLECTION',
        heading: 'Designing around real constraints',
        body: [
          'A key lesson was learning how to improve clarity without pretending legacy dependencies did not exist. Some authentication requirements had to remain, so the design focused on better microcopy, progressive disclosure, and more explicit step-by-step flows.',
          'The next opportunities are deeper behavioural personalisation, broader accessibility support, and continuous usability testing as new capabilities are introduced.'
        ]
      }
    ]
  },

  firstbank: {
    title: 'FirstBank / FirstMobile',
    kicker: '02 / DIGITAL BANKING · SELECTED LIVE FEATURES',
    image: 'projects/firstbank/cover.webp',
    imageAlt: 'Selected FirstMobile screens for foreign exchange, investments and lifestyle services',
    background: '#e8dcae',
    coverCaption: 'Selected FirstMobile feature work spanning FX, investment subscriptions, and lifestyle services.',
    meta: [
      ['CLIENT', 'FirstBank / FirstMobile'],
      ['ROLE', 'Product Design Lead'],
      ['SCOPE', 'Feature strategy, UX/UI, mobile banking journeys'],
      ['STATUS', 'Selected features launched'],
      ['PORTFOLIO VIEW', 'Public-safe feature flows']
    ],
    intro: 'Designing new financial services inside an established banking app — from foreign exchange to investment subscriptions and lifestyle utilities.',
    sections: [
      {
        type: 'text',
        heading: 'The brief was not one feature — it was a growing product ecosystem',
        body: [
          'My work on FirstMobile spans multiple digital banking experiences, including Convert FX, Dangote IPO subscription, Lifestyle Services, and other feature initiatives. Each had different rules and complexity, but they still needed to feel like one coherent banking product.',
          'The design challenge was to introduce specialised financial journeys without making the app feel fragmented: familiar entry points, clear review states, deliberate confirmation, and strong continuity with existing FirstMobile patterns.'
        ]
      },
      {
        type: 'callout',
        label: 'PUBLIC PORTFOLIO SCOPE',
        title: 'Showing shipped journeys without exposing internal material',
        text: 'This case study focuses on selected interface flows supplied for public portfolio use. Internal regulatory and compliance artefacts are intentionally excluded.'
      },
      {
        type: 'media',
        eyebrow: 'FEATURE 01 / CONVERT FX',
        heading: 'Make currency conversion feel like a familiar transfer',
        body: ['Convert FX brings rates, currency selection, account details, and review into a guided mobile flow. The experience keeps the financial context visible while progressively revealing only what the customer needs at each step.'],
        layout: 'phones',
        images: [
          {src: 'projects/firstbank/fx-dashboard.webp', alt: 'FirstMobile dashboard with Convert FX entry point', caption: 'Entry point from the existing dashboard.'},
          {src: 'projects/firstbank/fx-entry.webp', alt: 'Convert FX rates screen', caption: 'Exchange-rate context and service state.'},
          {src: 'projects/firstbank/fx-currency.webp', alt: 'Convert FX currency selection', caption: 'Currency selection without leaving the flow.'},
          {src: 'projects/firstbank/fx-review.webp', alt: 'Convert FX transfer details review', caption: 'Reviewing source, destination, currency, and amount before continuing.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'FEATURE 02 / DANGOTE IPO',
        heading: 'Bring an investment subscription into the banking journey',
        body: ['The IPO flow had to communicate an unfamiliar investment process in a mobile-banking context: discover the offer, understand the terms, verify the investor account, choose a subscription amount, review the transaction, and receive proof of completion.'],
        layout: 'phones',
        images: [
          {src: 'projects/firstbank/ipo-investments.webp', alt: 'FirstMobile investments page showing available IPO offers', caption: 'Offer discovery inside Investments.'},
          {src: 'projects/firstbank/ipo-offer.webp', alt: 'Dangote Refinery IPO offer details', caption: 'Offer information, minimum subscription, and terms.'},
          {src: 'projects/firstbank/ipo-verify.webp', alt: 'CSCS account verification step for IPO subscription', caption: 'Investor-account verification.'},
          {src: 'projects/firstbank/ipo-subscribe.webp', alt: 'IPO share subscription amount screen', caption: 'Selecting the number of shares.'},
          {src: 'projects/firstbank/ipo-review.webp', alt: 'FirstMobile IPO review subscription screen', caption: 'Review before authorisation.'},
          {src: 'projects/firstbank/ipo-receipt.webp', alt: 'FirstMobile IPO subscription receipt', caption: 'Receipt and completion state.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'FEATURE 03 / LIFESTYLE SERVICES',
        heading: 'Extend banking into useful everyday services',
        body: ['Lifestyle Services creates a home for adjacent services such as eSIM activation, e-vouchers, and international airtime. The feature pattern keeps selection, data entry, confirmation, and receipt states consistent with the broader app.'],
        layout: 'phones',
        images: [
          {src: 'projects/firstbank/lifestyle-menu.webp', alt: 'FirstMobile lifestyle services menu', caption: 'Lifestyle Services hub.'},
          {src: 'projects/firstbank/esim-country.webp', alt: 'eSIM country selection screen', caption: 'Selecting a destination for eSIM activation.'},
          {src: 'projects/firstbank/esim-details.webp', alt: 'eSIM activation details screen', caption: 'Capturing the required activation details.'},
          {src: 'projects/firstbank/esim-confirm.webp', alt: 'eSIM activation confirmation screen', caption: 'Transaction confirmation before authorisation.'},
          {src: 'projects/firstbank/international-airtime.webp', alt: 'International airtime country selection', caption: 'International airtime entry flow.'},
          {src: 'projects/firstbank/evoucher.webp', alt: 'FirstMobile e-voucher catalogue', caption: 'Digital voucher selection.'}
        ]
      },
      {
        type: 'metrics',
        eyebrow: 'IMPACT',
        heading: 'Design carried through to launch',
        intro: 'The broader FirstMobile work moved from concept through release. One of the reported outcomes for the selected features was:',
        items: [
          {value: '40%', label: 'reported adoption of Convert FX'},
          {value: 'Live', label: 'selected FirstMobile feature experiences'}
        ],
        note: 'The portfolio does not attribute overall FirstMobile downloads or ratings solely to these individual feature designs.'
      }
    ]
  },

  'smart-id': {
    title: 'Smart ID',
    kicker: '03 / ENTERPRISE FINTECH · LIVE PRODUCT',
    image: 'projects/smart-id/cover.webp',
    imageAlt: 'Smart ID product cover with reporting dashboard',
    background: '#c8dce7',
    coverCaption: 'A card issuance, PIN management, and administration platform for financial institutions.',
    meta: [
      ['CLIENT', 'Banks & financial institutions'],
      ['ROLE', 'Product Designer'],
      ['SCOPE', 'Research, workflows, dashboards, admin experience'],
      ['TIMELINE', 'July 2024 – March 2025'],
      ['STATUS', 'Live product']
    ],
    intro: 'Redesigning an enterprise card-and-PIN issuance platform around clearer workflows, better visibility, and the realities of legacy banking infrastructure.',
    sections: [
      {
        type: 'text',
        heading: 'Why Smart ID needed a second iteration',
        body: [
          'Smart ID automates card production and PIN-management workflows for financial institutions, personalisation companies, and administrators. Version 1 established the digital pipeline, but scale exposed friction in request handling, reporting, integrations, and day-to-day usability.',
          'The redesign had to support users with different roles and levels of technical maturity while remaining secure, auditable, and practical for banks still operating on legacy systems.'
        ]
      },
      {
        type: 'list',
        eyebrow: 'PROBLEM SPACE',
        heading: 'Four issues shaped the redesign',
        items: [
          'Complex, clustered workflows made routine tasks difficult to complete.',
          'Manual steps and system delays slowed card and PIN requests.',
          'Admins lacked strong reporting and visibility into request progress.',
          'Banks could not always initiate requests directly from core banking platforms, so flexible alternatives were essential.'
        ]
      },
      {
        type: 'media',
        eyebrow: 'RESEARCH & DISCOVERY',
        heading: 'Combine behavioural evidence with enterprise context',
        body: ['Discovery drew on stakeholder collaboration, system logs, v1 feedback, heuristic evaluation, admin-workflow reviews, and interviews with participants recruited from the Smart ID database. Research highlighted manual file upload, poor tracking, delayed feedback, training needs, support expectations, and demand for better reporting.'],
        layout: 'wide-grid',
        images: [
          {src: 'projects/smart-id/participant-profile.webp', alt: 'Smart ID research participant profile summary', caption: 'Participant profile and research sample.'},
          {src: 'projects/smart-id/research-insights.webp', alt: 'Smart ID research insights summary', caption: 'Pain points around repeat processes, support, and workflow friction.'},
          {src: 'projects/smart-id/research-more.webp', alt: 'Additional Smart ID research findings', caption: 'Training, reporting, and product-support themes.'},
          {src: 'projects/smart-id/testimonials.webp', alt: 'Smart ID user feedback quotations', caption: 'Qualitative feedback captured during research.'}
        ]
      },
      {
        type: 'text',
        eyebrow: 'DESIGN STRATEGY',
        heading: 'Design for different institutions, roles, and infrastructure',
        body: [
          'Research was translated into user stories and task flows for card issuance, PIN issuance, USSD onboarding, administration, and reporting. A maker-checker model was reflected throughout the interface so high-risk actions could be initiated and approved by the right roles.',
          'The strategy favoured flexible patterns rather than assuming every bank had the same integration capability. Where real-time connections were not feasible, batch upload and validation patterns kept the workflow usable.'
        ]
      },
      {
        type: 'media',
        eyebrow: 'FLOW DESIGN',
        heading: 'Map the operational journey before polishing screens',
        layout: 'wide-stack',
        images: [
          {src: 'projects/smart-id/pin-journey.webp', alt: 'Smart ID PIN issuance user journey map', caption: 'PIN issuance journey.'},
          {src: 'projects/smart-id/card-journey.webp', alt: 'Smart ID card issuance user journey map', caption: 'Card issuance journey.'},
          {src: 'projects/smart-id/card-request.webp', alt: 'Smart ID card issuance request interface states', caption: 'Card request flow with validation and progress states.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'CORE FEATURES',
        heading: 'Visibility, control, and accountable hand-offs',
        body: ['The redesign introduced role-based dashboards, clearer request states, validation before processing, user and permission management, auditability, and supporting setup flows.'],
        layout: 'wide-stack',
        images: [
          {src: 'projects/smart-id/dashboard.webp', alt: 'Smart ID analytics and reporting dashboards', caption: 'Admin dashboards designed around at-a-glance operational visibility.'},
          {src: 'projects/smart-id/roles-permissions.webp', alt: 'Smart ID roles and permissions management screens', caption: 'Role and permission management for maker, checker, bank, and platform-admin needs.'},
          {src: 'projects/smart-id/signup.webp', alt: 'Smart ID sign-up screens', caption: 'Secure invitation-based account setup.'}
        ]
      },
      {
        type: 'callout',
        label: 'DESIGN LEARNING',
        title: 'Enterprise design is often a flexibility problem',
        text: 'The work reinforced that “simpler” does not always mean fewer rules. The real job was to make security, permissions, legacy constraints, and edge cases understandable without flattening the operational reality.'
      },
      {
        type: 'text',
        eyebrow: 'OUTCOME',
        heading: 'A live platform designed to keep evolving',
        body: ['Smart ID is live and used by financial institutions and the Interswitch admin team. The source material describes ongoing iteration around performance, security, and feature coverage rather than a single before-and-after metric.']
      }
    ]
  },

  'open-banking': {
    title: 'Open Banking with Thrive MFB',
    kicker: '04 / OPEN BANKING · CONCEPT / PROTOTYPE',
    image: 'projects/open-banking/cover.webp',
    imageAlt: 'Thrive MFB and Open Banking prototype screens',
    background: '#dce7d7',
    coverCaption: 'Thrive MFB was used as the prototype host experience for a cross-bank Open Banking initiative.',
    meta: [
      ['CONTEXT', 'Open Banking initiative'],
      ['ROLE', 'Product design'],
      ['PROTOTYPE BANK', 'Thrive MFB'],
      ['SCOPE', 'Connected accounts, consent, transactions, direct debit'],
      ['STATUS', 'Concept / prototype portfolio work']
    ],
    intro: 'Exploring how one banking app could become a secure doorway to services across multiple financial institutions when the customer chooses to connect them.',
    sections: [
      {
        type: 'text',
        heading: 'The concept',
        body: [
          'The Open Banking initiative explores a simple proposition: if a customer opts in, they should be able to connect accounts from other banks and access supported services without mentally switching between separate banking experiences.',
          'Thrive MFB acted as the prototype host bank. That gave the concept a realistic home: customers start from a familiar banking dashboard, enter an Open Banking area, then select the external institution and service they want to use.'
        ]
      },
      {
        type: 'callout',
        label: 'IMPORTANT CONTEXT',
        title: 'This is presented as an initiative / prototype',
        text: 'The supplied portfolio material demonstrates the proposed experience and flows. No production launch or adoption metric is claimed here.'
      },
      {
        type: 'media',
        eyebrow: 'EXPERIENCE MODEL',
        heading: 'A familiar host experience, then a dedicated connected-banking layer',
        layout: 'phones',
        images: [
          {src: 'projects/open-banking/thrive-dashboard.webp', alt: 'Thrive MFB dashboard used as the prototype host banking app', caption: 'Thrive MFB host dashboard.'},
          {src: 'projects/open-banking/dashboard.webp', alt: 'Open Banking dashboard inside the Thrive MFB prototype', caption: 'Open Banking hub with connected-account and service categories.'},
          {src: 'projects/open-banking/accounts-connected.webp', alt: 'Open Banking list of accounts connected across different banks', caption: 'One view of accounts connected across participating banks.'}
        ]
      },
      {
        type: 'list',
        eyebrow: 'DESIGN PRINCIPLES VISIBLE IN THE FLOWS',
        heading: 'Make cross-bank actions explicit',
        items: [
          'Keep the institution being accessed visible so customers know which bank they are acting on.',
          'Use consent as a deliberate step before sharing data or initiating an external-bank action.',
          'Return external accounts to a single connected-account view rather than forcing repeated navigation.',
          'Group capabilities by customer intent: accounts, transactions, direct debit, KYC, and fraud reporting.',
          'Use familiar OTP and confirmation patterns to preserve the mental model of secure banking.'
        ]
      },
      {
        type: 'media',
        eyebrow: 'CONNECTED ACCOUNTS',
        heading: 'From account discovery to one consolidated view',
        body: ['The account flows support selecting a banking action, choosing an institution, connecting eligible accounts, and returning the result to the Open Banking dashboard.'],
        layout: 'phones',
        images: [
          {src: 'projects/open-banking/accounts.webp', alt: 'Open Banking account service menu', caption: 'Account actions available from the Open Banking hub.'},
          {src: 'projects/open-banking/accounts-select.webp', alt: 'Open Banking external bank accounts selection screen', caption: 'Selecting external accounts to add to the connected experience.'},
          {src: 'projects/open-banking/accounts-connected.webp', alt: 'Open Banking consolidated connected account list', caption: 'Connected accounts brought into one view.'},
          {src: 'projects/open-banking/thrive-accounts.webp', alt: 'Thrive MFB own-account view', caption: 'The host bank’s own accounts remain part of the wider mental model.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'DIRECT DEBIT',
        heading: 'Manage mandates without losing the bank context',
        body: ['Direct Debit is organised around clear customer intentions: create a mandate, retrieve mandates, cancel one, or execute an existing instruction.'],
        layout: 'phones',
        images: [
          {src: 'projects/open-banking/direct-debit.webp', alt: 'Open Banking Direct Debit options', caption: 'Direct Debit action menu.'},
          {src: 'projects/open-banking/get-mandate.webp', alt: 'Open Banking mandate list and details', caption: 'Retrieving existing mandates and reviewing their status.'},
          {src: 'projects/open-banking/thrive-transfer.webp', alt: 'Thrive MFB transfer screen', caption: 'A familiar host-app transaction pattern for continuity.'}
        ]
      },
      {
        type: 'text',
        eyebrow: 'WHY IT MATTERS',
        heading: 'The design challenge is trust, not only aggregation',
        body: ['Putting multiple institutions in one place creates convenience, but it also increases the need for clarity around consent, institution identity, action status, and reversibility. The prototype demonstrates how those trust cues can be embedded into the journey rather than treated as an afterthought.']
      }
    ]
  },

  'mobile-pos': {
    title: 'Mobile POS',
    kicker: '05 / PAYMENTS · PRODUCT CONCEPT',
    image: 'projects/mobile-pos/cover.webp',
    imageAlt: 'Smart U-POS mobile point-of-sale product concept cover',
    background: '#c7d7d5',
    coverCaption: 'A lightweight mobile POS concept designed around nano and micro businesses in Nigeria.',
    meta: [
      ['CLIENT', 'Interswitch'],
      ['ROLE', 'Product Designer'],
      ['TEAM', 'UX Researcher, Product Manager, Engineer'],
      ['TIMELINE', '3 months'],
      ['SCOPE', 'Research, strategy, onboarding, payments, prototype']
    ],
    intro: 'Designing a lightweight payment product around the day-to-day realities of small merchants, cashpoint agents, and customers who need practical access to digital financial services.',
    sections: [
      {
        type: 'text',
        heading: 'The opportunity',
        body: [
          'U-POS was conceived as a lightweight mobile point-of-sale solution for Nigeria’s nano and micro businesses — from petty traders to cashpoint agents, including merchants without formal business registration.',
          'The ambition was to make payment collection and access to digital financial services more practical without requiring the merchant to behave like a large formal enterprise.'
        ]
      },
      {
        type: 'media',
        eyebrow: 'COLLABORATIVE PLANNING',
        heading: 'Start by aligning on the goal, risks, and assumptions',
        body: ['Before interface design, the team used workshop exercises to frame the long-term goal, identify what could prevent success, compare inspiration, vote on hypotheses, and sketch possible solutions.'],
        layout: 'wide-grid',
        images: [
          {src: 'projects/mobile-pos/long-term-goal.webp', alt: 'Mobile POS workshop long-term goal', caption: 'Long-term goal framing.'},
          {src: 'projects/mobile-pos/workshop.webp', alt: 'Mobile POS workshop hypothesis voting board', caption: 'Hypothesis discussion and voting.'},
          {src: 'projects/mobile-pos/hypotheses.webp', alt: 'Mobile POS hypotheses board', caption: 'Explicit assumptions to validate rather than silently design around.'},
          {src: 'projects/mobile-pos/miro.webp', alt: 'Mobile POS workshop solution sketch artefact', caption: 'Collaborative solution sketching.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'USER RESEARCH',
        heading: 'Test the assumptions against merchants and customers',
        body: ['Research artefacts compare early assumptions with what the team discovered, then translate findings into merchant and customer points of view. The goal was to understand payment preferences, trust, speed, record-keeping, and the practical context in which the device would be used.'],
        layout: 'wide-grid',
        images: [
          {src: 'projects/mobile-pos/research-insights.webp', alt: 'Mobile POS table comparing assumptions with research discoveries', caption: 'Assumptions compared with what research uncovered.'},
          {src: 'projects/mobile-pos/merchant-pov.webp', alt: 'Mobile POS merchant research point of view', caption: 'Merchant insights and implications for the experience.'},
          {src: 'projects/mobile-pos/customer-pov.webp', alt: 'Mobile POS customer research point of view', caption: 'Customer needs considered alongside the merchant experience.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'STRUCTURE BEFORE SURFACE',
        heading: 'Map the journey, then reduce the interaction cost',
        body: ['The product flow was mapped end-to-end before the final interface was refined. This helped the team reason about onboarding, login, receiving payments, transaction history, and exception states as one connected system.'],
        layout: 'wide-stack',
        images: [
          {src: 'projects/mobile-pos/flow.webp', alt: 'Mobile POS end-to-end user flow diagram', caption: 'End-to-end flow mapping.'},
          {src: 'projects/mobile-pos/wireframes.webp', alt: 'Mobile POS wireframe sequence', caption: 'Early interface structure before visual refinement.'}
        ]
      },
      {
        type: 'media',
        eyebrow: 'PROTOTYPE',
        heading: 'A focused set of everyday merchant flows',
        body: ['The resulting prototype covers the moments a merchant is most likely to repeat: getting started, signing in, receiving a payment, and checking what happened afterwards.'],
        layout: 'wide-stack',
        images: [
          {src: 'projects/mobile-pos/onboarding.webp', alt: 'Mobile POS onboarding screen sequence', caption: 'Onboarding.'},
          {src: 'projects/mobile-pos/login.webp', alt: 'Mobile POS login and forgot-password screens', caption: 'Login and account recovery.'},
          {src: 'projects/mobile-pos/receive-payment.webp', alt: 'Mobile POS receive payment flow', caption: 'Receive payment.'},
          {src: 'projects/mobile-pos/history.webp', alt: 'Mobile POS transaction history and dispute screens', caption: 'History and transaction follow-up.'}
        ]
      },
      {
        type: 'text',
        eyebrow: 'OUTCOME',
        heading: 'A tested product direction, not a fabricated launch claim',
        body: ['The work produced an end-to-end mobile POS concept and interactive prototype. The supplied project materials do not include a measured launch or adoption result, so this case study focuses on the quality of the process, evidence, and product decisions rather than inventing an outcome.']
      }
    ]
  },

  pearlx: {
    title: 'PearlX',
    kicker: '06 / WEB3 · PRODUCT CONCEPT',
    image: 'pearlx.webp',
    imageAlt: 'PearlX DAO platform interface',
    background: '#d9d1e8',
    coverCaption: 'A concept for discovering, joining, and contributing to DAOs with less Web3 friction.',
    meta: [
      ['CLIENT', 'PearlX'],
      ['ROLE', 'Product Designer / UX Researcher'],
      ['SCOPE', 'Research, UX strategy, web product design'],
      ['TIMELINE', '5 weeks'],
      ['STATUS', 'Product concept']
    ],
    intro: 'Making DAO discovery and contribution easier to understand for people who are still learning the language and mechanics of Web3.',
    sections: [
      {
        type: 'text',
        heading: 'The challenge',
        body: [
          'People new to DAOs often struggle to find communities worth joining, understand what each DAO represents, and make a first meaningful contribution. People participating in several DAOs also need a clearer way to keep track of their activity.',
          'PearlX was framed as one place to explore DAOs, join them, contribute to proposals, and manage participation across multiple communities.'
        ]
      },
      {
        type: 'list',
        eyebrow: 'RESEARCH',
        heading: 'Turn early interviews into concrete product goals',
        body: ['User interviews and reviews of existing DAO platforms surfaced four goals for the product:'],
        items: [
          'Make it easy to search for and understand DAOs before joining.',
          'Support participation across more than one DAO.',
          'Help users manage proposals and contributions in one place.',
          'Create a more personalised experience for people with different levels of Web3 familiarity.'
        ]
      },
      {
        type: 'text',
        eyebrow: 'UX STRATEGY',
        heading: 'Reduce the amount of Web3 knowledge required up front',
        body: [
          'The UX strategy prioritised clarity, transparency, and trust for first-time users. Personas and “How Might We” questions turned research themes into design opportunities before the interface was defined.',
          'The core value proposition was then expressed through a small set of connected features: dashboard, Explore DAOs, join a DAO, view and vote on proposals, submit proposals, and create a DAO.'
        ]
      },
      {
        type: 'callout',
        label: 'TAKEAWAY',
        title: 'Complex technology still needs ordinary product clarity',
        text: 'The project deepened my understanding of DAO mechanics and reinforced a broader design principle: unfamiliar technology becomes more approachable when the interface explains intent, context, and next steps instead of assuming specialist knowledge.'
      }
    ]
  }
};

const order = ['zenith', 'firstbank', 'smart-id', 'open-banking', 'mobile-pos', 'pearlx'];
const params = new URLSearchParams(window.location.search);
const key = params.get('project');
const item = cases[key];

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function appendParagraphs(container, paragraphs = []) {
  paragraphs.forEach(text => container.appendChild(make('p', '', text)));
}

function renderFigure(image, layout) {
  const figure = make('figure', 'case-figure');
  const link = make('a', 'case-image-link');
  link.href = `assets/${image.src}`;
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', `${image.alt}. Open full-size image in a new tab.`);
  const img = document.createElement('img');
  img.src = `assets/${image.src}`;
  img.alt = image.alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  link.appendChild(img);
  figure.appendChild(link);
  if (image.caption) figure.appendChild(make('figcaption', '', image.caption));
  return figure;
}

function renderSection(section) {
  const wrapper = make('section', `case-section case-section-${section.type}`);
  if (section.eyebrow) wrapper.appendChild(make('p', 'case-eyebrow', section.eyebrow));
  if (section.heading) wrapper.appendChild(make('h2', '', section.heading));

  if (section.type === 'text') {
    appendParagraphs(wrapper, section.body || []);
  }

  if (section.type === 'list') {
    appendParagraphs(wrapper, section.body || []);
    const list = make('ul', 'case-list');
    (section.items || []).forEach(itemText => list.appendChild(make('li', '', itemText)));
    wrapper.appendChild(list);
  }

  if (section.type === 'callout') {
    const box = make('div', 'case-callout');
    if (section.label) box.appendChild(make('span', 'case-callout-label', section.label));
    if (section.title) box.appendChild(make('h2', '', section.title));
    if (section.text) box.appendChild(make('p', '', section.text));
    wrapper.appendChild(box);
  }

  if (section.type === 'media') {
    appendParagraphs(wrapper, section.body || []);
    const gallery = make('div', `case-gallery case-gallery-${section.layout || 'wide'}`);
    (section.images || []).forEach(image => gallery.appendChild(renderFigure(image, section.layout)));
    wrapper.appendChild(gallery);
  }

  if (section.type === 'metrics') {
    if (section.intro) wrapper.appendChild(make('p', '', section.intro));
    const grid = make('div', 'case-metrics');
    (section.items || []).forEach(metric => {
      const card = make('div', 'case-metric');
      card.appendChild(make('strong', '', metric.value));
      card.appendChild(make('span', '', metric.label));
      grid.appendChild(card);
    });
    wrapper.appendChild(grid);
    if (section.note) wrapper.appendChild(make('p', 'case-note', section.note));
  }

  return wrapper;
}

if (!item) {
  document.getElementById('case-kicker').textContent = 'CASE STUDY';
  document.getElementById('case-title').textContent = 'Project not found';
  document.getElementById('case-intro').textContent = 'Return to selected work to explore the available case studies.';
  document.getElementById('case-cover').hidden = true;
  document.getElementById('case-body')?.setAttribute('hidden', '');
} else {
  document.title = `${item.title} — Chizurum Ibeawuchi`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `${item.title} product design case study by Chizurum Ibeawuchi.`;

  document.getElementById('case-kicker').textContent = item.kicker;
  document.getElementById('case-title').textContent = item.title;
  document.getElementById('case-intro').textContent = item.intro;

  const cover = document.getElementById('case-cover');
  cover.style.background = item.background;
  const image = document.getElementById('case-image');
  image.src = `assets/${item.image}`;
  image.alt = item.imageAlt;
  document.getElementById('case-cover-caption').textContent = item.coverCaption || '';

  const aside = document.getElementById('case-aside');
  (item.meta || []).forEach(([label, value]) => {
    const div = document.createElement('div');
    div.appendChild(make('span', '', label));
    div.appendChild(document.createTextNode(value));
    aside.appendChild(div);
  });

  const content = document.getElementById('case-content');
  (item.sections || []).forEach(section => content.appendChild(renderSection(section)));

  const currentIndex = order.indexOf(key);
  const nextKey = order[(currentIndex + 1) % order.length];
  const next = cases[nextKey];
  const nextLink = document.getElementById('case-next-link');
  nextLink.href = `case-study.html?project=${nextKey}`;
  nextLink.textContent = `Next case study — ${next.title} →`;
}
