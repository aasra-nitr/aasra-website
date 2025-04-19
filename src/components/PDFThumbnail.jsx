import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

// Load PDF worker from CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFThumbnail = ({ pdfUrl, width = 250 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderFirstPage = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1 });
        const scale = width / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        await page.render({ canvasContext: context, viewport: scaledViewport }).promise;
      } catch (error) {
        console.error('Error rendering PDF thumbnail:', error);
      }
    };

    renderFirstPage();
  }, [pdfUrl, width]);

  return (
    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
      <canvas ref={canvasRef} style={{ cursor: 'pointer', borderRadius: '8px' }} />
    </a>
  );
};

export default PDFThumbnail;
