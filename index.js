const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output) {
  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();

    // NAME ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 37,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('TEST ALL', {
      x: 39,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // NAME ------------------------------------------------

        // Patient Id ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 195,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('Patient Id', {
      x: 198,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Patient Id ------------------------------------------------


            // Gender ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 339,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('Gender', {
      x: 342,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Gender ------------------------------------------------

    
            // Gender ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 37,
      y: height - 102,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('Place', {
      x: 39,
      y: height - 101,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Gender ------------------------------------------------

        // AGE ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 172,
      y: height - 100,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('AGE', {
      x: 175,
      y: height - 100,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // AGE  ------------------------------------------------


    
        // A/C status  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 351,
      y: height - 100,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('A/C status', {
      x: 353,
      y: height - 100,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // A/C status  ------------------------------------------------
            // Lab No.  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 45,
      y: height - 125,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('lab no.', {
      x: 45,
      y: height - 123,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

        // A/C status  ------------------------------------------------
            // Lab No.  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 183,
      y: height - 125,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('ref by.', {
      x: 183,
      y: height - 123,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });
    // Save the modified PDF to a new file

            // A/C status  ------------------------------------------------
            // Date and Time   ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 365,
      y: height - 125,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });
    firstPage.drawRectangle({
      x: 305,
      y: height - 135,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('date & time', {
      x: 365,
      y: height - 123,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });
    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log('PDF modified successfully');
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
}

// Modify the PDF with the specified input and output file paths
modifyPDF('PDF/TNL.pdf', 'result.pdf');
