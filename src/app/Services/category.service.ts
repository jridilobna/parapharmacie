import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BaseUrl ='http://localhost:8080/categories' ;
  constructor( private http : HttpClient) { }
  //Post : 
  postCategory(category : Category) :Observable<Category>{
    return this.http.post<Category>(`${this.BaseUrl}/addCategory`, category)
  }
  //Put Category :
  putCategory(id :number , updatedCategory :Category) :Observable<Category>
  {
    return this.http.put<Category>(`${this.BaseUrl}/update/${id}`, updatedCategory)
  }
  //Delete Category : 
  deleteCtegory(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.BaseUrl}/deleteCategory/${id}`);
  }
  // Get All Categories : 
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BaseUrl}/getAllCategories`);
  }
   //Get products by category : 
   getProductsByategory(id :number ) :Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BaseUrl}/getProductsByCategory/${id}`);

  }
  // Get category by ID : 
  getCtegoryById(id : number ): Observable<Category>{
    return this.http.get<Category>(`${this.BaseUrl}/getCategoryById/${id}`) ;
  }
 
}
