# Cyclone Aero Design Sponsorship Site

A static, no-backend sponsorship landing page designed for GitHub Pages, Vercel, Netlify, or any basic web host.

## Included

- `index.html` — page structure and sponsorship copy
- `budget-details.html` — sponsor-safe aggregate reconciliation and planning scope
- `styles.css` — Iowa State / Cyclone Aero visual styling
- `script.js` — mobile menu, scroll effects, tier selection, and pre-filled sponsorship email generation
- `team-leads-subleads.JPG` and `team-leads.jpg` — website photographs
- `New Sponsorship Package.pdf` — currently linked packet; its financial figures are superseded by the website until a corrected packet is supplied

## Fastest free deployment: GitHub Pages

1. Create a new GitHub repository, for example `cyclone-aero-sponsor`.
2. Upload everything in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will publish a free URL similar to:
   `https://YOUR-USERNAME.github.io/cyclone-aero-sponsor/`
7. Use that published URL for the QR code in the sponsorship packet.

## Important before publishing

### 1. Confirm official gift instructions
The page intentionally does **not** collect payment directly. It points donors toward Iowa State University Foundation gift processing and creates an email to the team for next steps. Once Cyclone Aero Design has an official Foundation giving link or fund page, add that link to the giving section in `index.html`.

### 2. Tax wording
The page states that charitable gifts should be processed through the Iowa State University Foundation, a 501(c)(3) public charity, and uses qualified wording around tax deductibility because sponsor benefits can affect the deductible amount.

### 3. Update contact information as leadership changes
Search `index.html` for:
- `Nicolangelo Menanno`
- `Madalyn Davis`
- `aero.sae@iastate.edu`

### 4. Replace the packet file later if needed
The website currently links to `New Sponsorship Package.pdf`. Leave the existing PDFs unchanged until a corrected packet is supplied. On replacement, verify every website packet link points to the final file and review obsolete duplicates for removal. The website explicitly states that its financial figures supersede the current packet.

## No backend required

The sponsorship interest form does not save personal information. It builds a pre-filled email in the sponsor's default email application and sends nothing until the sponsor chooses to send it.

## Current financial snapshot — October 6, 2026

Authoritative inputs: the locally exported `Aero_Sponsor_Budget_Summary.json` (schema 2, Shared Marketing and redistributed engineering reserves revision) and `Budget_Tracker_Guide.md`. Neither internal source file is published.

- Public **current-season expense target: $31,000**. It is not the amount still needed and excludes next-year cash.
- Exact current-season expense model: **$30,498.34**.
- Additional funding for remaining current-season expenses: **$23,424.59**, publicly approximately **$23,420**.
- Additional funding including the separate **$8,000 next-year cash goal: $31,424.59**, publicly approximately **$31,420**. This objective includes the expense-only gap; do not add the gaps together.

Aggregate reconciliation and exact allocations are on `budget-details.html`. Public allocation displays:

- Travel + Competition: $16,000
- Structures: $4,000
- Electrical: $3,300
- Manufacturing: $2,200
- Aerodynamics: $890
- Programming: $380
- Marketing: $2,570
- Engineering Reserves: $1,120
- Other / Unassigned: $42.47

Figures are rounded for presentation and may not sum exactly. Shared expenses, the merchandise allowance and the engineering reserve pool are counted once. Travel is planned, not booked or paid. Marketing includes the $2,000 merchandise allowance inside its $2,500 outreach/operations allowance, plus $72.33 field access.

Keep raw transactions, donor-level amounts, private planning notes, tracker editing forms and backups out of public files. The detail page is publicly accessible and contains only approved aggregate financial information; it is not access-controlled.

No build system or package-based test/lint configuration is present; this is a static site. Validate calculations against the current export, inspect financial references and local links, check mobile/tablet/desktop layouts, and exercise navigation and the email form without sending a message. Preserve tiers, benefits and unrelated content.

### October 7 allocation-only update

Moved $890 from Structures to Aerodynamics for wind-tunnel model manufacturing. Structures is now $4,001.74 exact ($4,000 displayed); Aerodynamics is $890.00 ($890 displayed). The season expense model, public expense target, both funding objectives, and every other allocation are unchanged.
