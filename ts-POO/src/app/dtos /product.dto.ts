import { Products} from '../models/product.model';
import { Category} from '../models/category.model';

export interface CreateProductDto extends Omit<Products, 'id'  | 'category'>{
  categoryId: Category['id'];
}


export interface UpdateProductDto extends Partial<CreateProductDto> {}
