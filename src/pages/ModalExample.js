import { Modal } from '../components/Modal';
import { LargeProductListItem } from '../components/products/LargeProductListItem'

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

export const ModalExample = () => {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]}></LargeProductListItem>
      </Modal>
    </>
  )
};