import Scatterplot from "../components/Scatterplot";
import { useNavigate } from 'react-router-dom';

const Seventh =()=>{
    const navigate = useNavigate();
    return (
    <>
    <Scatterplot/>
    <button onClick={() => navigate('/Eight')} className="ui-btn">
            <span>
              Table chart
            </span>
          </button>
    </>
    )
}

export default Seventh