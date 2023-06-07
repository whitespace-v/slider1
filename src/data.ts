import image1 from './assets/1.png'
import image2 from './assets/2.png'
import image3 from './assets/3.png'
import image4 from './assets/4.png'
import image5 from './assets/5.png'

export interface ICarData{
    name: string, price: string, image: string
}
export const carData = [
    {name: 'Hyundai GENESIS X', price: '2 000 000', image: image1, filter: '/hyundai_gs_x'},
    {name: 'Toyota LC 200', price: '5 600 000', image: image2, filter: '/toyota_lc_200'},
    {name: 'Lexus GS460', price: '2 400 000', image: image3, filter: '/lexus_gs_460'},
    {name: 'Lexus IS350H', price: '4 700 000', image: image4, filter: '/lexus_is_350h'},
    {name: 'Lexus LX600', price: '18 200 000', image: image5, filter: '/lexus_lx_600'},
]



