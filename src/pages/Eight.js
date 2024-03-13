import Tablechart from "../components/Tablechart";
import { useNavigate } from 'react-router-dom';

const Eight =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Tablechart/>
    <button onClick={() => navigate('/Nineth')} className="ui-btn">
            <span>
              Tabletree
            </span>
          </button>
    </>
    )
}

export default Eight