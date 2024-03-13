import Tabletree from "../components/Tabletree";
import { useNavigate } from 'react-router-dom';

const Nineth =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Tabletree/>
    <button onClick={() => navigate('/Tenth')} className="ui-btn">
            <span>
              Treemap
            </span>
          </button>
    </>
    )
}

export default Nineth