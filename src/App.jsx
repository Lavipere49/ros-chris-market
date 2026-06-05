import { BrowserRouter as Router, Routes, Route,Link,} from "react-router-dom";
import Accueil from "./pages/Accueil";
import Panier from "./pages/Panier";
import Messages from "./pages/Messages";
import Promo from "./pages/Promo";
import Tendances from "./pages/Tendances";
import Nouveautes from "./pages/Nouveautes"
import Categories from "./pages/Categories"
import Compte from "./pages/Compte";
function App () {
  return(
    <Router>
    <header style={{ backgroundColor: "orange", padding: "20px"}}>
      <h1 style={{ color: "#fff"}}>Ros&Chris Market </h1>
      <p style={{ fontStyle: "italic"}}> Notre famille c'est vous </p>
      {/* Barre de navigation */}*
      <nav>
        <Link to="/">Acceuil</Link> |{" "}
        <Link to="/panier">Panier</Link> |{" "}
        <Link to="/messages">Messages</Link> |{" "}
        <Link to="/promo">Promo</Link> |{" "}
        <Link to="/tendances">Tendances</Link> |{" "}
        <Link to="/nouveautes">Nouveautes</Link> |{" "}
        <Link to="/Categories">Categories</Link>
        <Link to="/mon compte">Mon Compte</Link>
      </nav>
    </header>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Accueil/>} />
      <Route path="/panier" element={<Panier />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/tendances" element={<Tendances />} />
      <Route path="/nouveautes" element={<Nouveautes />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/mon-compte" element={<Mon Compte />} />
    </Routes>
    </Router>

  ) ;
}
export default App;