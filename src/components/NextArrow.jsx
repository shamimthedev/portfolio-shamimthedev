import RightIcon from '/right-icon.svg'

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer' onClick={onClick}>
            <img src={RightIcon} alt="" className='w-full'/>
        </div>
    )
}

export default NextArrow