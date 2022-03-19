export interface Service {
    id: number,
    created: string,
    expressPrice: number,
    expressDeliveryDays: number,
    hasExpress: boolean,
    price: number,
    title: string,
    deliveryDays: number,
    description: string,
    disabled: boolean,
    typeService: number,
    user: number
}
