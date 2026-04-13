function convertLink() {
    const link = document.getElementById("driveLink").value;
    const match = link.match(/[-\w]{25,}/);

    if (!match) {
        alert("Please enter a valid Google Drive link.");
        return;
    }

    const fileId = match[0];
    const directLink = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;

    document.getElementById("result").innerText = directLink;
    document.getElementById("resultBox").style.display = "block";

    const img = document.getElementById("preview");
    img.src = directLink;
    img.style.display = "block";
    
    setTimeout(() => {
        img.classList.add("show");
    }, 100);

    document.getElementById("inputGroup").style.display = "none";
}

function resetConverter() {
    document.getElementById("inputGroup").style.display = "block";
    document.getElementById("resultBox").style.display = "none";
    document.getElementById("driveLink").value = "";

    const img = document.getElementById("preview");
    img.classList.remove("show");
    img.style.display = "none";
    img.src = "";
}

function copyLink() {
    const text = document.getElementById("result").innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("copyBtn");
        btn.innerText = "Copied!";
        setTimeout(() => {
            btn.innerText = "Copy Link";
        }, 1500);
    });
}

function toggleMode() {
    const body = document.body;
    const btn = document.querySelector('.toggle');

    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        btn.innerText = '☀️ Light';
    } else {
        body.classList.replace('dark', 'light');
        btn.innerText = '🌙 Dark';
    }
}

function toggleProfile() {
    const sidebar = document.getElementById("profileSidebar");
    sidebar.classList.toggle("active");
}