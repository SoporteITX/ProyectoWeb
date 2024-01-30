import ProtectItem from './ProtectItem'
import { Protec_TI } from '../../assets/data/faqs'

const ProtectList = () => {
    return (
        <ul className='mt-[38px]'>
            {Protec_TI.map((item, index) => <ProtectItem item={item} key={index} />)}
        </ul>
    )
}

export default ProtectList