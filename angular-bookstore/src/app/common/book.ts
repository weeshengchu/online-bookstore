// 13/75: Create a model class for Book entity
// ng g class common/book --spec false

export class Book {
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  createdOn: Date;
  updatedOn: Date;
}
