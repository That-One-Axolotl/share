(function () {
    const url = new URL(window.location.href);
    if (!url.search) {
        url.search = "v=" + Date.now();
        window.location.replace(url.toString());
    }
})();
