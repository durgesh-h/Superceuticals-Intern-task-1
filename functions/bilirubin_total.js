import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";


// Import all your functions in functions dir and import here and call them

async function modifyPDF(input, output) {

    const patientData = {
        name: 'Test name',
        patientId: '123123',
        gender: 'Male',
        place: 'Bengalore',
        age: '20',
        acStatus: "Test",
        labNum: 'SC01',
        refBy: 'Jai',
        dateTime: '10/07/2024 08:02:19'
    }

  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const length = pages.length;
    const page = pages[0]; 
    
    // Get the dimensions of the first page
    const { width, height } = page.getSize();
    
    for(let i = 0; i < length; i++){
        const currentPage = pages[i];

        // NAME ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    currentPage.drawRectangle({
        x: 39,
        y: height -76,
        width: 110,
        height: 10,
        color: rgb(1, 1, 1), // White color to cover existing text
      });
  
      // Add new text to the first page
      currentPage.drawText(patientData.name, {
        x: 41,
        y: height -76,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: rgb(0, 0, 0), // Black color for the new text
      });
  
      // NAME ------------------------------------------------
  
      // Patient Id ------------------------------------------------
      // Cover the old text (assuming it's at a specific position)
      currentPage.drawRectangle({
        x: 195,
        y: height - 76,
        width: 110,
        height: 10,
        color: rgb(1, 1, 1), // White color to cover existing text
      });
  
      // Add new text to the first page
      currentPage.drawText(patientData.patientId, {
        x: 198,
        y: height - 76,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: rgb(0, 0, 0), // Black color for the new text
      });
  
      // Patient Id ------------------------------------------------
  
      // Gender ------------------------------------------------
      // Cover the old text (assuming it's at a specific position)
      currentPage.drawRectangle({
        x: 339,
        y: height - 76,
        width: 110,
        height: 10,
        color: rgb(1, 1, 1), // White color to cover existing text
      });
  
      // Add new text to the first page
      currentPage.drawText(patientData.gender, {
        x: 342,
        y: height - 76,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: rgb(0, 0, 0), // Black color for the new text
      });
  
    
  
      // Place ------------------------------------------------
      // Cover the old text (assuming it's at a specific position)
      currentPage.drawRectangle({
        x: 37,
        y: height -98,
        width: 110,
        height: 10,
        color: rgb(1, 1, 1), // White color to cover existing text
      });
  
      // Add new text to the first page
      currentPage.drawText(patientData.place, {
        x: 41,
        y: height -96,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: rgb(0, 0, 0), // Black color for the new text
      });
  
      // Gender ------------------------------------------------
  
      // AGE ------------------------------------------------
      // Cover the old text (assuming it's at a specific position)
      currentPage.drawRectangle({
        x: 172,
        y: height -98,
        width: 110,
        height: 12,
        color: rgb(1, 1, 1), // White color to cover existing text
      });
  
      // Add new text to the first page
      currentPage.drawText(patientData.age, {
        x: 176,
        y: height -98,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: rgb(0, 0, 0), // Black color for the new text
      });
  
      // AGE  ------------------------------------------------
      // A/C status  ------------------------------------------------
      // Cover the old text (assuming it's at a specific position)
      currentPage.drawRectangle({
        x: 351,
        y: height -96,
        width: 110,
        height: 10,
        color: rgb(1, 1, 1), // White color to cover existing text
      });
  
      // Add new text to the first page
      currentPage.drawText(patientData.acStatus, {
        x: 353,
        y: height -96,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: rgb(0, 0, 0), // Black color for the new text
      });
  
      // lab no
      // Cover the old text (assuming it's at a specific position)
      currentPage.drawRectangle({
          x: 44,
          y: height - 120,
          width: 108,
          height: 10,
          color: rgb(1, 1, 1), // White color to cover existing text
        });
    
        // Add new text to the first page
        currentPage.drawText(patientData.labNum, {
          x: 47,
          y: height - 120,
          size: 10,
          font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
          color: rgb(0, 0, 0), // Black color for the new text
        });
  
      // Ref By
      currentPage.drawRectangle({
          x: 182,
          y: height - 120,
          width: 50,
          height: 10,
          color: rgb(1, 1, 1),
      });
  
      currentPage.drawText(patientData.refBy, {
          x: 184,
          y: height - 118,
          size: 10,
          font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
          color: rgb(0, 0, 0),
      });
  
      // Date & Time
      currentPage.drawRectangle({
          x: 360,
          y: height - 120,
          width: 120,
          height: 12,
          color: rgb(1, 1, 1),
      });
  
      currentPage.drawText(patientData.dateTime, {
          x: 360,
          y: height - 118,
          size: 9,
          font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
          color: rgb(0, 0, 0),
      });
  
     
      if (i === 0) {
        currentPage.drawRectangle({
          x: 328,
          y: height - 480,
          width: 70,
          height: 300,
          color: rgb(1, 1, 1),
        });
        currentPage.drawText("TEST VALUE", {
          x: 328,
          y: height - 194,
          size: 8,
          font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
          color: rgb(0, 0, 0),
        });
        currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 220,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 246,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 272,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 298,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 324,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 350,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 376,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 402,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 428,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 454,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
          currentPage.drawText("TEST VALUE", {
            x: 328,
            y: height - 480,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
          });
    
    

      }
    }

    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log("PDF modified successfully");
  } catch (error) {
    console.error("Error modifying PDF:", error);
  }
}

// Modify the PDF with the specified input and output file paths
modifyPDF("../pdfs/Bilirubin_total.pdf", "../results/result.pdf");
