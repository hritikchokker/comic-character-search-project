class SuperHero{
    constructor(){
        this.client_id = '435853113652040';
    }
    async getUser(searchName){
        const profileResponse = await fetch(`https://www.superheroapi.com/api.php/${this.client_id}/search/${searchName}`);
   
        const profile=await profileResponse.json({});

       return profile;
    }
}