import { Controller, Get, Inject } from '@nestjs/common';
import { DataSourceToken } from 'src/dynds/constants/dynds.constants';
import { DataSource } from 'src/dynds/interfaces/datasource.interface';

@Controller('api')
export class ApiController {
    constructor(@Inject(DataSourceToken) private readonly dataSource: DataSource) {}

    @Get('/data')
    fetchData() {
        return this.dataSource.getData();
    }
}
