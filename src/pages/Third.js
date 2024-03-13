import Heatmap from "../components/Heatmap";
import { useNavigate } from 'react-router-dom';

const Third =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Heatmap/>
    <button onClick={() => navigate('/Fourth')} className="ui-btn">
            <span>
              Linechart
            </span>
          </button>
    </>
    )
}

export default Third