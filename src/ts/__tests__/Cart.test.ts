import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Book from '../domain/Book';

test('Новая карточка должна быть пустой', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('Добавление карточки Movie', () => {
    const cart = new Cart();
    const movie = new Movie(1015, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventures'], '137 min. / 02:17');

    cart.add(movie);
    expect(cart.items.length).toBe(1);
});

test('Получение суммарной стоимости', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1015, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventures'], '137 min. / 02:17'));

    expect(cart.getTotalPrice()).toBe(3200)
});

test('Получение суммарной стоимости (с учётом скидки)', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1015, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventures'], '137 min. / 02:17'));

    expect(cart.getDiscoutPrice(10)).toBe(2880)
});

test('Удаление уже добавленного в корзину объекта по полю id', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1015, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventures'], '137 min. / 02:17'));

    cart.deleteItem(1015);
    cart.deleteItem(1008);

    expect(cart.items.length).toBe(1)
});