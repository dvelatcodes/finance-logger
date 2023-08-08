class Payment {
    constructor(public client:string, public detail:string, public price:number){}
    format()
    {
        return(`${this.client}'s ${this.detail} ${this.price} price`)
    }
}