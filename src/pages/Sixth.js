import Radialbar from "../components/Radialbar";
import { useNavigate } from 'react-router-dom';

const Sixth =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Radialbar/>
    <button onClick={() => navigate('/Seventh')} className="ui-btn">
            <span>
              Scatterplot
            </span>
          </button>
    </>
    )
}

export default Sixth