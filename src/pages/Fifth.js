import Piechart from "../components/Piechart";
import { useNavigate } from 'react-router-dom';

const Fifth =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Piechart/>
    <button onClick={() => navigate('/Sixth')} className="ui-btn">
            <span>
              Radialbar
            </span>
          </button>
    </>
    )
}

export default Fifth