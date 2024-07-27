"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Document_1 = require("./Document");
const originalDoc = new Document_1.Document("Original Document Content");
console.log("Original Document:", originalDoc.getContent());
const clonedDoc = originalDoc.clone();
clonedDoc.setContent("Cloned Document Content");
console.log("Cloned Document:", clonedDoc.getContent());
console.log("Original Document after cloning:", originalDoc.getContent());
