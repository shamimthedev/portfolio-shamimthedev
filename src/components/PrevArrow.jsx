import LeftIcon from '/left-icon.svg';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div 
            className="absolute top-1/2 left-[-50px] -translate-y-1/2 z-10 cursor-pointer 
                       bg-gray-200 hover:bg-blueish p-3 rounded-full shadow-md transition-all duration-300"
            onClick={onClick}
        >
            <img src={LeftIcon} alt="Previous" className="w-5 h-5" />
        </div>
    );
};

export default PrevArrow;
