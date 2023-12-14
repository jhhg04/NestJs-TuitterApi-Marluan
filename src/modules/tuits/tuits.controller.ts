import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  // @Get() // first method
  // getTuits(): string {
  //   return 'Hello from Tuiter';
  // }

  // @Get() // sin comunicacion con el service
  // getTuits(@Query() filterQuery): string {
  //   const { searchTerm, orderBy } = filterQuery;
  //   return `All ${searchTerm} tuits ordered by ${orderBy}`;
  // }

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { searchTerm, orderBy } = filterQuery;
    return this.tuitService.getTuits();
  }

  // @Get(':id') // tuits/1  - sin comunicacion con el service
  // //getTuit(@Param() params){ // sin destructurar
  // getTuit(@Param('id') id: string): string {
  //   //destructurando id
  //   return `Your tuit id is ${id}`;
  // }

  @Get(':id')
  getTuit(@Param('id') id: string): Tuit {
    const tuit = this.tuitService.getTuit(id);
    if (!tuit) {
      throw new NotFoundException('Resource not found');
    }
    return tuit;
  }

  // @Post() // sin comunicacion con el service
  // @HttpCode(HttpStatus.NO_CONTENT)
  // // createTuit(@Body() body){ // sin destructurar
  // createTuit(@Body('message') message: string): string {
  //   //destructurando message
  //   return `Your tuit was ${message}`;
  // }

  @Post()
  createTuit(@Body() message: CreateTuitDto): void {
    console.log(message instanceof CreateTuitDto);
    return this.tuitService.createTuit(message);
  }

  // @Patch('/:id') // sin comunicacion con el service
  // updateTuit(@Param('id') id: string, @Body() tuit): string {
  //   //destructurando id
  //   return `The tuit ${id} has been updated`;
  // }

  @Patch('/:id')
  updateTuit(@Param('id') id: string, @Body() tuit: UpdateTuitDto): Tuit {
    return this.tuitService.updateTuit(id, tuit);
  }

  // @Delete('/:id') // sin comunicacion con el service
  // deleteTuit(@Param('id') id: string): string {
  //   //destructurando id
  //   return `The tuit ${id} has been deleted`;
  // }

  @Delete('/:id')
  removeTuit(@Param('id') id: string): void {
    return this.tuitService.removeTuit(id);
  }
}
