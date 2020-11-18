function tweetFunction() {

    var link = document.location.href
    const data = JSON.stringify({
        "destination": link,
    });

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            var responseObject = JSON.parse(this.responseText);
            var shortUrl = responseObject.shortUrl;

            n = getSelection().anchorNode;
            if (!n) {
                t = document.title;
            } else {
                t = n.nodeType === 3 ? n.data : n.innerText;
            }
            t = 'Check this site:\n' + shortUrl + '\n' + t.trim() + '\n#firstHashtag\n#secondHashtag\n';
            window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}`
            );
        }
    });

    xhr.open("POST", "https://api.rebrandly.com/v1/links");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("apikey", "<your-api-key-here>");
    xhr.send(data);


}
