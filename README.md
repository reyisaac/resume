# Isaac Reynaldo - Professional Resume

A modern, responsive resume website with automated PDF generation using Puppeteer.

## Features

- **Modern Design**: Clean, professional layout with gradient header
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Automated PDF Generation**: High-quality PDF output that matches browser appearance
- **Two-Column Layout**: Optimized for both web viewing and PDF printing
- **Professional Typography**: Carefully crafted typography and spacing

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate PDF**:
   ```bash
   npm run generate
   ```

3. **Development mode** (auto-regenerate on changes):
   ```bash
   npm run dev
   ```

## PDF Generation

The project uses **Puppeteer** for high-quality PDF generation that preserves:
- Exact browser appearance
- Colors and gradients
- Modern CSS layouts (flexbox)
- Font rendering
- Professional formatting

### Commands

- `npm run generate` - Generate a single PDF
- `npm run watch` - Watch for changes and auto-regenerate
- `npm run dev` - Development mode with auto-regeneration

## Project Structure

```
resume/
├── index.html              # Main resume HTML
├── assets/
│   └── css/
│       └── resume.css      # Professional styling
├── generate-pdf.js         # Puppeteer PDF generator
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and gradients
- **Puppeteer** - High-quality PDF generation
- **Node.js** - Build automation
- **FontAwesome** - Professional icons

## PDF Features

- **A4 Format** - Standard professional size
- **Print-Optimized** - Clean margins and spacing
- **Color Preserved** - Gradients and colors maintained
- **Layout Preserved** - Two-column layout maintained
- **Typography Optimized** - Readable font sizes and spacing

## Customization

The resume is easily customizable:
- Edit `index.html` for content changes
- Modify `assets/css/resume.css` for styling
- Adjust `generate-pdf.js` for PDF settings

## License

MIT License - feel free to use this template for your own resume!