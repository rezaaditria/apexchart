import Treemap from "../components/Treemap";
import { useNavigate } from 'react-router-dom';

const Tenth =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Treemap/>
    <button onClick={() => navigate('/Last')} className="ui-btn">
            <span>
              Dashboard
            </span>
          </button>
    </>
    )
}

export default Tenth