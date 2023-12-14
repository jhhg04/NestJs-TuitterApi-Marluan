import { Module } from '@nestjs/common';

import { TuitsModule } from './modules/tuits/tuits.module';

@Module({
  imports: [TuitsModule],
})
export class AppModule {}
