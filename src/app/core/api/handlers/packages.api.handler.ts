import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "../http.service";
import { PackagesData } from "src/app/shared/models/package";

@Injectable({
    providedIn: 'root'
})
export class PackagesAPIHandler {
    private readonly baseApiUrl = environment.apiUrl;
    private readonly endpoint = 'sampleTestData';
    private readonly api = `${this.baseApiUrl}/${this.endpoint}`;

    constructor(private httpService: HttpService) {
    }

    getPackageData(): Promise<PackagesData> {
        return new Promise((resolve, reject) => {
            return this.httpService.get(this.api)
            .subscribe(
                (res) => {
                    if (res.status === 'success') {
                        resolve(res.data);
                    } else {
                        reject(null);
                    }
                },
                (res: HttpErrorResponse) => {
                    reject(res);
                }
            );
        });
    }
}