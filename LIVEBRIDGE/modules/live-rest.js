export const LIVE_REST = {
    send(data) {
        fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(r => r.json())
          .then(j => console.log("REST Antwort:", j));
    }
};

