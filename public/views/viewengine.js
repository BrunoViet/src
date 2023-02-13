import express from 'express';
function configengine(app) {
    app.use(express.static('vendor'));
    app.use(express.static('public'));
    app.set("view engine", "ejs");
    app.set("views", "vendor");
    app.set("views", "public");
}

export default configengine