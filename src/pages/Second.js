import Barchart from "../components/Barchart"
import { useNavigate } from 'react-router-dom';

const Second =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Barchart/>
    <button onClick={() => navigate('/Third')} className="ui-btn">
            <span>
              Heatmap
            </span>
          </button>
    </>
    )
}

export default Second