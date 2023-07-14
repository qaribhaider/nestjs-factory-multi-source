import { Injectable } from '@nestjs/common';
import { DataSource } from '../interfaces/datasource.interface';

@Injectable()
export class Source03Service implements DataSource {
    getData() {
        return 'Data from Source03';
    }
}
