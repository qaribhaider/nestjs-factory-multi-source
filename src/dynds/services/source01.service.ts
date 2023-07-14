import { Inject, Injectable, Scope } from '@nestjs/common';
import { DataSource } from '../interfaces/datasource.interface';

@Injectable()
export class Source01Service implements DataSource {
    getData() {
        return 'Data from Source01';
    }
}
