import {loader} from '../assets'

const Loader = () => (
  <div className="w-full felx justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">{"Loading..." }</h1>
  </div>
);

export default Loader;
