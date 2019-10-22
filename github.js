class Github {
    constructor(){
        this.client_id = "46fe04be165fb865f0a4";
        this.client_secret = "39895b9e123353a531f1e3e78cd4e8414df9d548";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}