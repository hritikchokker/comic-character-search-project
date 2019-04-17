const superHero =new SuperHero;
const views=new View;

document.getElementById('submitbutton').addEventListener('click',(e)=>{
     e.preventDefault();
     document.getElementById('searchname').value == '' ? alert("Enter a value first") : myFunction();
 });
 function myFunction(){
    let searchName=document.getElementById('searchname').value;
    console.log(searchName);
    superHero.getUser(searchName)
    .then(data => {
        if(data.response.message ==='error'){
            // console.log('user not found');
            views.clearProfile();
        }
        else{
            // console.log('user found',data.results);
            views.showProfile(data.results);
            // console.log(data.image);

        }
    })
   
 }