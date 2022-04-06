import React from 'react'
import {Document, Page, pdfjs} from "react-pdf"
import master from '../kortverhalen/meesterschap.pdf'


 //alle kortverhalen importeren in een array
 //mappen over de verhalen en in een lijst zetten onder elkaar
 //een deel tonen van het verhaal, div's onder elkaar met bepaalde hoogte
 //titels apart in een div steken, als er op gklikt wordt wordt div van hierboven getoond of als je erover hovert 
 //ligt het op rgba(0,0,0,deze parameter veranderen) een layer(span) erover plaatsen
 //
 
export default function Stories() {
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <div> 
        <h2> Stories</h2>
<h3 style={{color: "white"}} >Meesterschap</h3>
<div className='preview'>
     <Document file={master}  >
   <Page pageNumber={1}/>
        </Document>
</div>
     
    </div>
  )
}
