import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getTotalPrice(): number {
        return this._items.reduce((acc: number, item: Buyable): number => acc + item.price, 0)
    }

    getDiscoutPrice(discout: number): number {
        return this.getTotalPrice() - this.getTotalPrice() * (discout / 100)
    }

    deleteItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}