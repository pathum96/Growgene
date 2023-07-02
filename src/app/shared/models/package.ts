export interface Package {
    id: string,
    itemName: string,
    minutes: number,
    sort: number,
    subTitle: string,
    unitOfMeasure: string,
    unitPrice: number
}

export interface Cleaner {
    id: string,
    count: number,
    displayOrder: number,
    displayText: string,
    image: string,
    isActive: boolean,
    items: Package[]
}

export interface PackagesData {
    title: string,
    itemTitle: string,
    items: Cleaner[]
}