import { Cart } from './entities/cart.entity';

describe('Cart', () => {
  it('should be defined', () => {
    expect(new Cart()).toBeDefined();
  });
});
