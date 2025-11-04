(function () {
  const defaultImage = "./images/introimage.jpg";

  function bind() {
    const btn = document.getElementById("generateJSONBtn");
    if (!btn) {
      console.warn("[generate_json] generateJSONBtn not found. Retrying...");
      setTimeout(bind, 200);
      return;
    }

    console.log("[generate_json] Bound click handler to Generate JSON button");
    btn.addEventListener("click", () => {
      try {
        const data = {
          firstName: document.getElementById("firstName").value,
          preferredName: document.getElementById("preferredName").value,
          middleInitial: document.getElementById("middleName").value,
          lastName: document.getElementById("lastName").value,
          divider: document.getElementById("divider").value,
          mascotAdjective: document.getElementById("mascotAdj").value,
          mascotAnimal: document.getElementById("mascotAnimal").value,
          image: defaultImage,
          imageCaption: document.getElementById("imgCaption").value,
          personalStatement: document.getElementById("personalStatement").value,
          personalBackground: document.getElementById("personalBackground").value,
          professionalBackground: document.getElementById("professionalBackground").value,
          academicBackground: document.getElementById("academicBackground").value,
          subjectBackground: document.getElementById("programmingBackground").value,
          primaryComputer: document.getElementById("webBackground").value,
          courses: [],
          links: []
        };

        document.querySelectorAll(".courseRow").forEach((row) => {
          const inputs = row.querySelectorAll("input");
          data.courses.push({
            department: (inputs[0] && inputs[0].value) || "",
            number: (inputs[1] && inputs[1].value) || "",
            name: (inputs[2] && inputs[2].value) || "",
            reason: (inputs[3] && inputs[3].value) || ""
          });
        });

        for (let i = 1; i <= 5; i++) {
          const linkField = document.getElementById(`link${i}`);
          const val = (linkField && linkField.value) || "";
          if (val.trim() !== "") {
            data.links.push({ name: `Link ${i}`, href: val });
          }
        }

        const jsonOutput = JSON.stringify(data, null, 2);

        const h2 = document.querySelector("h2");
        if (h2) h2.textContent = "Introduction JSON";

        const form = document.getElementById("introForm");
        if (form) form.style.display = "none";

        const output = document.getElementById("output");
        if (output) {
          output.innerHTML = `
            <pre><code class="json">${jsonOutput.replace(/</g, "&lt;")}</code></pre>
            <button onclick="location.reload()">Return to Form</button>
          `;

          if (window.hljs) {
            document.querySelectorAll("pre code").forEach((el) => hljs.highlightElement(el));
          } else {
            console.warn("[generate_json] highlight.js not detected — output shown without syntax colors.");
          }
        }
      } catch (err) {
        console.error("[generate_json] Error generating JSON:", err);
        alert("There was an error generating the JSON. Check the console for details.");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();