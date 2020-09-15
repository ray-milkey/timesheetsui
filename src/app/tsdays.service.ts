/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import {TIMESHEETS_REST_URL} from '../environments/environment';

export interface TsDay {
    email: string;
    day: number;
    weekId: number;
    darpaMins: number;
    nonDarpaMins: number;
    sickMins: number;
    ptoMins: number;
    holidayMins: number;
}

@Injectable({
    providedIn: 'root'
})
export class TsdaysService {
    configUrl = TIMESHEETS_REST_URL + '/tsday';

    constructor(private http: HttpClient) {
    }

    getDays(email: string, weekId: number): Observable<TsDay> {
        console.log('Getting days for', email, weekId);
        return this.http.get<TsDay[]>(this.configUrl + '/' + email + '/' + weekId).pipe(
            mergeMap((items: TsDay[]) => from(items)),
            // tslint:disable-next-line:new-parens
            map((item: TsDay) => new class implements TsDay {

                email: string = item.email;
                day: number = Date.parse((item.day as unknown) as string);
                weekId: number = item.weekId;
                darpaMins: number = item.darpaMins;
                nonDarpaMins: number = item.nonDarpaMins;
                sickMins: number = item.sickMins;
                ptoMins: number = item.ptoMins;
                holidayMins: number = item.holidayMins;
            })
        );
    }
}
