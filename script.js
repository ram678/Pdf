
async function pdfToWord(){

let file=document.getElementById("pdfFile").files[0];
let formData=new FormData();
formData.append("file",file);

let res=await fetch("/api/pdf-to-word",{method:"POST",body:formData});

let blob=await res.blob();

let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="converted.docx";
a.click();

}

async function wordToPdf(){

let file=document.getElementById("docxFile").files[0];
let formData=new FormData();
formData.append("file",file);

let res=await fetch("/api/word-to-pdf",{method:"POST",body:formData});

let blob=await res.blob();

let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="converted.pdf";
a.click();

}
