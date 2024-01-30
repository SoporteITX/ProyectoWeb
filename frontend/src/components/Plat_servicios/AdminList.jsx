import AdminItem from './AdminItem'
import { adminTI } from '../../assets/data/faqs'

const AdminList = () => {
    return (
        <ul className='mt-[38px]'>
            {adminTI.map((item, index) => <AdminItem item={item} key={index} />)}
        </ul>
    )
}

export default AdminList