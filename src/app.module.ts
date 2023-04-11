import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [AuthModule, ProductModule, FilesModule,  MulterModule.register({
    dest: './uploads',
  }),
  FilesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
