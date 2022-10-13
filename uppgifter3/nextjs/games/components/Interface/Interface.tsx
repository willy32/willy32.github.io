export interface Games {
    id: number,
    name: string,
    websiteUrl: string,
    releaseDate: number,
    price: number,
    companyId: number
}

export interface Company {
    id:number,
    name:string,
    websiteUrl:string,
    country:string
}