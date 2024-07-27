import { Document } from "./Document";

const originalDoc = new Document("Original Document Content");
console.log("Original Document:", originalDoc.getContent());

const clonedDoc = originalDoc.clone() as Document;
clonedDoc.setContent("Cloned Document Content");
console.log("Cloned Document:", clonedDoc.getContent());

console.log("Original Document after cloning:", originalDoc.getContent());
