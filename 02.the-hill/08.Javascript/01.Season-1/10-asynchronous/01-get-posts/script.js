// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            // if (error){
            //     console.log(error);
            // }else{
            //     console.log(articles);
            // }
            try{
                console.log(articles);
            }catch{
                console.log(error);
            }
            // articles.forEach(element => {
            //     console.log(element)
            // });
        });

    });
})();
