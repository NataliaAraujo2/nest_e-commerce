/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from './category.providers';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
// eslint-disable-next-line prettier/prettier

@Module({
  imports: [DatabaseModule],
  providers: [...categoryProviders, CategoryService],
  controllers: [CategoryController],
})

export class CategoryModule {}
