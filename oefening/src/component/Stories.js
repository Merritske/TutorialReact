import React from 'react'
import {Document, Page, pdfjs} from "react-pdf"
import master from '../kortverhalen/meesterschap.pdf'

export default function Stories() {
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <div> 
        <h2> Stories</h2>
<h3 style={{color: "white"}} >Meesterschap</h3>
        <Document file={master} >
   <Page pageNumber={1}/>
        </Document>
    </div>
  )
}
