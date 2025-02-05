import LeftIcon from '/left-icon.svg'

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
            <img src={LeftIcon} alt="" className='w-full'/>
        </div>
    )
}

export default PrevArrow