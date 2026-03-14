import formidable from "formidable";
import fs from "fs";
import fetch from "node-fetch";

export const config = { api: { bodyParser: false } };

export default async function handler(req,res){

const form = new formidable.IncomingForm();

form.parse(req, async (err, fields, files)=>{

const file = fs.readFileSync(files.file.filepath);

const response = await fetch("https://v2.convertapi.com/convert/pdf/to/docx?Secret=I9PKYFpujbycgDAx6ws1kzTqFwHdOqAq this is api token",{
method:"POST",
headers:{ "Content-Type":"application/octet-stream" },
body:file
});

const data = await response.json();

const fileUrl = data.Files[0].Url;

const fileRes = await fetch(fileUrl);
const buffer = await fileRes.arrayBuffer();

res.setHeader("Content-Type","application/vnd.openxmlformats-officedocument.wordprocessingml.document");
res.send(Buffer.from(buffer));

});

}
