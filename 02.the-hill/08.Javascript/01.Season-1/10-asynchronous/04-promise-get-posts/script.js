// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => { 
        window.lib.getPosts().then((post) => console.log(post))
        //let getPostP = window.lib.getPosts();
        // getPostP.then((post) => console.log(post))
    })
 
})();

