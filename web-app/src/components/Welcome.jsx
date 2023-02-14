import { FaEthereum } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
const companyCommonStyles = `border-[0.5px] flex justify-center items-center min-h-[70px] border-gray-400 font-light`;

const FormInput = ({ type, placeholder }) => {
  return (
    <div className="w-full ">
      <input
        placeholder={placeholder}
        type={type}
        className="w-full h-8 outline-none bg-[#334155]   rounded-sm my-2 p-2 text-sm border-none"
      />
    </div>
  );
};

export default function Welcome() {
  return (
    <div className="flex w-full text-white justify-center items-center">
      <div className="flex flex-row justify-start items-start  p-20">
        <div className="flex-1 mr-10">
          <h1 className="text-5xl">
            Send Crypto <br /> aross the world
          </h1>
          <p className="text-base mt-5 w-9/12">
            explore the crypto world. Buy and sell cryptocrrencies easily on the
            world.
          </p>
          <div className="w-full grid grid-cols-3 mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="relative gradient-bg-eth-card w-72 h-40 rounded-[20px]">
            <div className="absolute top-4 left-4 p-1 border-[2px] rounded-full">
              <FaEthereum className="text-md" />
            </div>
            <div className="absolute top-2 right-2 p-1 ">
              <AiOutlineInfoCircle className="text-lg" />
            </div>

            <div className="absolute bottom-4 left-4 flex flex-col">
              <span>...</span>
              <span>Ethereum</span>
            </div>
          </div>
          <div className="w-96 mt-10 p-5 bg-slate-900 rounded-lg">
            <FormInput placeholder="Address to" />
            <FormInput placeholder="Amount(ETH)" />
            <FormInput placeholder="Keyword" />
            <FormInput placeholder="Message" />
            <div className="w-full h-[1px] bg-gray-400 my-2"></div>
            <button type='button' className="w-full mt-2 p-2 border-[1px] border-gray-400 rounded-full">Send now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
