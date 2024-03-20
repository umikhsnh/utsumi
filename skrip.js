function toggleSkillInfo(index) {
    var skillInfo = document.getElementsByClassName("skill-info")[index];
    if (skillInfo.style.display === "none" || skillInfo.style.display === "") {
        skillInfo.style.display = "block";
    } else {
        skillInfo.style.display = "none";
    }
}

function displayAlert() {
    alert("Hallo, nama saya Umi Khasanah Senang belajar membuat web!");
}

function submitComment() {
    var comment = document.getElementById("comment").value;
    // Handle comment submission, e.g., send it to a server
    console.log("Submitted comment: ", comment);
}
