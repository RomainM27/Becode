// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        getPost();
    })
})();

function getPost() {
    window.lib.getPosts().then((post) => {   
        post.forEach( post => {
            window.lib.getComments(post.id).then((com) => {
                post.comments = com;
            });
        });
        console.log(post); // console le post apres l ajout
    });
}
