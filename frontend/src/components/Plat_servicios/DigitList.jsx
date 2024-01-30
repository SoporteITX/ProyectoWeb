import DigitItem from './DigitItem'
import { TransDigit } from '../../assets/data/faqs'

const DigitList = () => {
  return (
    <ul className='mt-[38px]'>
            {TransDigit.map((item, index) => <DigitItem item={item} key={index} />)}
        </ul>
  )
}

export default DigitList