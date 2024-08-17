import './PdfViewerWindow.styles.css'

const PdfViewerWindow = ({ pdfCV }) => {
  const openPdfViewer = () => {
    const pdfWindowCV = window.open()

    pdfWindowCV.document.write(`
      <html>
        <head>
          <title>PDF Viewer</title>
          <style>
            .download-close-button-container {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #8ea69b;
              gap: 20px;
            }
            
            .download-close-button {
              color: white;
              background-color: transparent;
              padding: 10px 20px;
              border: none;
              text-align: center;
              text-decoration: none;
              font-size: 16px;
            }

            .download-close-button:hover {
              color: black;
            }
          </style>
        </head>
        <body>
          <div class="download-close-button-container">
            <button class="download-close-button">
              <a href='${pdfCV}' download class="download-close-button">Download PDF</a>
            </button>
            <button class="download-close-button" onclick='window.close()'>Close</button> 
          </div>   
          <embed src='${pdfCV}' width='100%' height='100%' type='application/pdf'>
        </body>
      </html>
    `)
  }

  return (
    <div className='button-CV-container'>
        <button onClick={openPdfViewer} className='button-CV'>View CV</button>
    </div>
  )
}

export default PdfViewerWindow
