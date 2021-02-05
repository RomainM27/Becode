// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            try{
                articles.forEach(ele => {
                    //ele.comments = [];
                    window.lib.getComments(ele.id, function(error, com){
                        ele.comments = com;
                        //ele.comments.push(com);
                        //console.log(com)
                        console.log(ele)
                        console.log(ele.comments[4])
                    });
                    
                });
             }catch{
                console.log(error);
            }
            // articles.forEach(element => {
            //     console.log(element)
            // });
        });
    });
})();

/*
            test = Object.assign({},defaultProps,id); 
            Object.assign(id, test);
*/