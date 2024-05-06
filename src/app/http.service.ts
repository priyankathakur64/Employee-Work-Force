import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string='http://localhost:6070/api/'

  constructor(private http:HttpClient) { }

  getAllRecord(){
    return (this.http.get(`${this.baseUrl}getAllEmployee`));
  }

  getRecordById(id:any){
    return (this.http.get(`${this.baseUrl}getparticularEmployee/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getAllCountry`));
  }

  PostRecord(obj:any){
   return (this.http.post(`${this.baseUrl}addEmployees`,obj,{
      responseType:'text'
    }));
  }

  updateRecord(obj:any){
    return (this.http.put(`${this.baseUrl}updateEmployee`,obj,{
       responseType:'text'
     }));
   }
 
   deleteData(id:any){
     return (this.http.delete(`${this.baseUrl}deleteEmployee/${id}`,{
       responseType:'text'
     }));
   }

}