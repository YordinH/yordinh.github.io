const form = document.getElementById("introForm");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");
const addCourseBtn = document.getElementById("addCourseBtn");
const coursesWrapper = document.getElementById("coursesWrapper");

const defaultImage = "./images/introimage.jpg";

function buildIntroPage() {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const preferredName = document.getElementById("preferredName").value;
    const lastName = document.getElementById("lastName").value;
    const ackStatement = document.getElementById("ackStatement").value;
    const ackDate = document.getElementById("ackDate").value;
    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;
    const divider = document.getElementById("divider").value;
    const caption = document.getElementById("imgCaption").value;
    const personalStatement = document.getElementById("personalStatement").value;

    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const programmingBackground = document.getElementById("programmingBackground").value;
    const webBackground = document.getElementById("webBackground").value;
    const personalInterests = document.getElementById("personalInterests").value;
    const uniqueThing = document.getElementById("uniqueThing").value;

    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;

    const funnyThing = document.getElementById("funnyThing").value;
    const shareSomething = document.getElementById("shareSomething").value;

    const link1 = document.getElementById("link1").value;
    const link2 = document.getElementById("link2").value;
    const link3 = document.getElementById("link3").value;
    const link4 = document.getElementById("link4").value;
    const link5 = document.getElementById("link5").value;

    const imgInput = document.getElementById("introImage");
    let imgURL = defaultImage;
    if (imgInput.files && imgInput.files[0]) {
        imgURL = URL.createObjectURL(imgInput.files[0]);
    }

    let coursesHTML = "";
    document.querySelectorAll(".courseRow").forEach((row) => {
        const inputs = row.querySelectorAll("input");
        if (inputs[0].value) {
            coursesHTML += `<li>${inputs[0].value} ${inputs[1].value}: ${inputs[2].value} — ${inputs[3].value}</li>`;
        }
    });

    form.style.display = "none";

    output.innerHTML = `
        <h2>Introduction</h2>
        <img src="${imgURL}" alt="Intro Image" style="max-width:250px;">
        <h6>${caption}</h6>
        <p>${personalStatement}</p>

        <ul>
            <li><b>Personal Background:</b> ${personalBackground}</li>
            <li><b>Professional Background:</b> ${professionalBackground}</li>
            <li><b>Academic Background:</b> ${academicBackground}</li>
            <li><b>Programming Background:</b> ${programmingBackground}</li>
            <li><b>Web Development Background:</b> ${webBackground}</li>
            <li><b>Personal Interests:</b> ${personalInterests}</li>
            <li><b>Something Unique:</b> ${uniqueThing}</li>
        </ul>

        <h3>Courses</h3>
        <ul>${coursesHTML}</ul>

        <p><i>"${quote}" - ${quoteAuthor}</i></p>
        
        ${funnyThing ? `<p><b>Funny Thing:</b> ${funnyThing}</p>` : ""}
        ${shareSomething ? `<p><b>Something to Share:</b> ${shareSomething}</p>` : ""}

        <p>${divider}</p>

        <h4>Links</h4>
        <ul>
            <li><a href="${link1}" target="_blank">${link1}</a></li>
            <li><a href="${link2}" target="_blank">${link2}</a></li>
            <li><a href="${link3}" target="_blank">${link3}</a></li>
            <li><a href="${link4}" target="_blank">${link4}</a></li>
            <li><a href="${link5}" target="_blank">${link5}</a></li>
        </ul>

        <p><b>Acknowledgment:</b> ${ackStatement} (${ackDate})</p>
        <p><b>Mascot:</b> The ${mascotAdj} ${mascotAnimal}</p>

        <button onclick="location.reload()">Reset Form</button>
    `;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildIntroPage();
});

clearBtn.addEventListener("click", () => {
    form.reset();
    document.querySelectorAll("input").forEach((i) => i.value = "");
    document.querySelectorAll("textarea").forEach((t) => t.value = "");
});

addCourseBtn.addEventListener("click", () => {
    const row = document.createElement("div");
    row.classList.add("courseRow");

    row.innerHTML = `
        <input placeholder="Dept">
        <input placeholder="Number">
        <input placeholder="Name">
        <input placeholder="Reason">
        <button type="button" class="delCourseBtn">X</button>
    `;

    coursesWrapper.appendChild(row);

    row.querySelector(".delCourseBtn").addEventListener("click", () => row.remove());
});