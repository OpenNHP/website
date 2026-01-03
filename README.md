# OpenNHP Official Website

The official website for [OpenNHP](https://github.com/OpenNHP/opennhp) - The Zero Trust Network-Infrastructure Hiding Protocol for the AI era.

🌐 **Live Site**: [www.opennhp.org](https://www.opennhp.org)

## Overview

This repository contains the source code for the OpenNHP project website. The website showcases the vision, specifications, open-source ecosystem, research, and community around the Network-Infrastructure Hiding Protocol (NHP).

## Pages

| Page | Description |
|------|-------------|
| **Homepage** | Hero section with project overview, features, quick demo, and ecosystem preview |
| **Vision** | The "Dark Forest" Internet concept and why NHP matters in the AI era |
| **Specification** | IETF Internet-Draft and CSA Zero Trust specification details |
| **Open Source** | OpenNHP Core, StealthDNS, and JS Agent projects |
| **Research** | Academic papers and collaboration opportunities |
| **Community** | Discord, GitHub Discussions, and contribution guidelines |

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript** - Vanilla JS for interactions
- **Fonts** - Inter, Outfit, JetBrains Mono (Google Fonts)

## Design Theme

The website uses a "Dark Forest" theme inspired by the project's vision:

- **Color Palette**: Deep blues, purples with bright green accents
- **Typography**: Modern, technical aesthetic
- **Effects**: Particle animations, grid backgrounds, glow effects
- **Responsive**: Mobile-first design

## Project Structure

```
website/
├── index.html              # Homepage
├── vision.html             # Vision page
├── specification.html      # Specification page
├── opensource.html         # Open Source ecosystem
├── research.html           # Research papers
├── community.html          # Community page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript interactions
├── assets/
│   ├── images/
│   └── icons/
├── LICENSE
└── README.md
```


### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`


## Links

- **Main Project**: [github.com/OpenNHP/opennhp](https://github.com/OpenNHP/opennhp)
- **Documentation**: [docs.opennhp.org](https://docs.opennhp.org)
- **IETF Draft**: [draft-opennhp-saag-nhp](https://datatracker.ietf.org/doc/html/draft-opennhp-saag-nhp)
- **Discord**: [OpenNHP Discord](https://discord.gg/CSB6Dmc2)

## Contributing

Contributions to the website are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This website is released under the [Apache 2.0 License](LICENSE).

---

Made with ❤️ by the OpenNHP Community
