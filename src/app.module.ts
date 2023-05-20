import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { FavoriteModule } from './favorite/favorite.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [AuthModule, ProductModule, FilesModule,  MulterModule.register({
    dest: './uploads',
  }),
  FilesModule,
  CategoryModule,
  UserModule,
  AddressModule,
  FavoriteModule,
  CityModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
