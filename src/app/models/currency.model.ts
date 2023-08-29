export interface ICurrency {
    code: string,
    name: string,
    imageUrl: string,
    selected?: boolean,
    rate?:number
}

export interface IConvert {
    from: string,
    to: string,
    amount: number
}
export interface ICompare {
    from: string,
    to1: string,
    to2: string,
    amount: number
}
export interface IConvertRes {
    source: string,
    destination: string,
    amount: number
}
export interface ICompareRes {
    source: string,
    destination1: string,
    destination2: string,
    amount1: number,
    amount2: number
}

