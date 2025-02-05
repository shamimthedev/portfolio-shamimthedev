import RightIcon from '/right-icon.svg';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div 
            className="absolute top-1/2 right-[-50px] -translate-y-1/2 z-10 cursor-pointer 
                       bg-gray-200 hover:bg-blueish p-3 rounded-full shadow-md transition-all duration-300"
            onClick={onClick}
        >
            <img src={RightIcon} alt="Next" className="w-5 h-5" />
        </div>
    );
};

export default NextArrow;
