export interface ICurrency {
    currencyCode: string,
    currencyName: string,
    countryCode: string,
    countryName: string,
    status: string,
    availableFrom: string,
    availableUntil: string,
    icon: string,
    selected?: boolean
}