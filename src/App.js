
import './App.css';
import ListGame from './profile/ListGame';
import MyProfile from './profile/MyProfile';
import NavBar from './profile/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let fullName = "Hamid Souhir"
  let bio = "My aim is to become a successful computer game developer ."
  let profession = "I'am web developper"
  const  handLeName =(fullName) =>alert(`my name is${fullName}`)

  const itemGame = [
    {
    imgSrc : 'https://www.leparisien.fr/resizer/K9_9A9CoZ_mO14BHQQBZ8xB8H6Q=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/CLPEH3CNPVDOHLHOMHA3KY7CKE.jpg',
    name : 'Horizon' ,
    price : ' 19.99 $',
  },
    {
      imgSrc : 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
      name : 'The Last of Us' ,
      price : ' 34.99 $',
    },
      {
        imgSrc : 'https://toutelaculture.com/wp-content/uploads/2013/03/beyond-two-souls-e3-1.jpg',
        name : 'Beyond' ,
        price : '10.99 $',
      },
      {
        imgSrc : 'https://image.api.playstation.com/pr/bam-art/139/697/ed07b816-f9c3-4c15-8752-18bf5eecc3de.jpg?w=620&thumb=false',
        name : 'Blood Hunt' ,
        price : ' 40.99 $',
      },
    ]
  return (
    <div className="App" >
      <NavBar/>
      <MyProfile x={fullName} y={bio} w ={profession} aln={handLeName}>
        <img src='https://image.api.playstation.com/vulcan/ap/rnd/202105/1813/DV0IXPHtc7JRTLoxsKAg0sJh.png' alt="game"width="300px"></img>
      </MyProfile>
      <ListGame data = {itemGame}/>
    </div>
  );
}

export default App;
