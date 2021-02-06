// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        getArticle();

     })
})();

async function getArticle (){
    const post = await window.lib.getPosts();
    
    post.forEach(async function(id) {
        //console.log(id.id);
        let comment = await window.lib.getComments();
        id.comments = comment;
        //console.table(post)
    });
    // let postWithCom = await post;
    //console.log(postWithCom);
    console.log(post)
}