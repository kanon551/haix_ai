import BubbleChart from '../components/BubbleChart';
import BubbleMap from '../components/BubbleMap';
import ThreeDScatter from '../components/ThreeDScatter';
import TreeMap from '../components/TreeMap';


const Charts = () => {

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
             <div className="relative flex items-center justify-center rounded bg-white">
                  <BubbleChart/>
            </div>

            <div className="relative flex items-center justify-center rounded bg-white">
                <BubbleMap/>
            </div>

            <div className="relative flex items-center justify-center rounded bg-white">
                <ThreeDScatter/>
            </div>

            <div className="relative flex items-center justify-center rounded bg-white">
                <TreeMap/>
            </div>
    </div>
  )
}

export default Charts
