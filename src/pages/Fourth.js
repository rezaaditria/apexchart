import Linechart from "../components/Linechart";
import { useNavigate } from 'react-router-dom';

const Fourth =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Linechart/>
    <button onClick={() => navigate('/Fifth')} className="ui-btn">
            <span>
              Heatmap
            </span>
          </button>
    </>
    )
}

export default Fourth