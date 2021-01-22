module.exports = ({ marked, loadLanguages }) => {
    loadLanguages(['typescript', 'markdown', 'graphql']);
    marked.use({
        renderer: {
        }
    });
}