// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
 

        window.lib.getPosts().onreadystatechange = (event) => {
            // XMLHttpRequest.DONE === 4
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    console.log("Réponse reçue: %s", req.responseText);
                } else {
                    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
                }
            }
        };



    });
})();

