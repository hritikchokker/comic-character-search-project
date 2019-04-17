class View {
    constructor() {
        this.profile = document.getElementById("profile");
    }
    showProfile(user) {
        let output = ` <div class="container-fluid">
            <div class="row bg-dark">`;
        user.forEach(id => {
            console.log(id.image);
            output += `
           
            <div class="col col-md-6 col-sm-4 col-lg-4">
         <div class="card bordered" style="width: 27rem; overflow:hidden;">
            <img src="${id.image.url}" class="card-img-top" alt="not found">
            <div class="card-body">
            <h4 class="text-center">Name: ${id.name}</h4>
               <div class="jumbotron text-center">
            <h3>Powerstats</h3>
            <ul class="list-group">
            <li class="list-group-item">intelligence: ${
                id.powerstats.intelligence
                }</li>
            <li class="list-group-item">strength: ${id.powerstats.strength}</li>
            <li class="list-group-item">speed: ${id.powerstats.speed}</li>
            <li class="list-group-item">durability: ${
                id.powerstats.durability
                }</li>
            <li class="list-group-item">power: ${id.powerstats.power}</li>
            <li class="list-group-item">combat: ${id.powerstats.combat}</li>
            </ul>
            </div>
            </div>
            </div>
            </div>
           
            `;
        });
        output += `</div></div>`
        this.profile.innerHTML = output;
    }
    clearProfile() {
        this.profile.innerHTML = "";
    }
}
