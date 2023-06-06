import {ICarData} from "../data";

export interface IHandler{
    prev: number,
    next: number,
    current: number,
    carData: ICarData[]
    setDirection: (i: number) => void,
    setPrev:(i: number) => void,
    setNext:(i: number) => void,
    setCurrent:(i: number) => void
    offsetX: number,
    setOffsetX: (i:number) => void
}
export const nextHandler = (
    {prev, next, current, carData, setDirection, setPrev, setNext, setCurrent,offsetX,setOffsetX}: IHandler
) => {
    setDirection(+1)
    setOffsetX(offsetX + 200)
    //width + gap
    if (current <  carData.length -1){
        setCurrent(current+1)
        if (prev === carData.length-1) {
            setPrev(0)
        } else{
            setPrev(prev+1)
        }
    }
    if (next < carData.length-1){
        setNext(next+1)
    } else {
        setNext(0)
    }
    if (current === carData.length -1) {
        setCurrent(0)
        setPrev(carData.length -1)
    }
}
export const prevHandler = (
    {
        prev, next, current, carData, setDirection, setPrev, setNext, setCurrent, offsetX,setOffsetX
    }: IHandler
) => {
    //width - gap
    setOffsetX(offsetX - 200)
    setDirection(-1)
    if (current > 0){
        setCurrent(current -1)
    } else {
        setCurrent(carData.length-1)
    }
    if (prev > 0) {
        setPrev(prev -1)
    } else{
        setPrev(carData.length-1)
    }
    if (next > 0) {
        setNext(next -1)
    } else {
        setNext(carData.length-1)
    }
}
