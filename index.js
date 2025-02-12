const disclosureBtn = document.getElementById("disclosureBtn");
const shareOptions = document.getElementById("shareOptions");

disclosureBtn.addEventListener("click", () => {
  shareOptions.classList.toggle("hidden");

  const isExpanded = disclosureBtn.getAttribute("aria-expanded") === "true";
  disclosureBtn.setAttribute("aria-expanded", !isExpanded);
  shareOptions.setAttribute("aria-hidden", isExpanded);
});

// Escape key handler
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !shareOptions.classList.contains("hidden")) {
    shareOptions.classList.add("hidden");
    disclosureBtn.setAttribute("aria-expanded", "false");
  }
});
