import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const GeneratedTokenModal = ({ isOpen, onRequestClose }) => {
  const [generatedKey, setGeneratedKey] = useState("");
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/profile");
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className={
        "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.85)] lg:w-[930px] md:w-[700px] w-[411px] h-[283px] flex flex-col items-center justify-center border-[1px] border-gray-800 rounded-md p-4"
      }
      overlayClassName={
        "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      }
    >
      <h2 className="text-lg text-gray-50 font-IBM tracking-wider">
        ENTER YOUR PRIVATE KEY
      </h2>
      <input
        type="text"
        placeholder="RANDOM3348347i2301238123"
        value={generatedKey}
        onChange={(event) => setGeneratedKey(event.target.value)}
        className="lg:w-[793px] md:w-[600px] sm:w-[411px] h-[64px] px-6 py-4 my-8 font-IBM text-lg border-[1px] border-gray-900 rounded-lg text-gray-50 bg-black focus:ring-[#1010101A] focus:outline-[#1010101A]"
      />
      <button
        className="w-[183px] h-[42px] bg-[#FFFFFF1A] text-gray-50 font-IBM text-[16px] uppercase border-0.5 border-[#FFFFFF1A]"
        onClick={handleNavigation}
      >
        Continue
      </button>
    </Modal>
  );
};

export default GeneratedTokenModal;
