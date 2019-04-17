class View{
    constructor(){
        this.profile=document.getElementById('profile');

    }
    showProfile(user){
        this.profile.innerHTML=`
        <h1>${user.results}</h1>
        `;
    }
}