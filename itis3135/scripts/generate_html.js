(function () {
  const defaultImage = "./images/introimage.jpg";

  function bindGenerateHTML() {
    const btn = document.getElementById("generateHTMLBtn");
    if (!btn) {
      console.warn("[generate_html] generateHTMLBtn not found. Retrying...");
      setTimeout(bindGenerateHTML, 200);
      return;
    }

    btn.addEventListener("click", () => {
      const firstName = document.getElementById("firstName").value;
      const preferredName = document.getElementById("preferredName").value;
      const middleInitial = document.getElementById("middleName").value;
      const lastName = document.getElementById("lastName").value;
      const mascotAdj = document.getElementById("mascotAdj").value;
      const mascotAnimal = document.getElementById("mascotAnimal").value;
      const caption = document.getElementById("imgCaption").value;
      const personalStatement = document.getElementById("personalStatement").value;
      const personalBackground = document.getElementById("personalBackground").value;
      const professionalBackground = document.getElementById("professionalBackground").value;
      const academicBackground = document.getElementById("academicBackground").value;
      const programmingBackground = document.getElementById("programmingBackground").value;
      const webBackground = document.getElementById("webBackground").value;
      const personalInterests = document.getElementById("personalInterests").value;
      const uniqueThing = document.getElementById("uniqueThing").value;

      let coursesHTML = "";
      document.querySelectorAll(".courseRow").forEach((row) => {
        const inputs = row.querySelectorAll("input");
        const department = (inputs[0] && inputs[0].value) || "";
        const number = (inputs[1] && inputs[1].value) || "";
        const name = (inputs[2] && inputs[2].value) || "";
        const reason = (inputs[3] && inputs[3].value) || "";
        if (department || number || name || reason) {
          coursesHTML += `
    <li>${department} ${number} – ${name}: ${reason}</li>`;
        }
      });

      let linksHTML = "";
      for (let i = 1; i <= 5; i++) {
        const field = document.getElementById(`link${i}`);
        const val = (field && field.value) || "";
        if (val.trim() !== "") {
          linksHTML += `
    <li><a href="${val}">${val}</a></li>`;
        }
      }

      const htmlString = `
<h2>Introduction HTML</h2>
<h3>${firstName} ${middleInitial}. "${preferredName}" ${lastName} ★ ${mascotAdj} ${mascotAnimal}</h3>
<figure>
  <img src="${defaultImage}" alt="Picture of ${firstName} ${lastName}" />
  <figcaption>${caption}</figcaption>
</figure>
<p>${personalStatement}</p>
<ul>
    <li><strong>Personal Background:</strong> ${personalBackground}</li>
    <li><strong>Professional Background:</strong> ${professionalBackground}</li>
    <li><strong>Academic Background:</strong> ${academicBackground}</li>
    <li><strong>Programming Background:</strong> ${programmingBackground}</li>
    <li><strong>Web Development Background:</strong> ${webBackground}</li>
    <li><strong>Personal Interests:</strong> ${personalInterests}</li>
    <li><strong>Something Unique:</strong> ${uniqueThing}</li>
</ul>

<h3>Courses</h3>
<ul>${coursesHTML}
</ul>

<h3>Links</h3>
<ul>${linksHTML}
</ul>`;

      const form = document.getElementById("introForm");
      if (form) form.style.display = "none";

      const h2 = document.querySelector("h2");
      if (h2) h2.textContent = "Introduction HTML";

      const output = document.getElementById("output");
      if (output) {
        output.innerHTML = `
<pre><code class="html">${htmlString.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
<button onclick="location.reload()">Return to Form</button>
`;

        if (window.hljs) {
          document.querySelectorAll("pre code").forEach((el) => hljs.highlightElement(el));
        } else {
          console.warn("[generate_html] highlight.js not detected — output shown without syntax colors.");
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindGenerateHTML);
  } else {
    bindGenerateHTML();
  }
})();
