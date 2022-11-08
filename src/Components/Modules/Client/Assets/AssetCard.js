import { FaBars } from "react-icons/fa";

const AssetCard = (props) => {
  const { eachUser } = props;

  const { pics, pname, uid, uname } = eachUser;

  return (
    <div className="flex flex-col drop-shadow-2xl border-3 border-gray-100 shadow-lg rounded-lg  ">
      <div className="">
        <img className="h-40 w-40" src={pics} alt={pname} />
        <div className="flex bg-gray-200 h-14 -mt-2 px-2 py-2 items-center justify-between  p-15">
          <p className="bg-slate-500 text-white font-semibold p-2 h-12 mt-2 pt-3  -ml-2">
            {uid}
          </p>
          <div className="flex flex-col ">
            <span>{pname}</span>
            <span>{uname}</span>
          </div>
          <FaBars className="fa-bars" />
        </div>
      </div>
    </div>
  );
};

export default AssetCard;

// .product-version {
//     margin-top: 11px;
//     background-color: #636363;
//     padding: 5px;
//     height: 42px;
//     margin-top: 0px;
//     margin-left: -8px;
//     padding-top: 10px;
//     color: #e3e3e3;
//     font-weight: bold;
//   }
