import { Module } from '@nestjs/common';

import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';

@Module({
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
