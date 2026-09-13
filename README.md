# Cyclone Aero Design Sponsorship Site

A static, no-backend sponsorship landing page designed for GitHub Pages, Vercel, Netlify, or any basic web host.

## Included

- `index.html` — page structure and sponsorship copy
- `styles.css` — Iowa State / Cyclone Aero visual styling
- `script.js` — mobile menu, scroll effects, tier selection, and pre-filled sponsorship email generation
- `assets/team-photo.png` — team hero photo
- `assets/Cyclone_Aero_Design_2026-2027_Sponsorship_Packet.pptx` — current sponsorship packet

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
Keep the same filename so the website link does not need to change:
`assets/Cyclone_Aero_Design_2026-2027_Sponsorship_Packet.pptx`

## No backend required

The sponsorship interest form does not save personal information. It builds a pre-filled email in the sponsor's default email application and sends nothing until the sponsor chooses to send it.
