function convertLink() {
    var link = document.getElementById("driveLink").value;
    var match = link.match(/\/d\/(.*?)\//);

    if (!match) {
        alert("Invalid link");
        return;
    }

    var fileId = match[1];
    var directLink = "https://drive.google.com/thumbnail?id=" + fileId + "&sz=w1000";

    document.getElementById("result").innerText = directLink;
    document.querySelector(".result-box").style.display = "block";

var img = document.getElementById("preview");
var placeholder = document.getElementById("placeholder");

img.src = directLink;
img.style.display = "block";
placeholder.style.display = "none";
}

function copyLink() {
    var text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text).then(() => {
        document.getElementById("copyBtn").innerText = "Copied!";
        setTimeout(() => {
            document.getElementById("copyBtn").innerText = "Copy";
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