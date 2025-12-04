document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const btn = document.getElementById("refresh-quote");

    btn.addEventListener("click", () => {
        fetch("data/quotes.json")
            .then((response) => response.json())
            .then((data) => {
                const random = data[Math.floor(Math.random() * data.length)];
                quoteText.textContent = random;
            })
            .catch(() => {
                quoteText.textContent = "Couldn't load quote.";
            });
    });
});