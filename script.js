const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const cssCode = document.getElementById("css-code");

function updateGradient() {
    const gradient = `linear-gradient(90deg, ${color1.value}, ${color2.value})`;
    document.body.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
}

generateBtn.addEventListener("click", updateGradient);
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cssCode.textContent);
    alert("CSS copied to clipboard!");
});

// Initialize with default gradient
updateGradient();
