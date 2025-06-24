const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    console.log('🚀 Starting PDF generation...');
    
    // Launch browser
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--force-color-profile=srgb',
        ]
    });
    
    try {
        const page = await browser.newPage();
        
        // Get the absolute path to the HTML file
        const htmlPath = path.resolve(__dirname, 'index.html');
        const htmlUrl = `file://${htmlPath}`;
        
        console.log(`📄 Loading HTML from: ${htmlPath}`);
        
        // Navigate to the HTML file and wait for all network requests
        await page.goto(htmlUrl, {
            waitUntil: 'networkidle0',
            timeout: 60000
        });
        
        // Wait for all fonts to be loaded
        await page.evaluate(async () => {
            if (document.fonts && document.fonts.ready) {
                await document.fonts.ready;
            }
        });
        
        // Wait a little extra for any async CSS or JS
        await new Promise(r => setTimeout(r, 1000));
        
        // Generate PDF with settings that preserve browser appearance
        const pdfPath = path.resolve(__dirname, 'isaac_reynaldo_resume.pdf');
        
        console.log('🖨️  Generating PDF...');
        
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0.15in',
                right: '0.15in',
                bottom: '0.15in',
                left: '0.15in'
            },
            preferCSSPageSize: false,
            displayHeaderFooter: false
        });
        
        // Check if file was created successfully
        if (fs.existsSync(pdfPath)) {
            const stats = fs.statSync(pdfPath);
            const fileSizeInKB = Math.round(stats.size / 1024);
            console.log(`✅ PDF generated successfully!`);
            console.log(`📁 Location: ${pdfPath}`);
            console.log(`📊 File size: ${fileSizeInKB} KB`);
        } else {
            console.error('❌ PDF file was not created');
        }
        
    } catch (error) {
        console.error('❌ Error generating PDF:', error.message);
        process.exit(1);
    } finally {
        await browser.close();
        console.log('🔚 Browser closed');
    }
}

// Run the function
generatePDF().catch(console.error); 