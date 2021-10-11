import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(101,'Mobile',9000)).toBeTruthy();
  });
});
