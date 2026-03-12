import './DropDownComponent.css'
import arrow from '../assets/images/Bb.svg'


function DropDownComponent() {
    return (
        <div className='dropDownMenu'>
            <div className='dropDownRow'><span>Post Header</span><div><img src={arrow} alt="" /></div></div>
            <div className='dropDownRow'><span>Post Layout</span><div><img src={arrow} alt="" /></div></div>
            <div className='dropDownRow'><span>Share Buttons</span><div><img src={arrow} alt="" /></div></div>
            <div className='dropDownRow'><span>Gallery Post</span><div><img src={arrow} alt="" /></div></div>
            <div className='dropDownRow noBorder'><span>Video Post</span><div><img src={arrow} alt="" /></div></div>
        </div>
    )
}

export default DropDownComponent;