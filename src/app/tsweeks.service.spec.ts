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

import {TestBed} from '@angular/core/testing';

import {TsweeksService} from './tsweeks.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OAuthModule} from 'angular-oauth2-oidc';

describe('TsweeksService', () => {
    let service: TsweeksService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                OAuthModule.forRoot()
            ]
        });
        service = TestBed.inject(TsweeksService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
