import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property/property.controller';
import { APP_PIPE } from '@nestjs/core';


@Module({
  imports: [],
  controllers: [PropertyController],
  providers: [{provide:APP_PIPE,useValue:new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    always:true
  })}],
})

export class AppModule {}
