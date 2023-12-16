import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { User } from '../users/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Tuit, User])],
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
