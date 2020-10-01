import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const resumeUrl = "https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/ctchan.me/documents/colin-chan-resume.pdf";
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="resume">
      <div className="document">
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            width={1000}
            height={1000}
          />
        </Document>
      </div>
      <div className="pageSelector">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Resume;
