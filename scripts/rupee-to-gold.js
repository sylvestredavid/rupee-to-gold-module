Hooks.on('createEmbeddedDocuments', (documentType, documents, options, userId) => {
    console.log(documentType);  // Affiche le type de document (ex: "Item")
    console.log(documents);     // Affiche les documents créés
    console.log(options);       // Affiche les options associées à la création
    console.log(userId);        // Affiche l'ID de l'utilisateur ayant effectué l'opération
});
