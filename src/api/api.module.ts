import { Module, Scope } from '@nestjs/common';
import { ApiController } from './api.controller';
import { DynDSModule } from 'src/dynds/dynds.module';

@Module({
    imports: [DynDSModule],
    controllers: [ApiController],
})
export class ApiModule {}
