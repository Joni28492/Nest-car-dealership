import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';


@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  exports:[],
  controllers: [],
  providers: [],
})
export class AppModule {}
