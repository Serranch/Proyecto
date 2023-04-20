import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class UserInsertService{
    constructor(private http: HttpClient){}

    postFormData(formData: any){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json', 
        });
        return this.http.post('http://18.218.70.94:8000/users',formData);
    }

    
}