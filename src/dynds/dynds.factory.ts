import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Source01Service } from './services/source01.service';
import { Source02Service } from './services/source02.service';
import { Source03Service } from './services/source03.service';

@Injectable({ scope: Scope.REQUEST })
export class DataSourceFactory {
    constructor(
        @Inject(REQUEST) private request: Request,
        private source01Service: Source01Service,
        private source02Service: Source02Service,
        private source03Service: Source03Service,
    ) {}

    create() {
        const sourceParam = this.request?.query?.source;
        switch (sourceParam) {
            case 'source01':
                return this.source01Service;
            case 'source02':
                return this.source02Service;
            case 'source03':
                return this.source03Service;
            default:
                throw new Error(`Invalid data source: ${sourceParam}`);
        }
    }
}
