class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }
    showProfile(user){
        this.profile.innerHTML = `<div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-block btn-primary mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    showAlert(user){
        this.clearAlert();
        const div = document.createElement("div");
        div.className = "alert alert-danger text-center";
        div.appendChild(document.createTextNode(`User is not found`))
        const container = document.querySelector(".searchContainer");
        const search = document.querySelector(".search");
        container.insertBefore(div, search);
        setTimeout(()=>{this.clearAlert()}, 3000);
    }
    clearAlert(){
        const alert = document.querySelector(".alert-danger");
        if(alert){
            alert.remove();
        }
    }
    clearPage(){
        this.profile.innerHTML = "";
    }
    showRepos(rep){
        const repos = document.getElementById("repos");
        let output = "";
        rep.forEach((repo)=>{
            output += `
            <div class="card bard-body p-2 mb-2">
                <div class="row">
                    <div class="col-md-9">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-3">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });
        repos.innerHTML = output; 
    }
}