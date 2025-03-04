function addPost() {
    let input = document.getElementById("postInput").value;
    if (input.trim() === "") return;
    
    let postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `<h2>@user</h2><p>${input}</p>`;
    
    document.getElementById("posts").prepend(postDiv);
    document.getElementById("postInput").value = "";
}
