document.addEventListener("DOMContentLoaded", () => {
  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("user", username);
      window.location.href = "dashboard.html";
    });
  }

  // DASHBOARD
  const userNameEl = document.getElementById("userName");
  if (userNameEl) {
    const user = localStorage.getItem("user") || "User";
    userNameEl.textContent = user;

    const eduEl = document.getElementById("edu");
    const skillsEl = document.getElementById("skills");
    const eduInput = document.getElementById("eduInput");
    const skillsInput = document.getElementById("skillsInput");
    const saveBtn = document.getElementById("saveProfile");

    // Load saved profile
    const savedEdu = localStorage.getItem("edu");
    const savedSkills = localStorage.getItem("skills");
    if (savedEdu) eduEl.textContent = savedEdu;
    if (savedSkills) skillsEl.textContent = savedSkills;

    saveBtn.addEventListener("click", () => {
      const eduVal = eduInput.value.trim();
      const skillsVal = skillsInput.value.trim();
      if (eduVal) {
        localStorage.setItem("edu", eduVal);
        eduEl.textContent = eduVal;
      }
      if (skillsVal) {
        localStorage.setItem("skills", skillsVal);
        skillsEl.textContent = skillsVal;
      }
      alert("Profile saved!");
    });

    // Recommendations
    const careers = ["Software Developer", "Data Analyst", "UX Designer"];
    const list = document.getElementById("careerList");
    careers.forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      list.appendChild(li);
    });
  }

  // CONTACT FORM
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value;
      const email = document.getElementById("contactEmail").value;
      document.getElementById("contactStatus").textContent =
        Thanks ${name}! We'll reply to ${email} soon.;
      contactForm.reset();
    });
  }
});