import Areachart from "../components/Areachart"
import { useNavigate } from 'react-router-dom';


const Home = () =>{
    const navigate = useNavigate();
    return( 
        <>
    <Areachart/>
    <button onClick={() => navigate('/Second')} className="ui-btn">
    <span>
      Barchart
    </span>
  </button>
        </>
)}

export default Home