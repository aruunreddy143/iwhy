import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TestService {
    url: string;
    saveAssistanceUrl: string;
    sameDayUrl: string;
    constructor(private http: HttpClient) {
        this.url = "http://localhost:5000/airports/list";
        this.saveAssistanceUrl = "http://localhost:5000/airports/saveAssistance";
        this.sameDayUrl = "http://localhost:5000/airports/sameDayTravelling";
    }

    getService() {
        console.log('get service');
        return this.http.post(this.url, {'city':'Hyd'});
    }
    postService(obj) {
        console.log('get service');
        return this.http.post(this.url, obj);
    }
    saveAssistance(obj) {
        return this.http.post(this.saveAssistanceUrl, obj);
    }

    getSameDayService() {
        console.log('same Day service');
        return this.http.get(this.sameDayUrl);
    }

}
