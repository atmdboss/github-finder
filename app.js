document.getElementById("year").textContent = new Date().getFullYear();
const searchUser = document.getElementById("searchUser");
const github = new Github();
const ui = new UI();
searchUser.addEventListener("keyup", (e)=>{
    const userText = e.target.value;
    if(userText !== ""){
        github.getUser(userText).then((data)=> {
            if(data.profile.message === "Not Found"){
                ui.showAlert();
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else{
        ui.clearPage();
    }
    
})