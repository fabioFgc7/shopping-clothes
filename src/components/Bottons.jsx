import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Bottons = ({ icons, isBotton, handleIcons }) => {
  return (
    <button
      className='fixed top-3 left-2 md:hidden block z-30 '
      onClick={handleIcons}>
      <FontAwesomeIcon
        className={`text-2xl ${isBotton ? "text-red-500" : "text-white"}`}
        icon={icons}
      />
    </button>
  );
};
