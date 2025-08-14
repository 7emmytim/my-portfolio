import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfRenderer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Document
      file="/resume.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<div style={{ padding: "2rem", textAlign: "center" }} />}
      error={
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            color: "red",
          }}
        >
          Failed to load PDF. Please make sure the file exists in the public
          folder.
        </div>
      }
    >
      <Page
        pageNumber={pageNumber}
        renderTextLayer={true}
        renderAnnotationLayer={true}
        width={500}
      />
    </Document>
  );
}
