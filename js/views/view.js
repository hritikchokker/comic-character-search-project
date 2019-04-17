class View{
    constructor(){
        this.profile=document.getElementById('profile');

    }
    showProfile(user){
        let output;
        user.forEach(id => {
            console.log(id.image);
            output += `
            <div class="container">
                <img class="img-fluid" src="${id.image.url}">
            </div>
            `;
        });
         this.profile.innerHTML = output;
}

}

