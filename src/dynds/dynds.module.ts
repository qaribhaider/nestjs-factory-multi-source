import { Module, Scope } from '@nestjs/common';
import { DataSourceToken } from 'src/dynds/constants/dynds.constants';
import { DataSourceFactory } from 'src/dynds/dynds.factory';
import { Source01Service } from './services/source01.service';
import { Source02Service } from './services/source02.service';
import { Source03Service } from './services/source03.service';

@Module({
    providers: [
        {
            provide: DataSourceToken,
            scope: Scope.REQUEST,
            useFactory: (dataSourceFactory: DataSourceFactory) => {
                return dataSourceFactory.create();
            },
            inject: [DataSourceFactory],
        },
        DataSourceFactory,
        Source01Service,
        Source02Service,
        Source03Service,
    ],
    exports: [DataSourceToken],
})
export class DynDSModule {}
