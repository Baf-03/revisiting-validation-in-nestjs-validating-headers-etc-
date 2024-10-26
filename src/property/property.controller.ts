import { Body, Controller, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { HeaderDto } from 'src/dto/headers.dto';
import { authDto } from 'src/dto/register.dto';
import { RequestHeader } from 'src/pipes/request-header';

@Controller('property')
export class PropertyController {

    @Get("/:id")
    findone(
        @Param("id",ParseIntPipe) id:number,
        @Query("sort",ParseBoolPipe) sort:boolean,
        // @Headers() header :any
        @RequestHeader(new ValidationPipe({
            whitelist:true,
            validateCustomDecorators:true
        }))  header:HeaderDto
    ){  
        console.log(id);
        console.log(sort);
        return header
    }

    
    




    // @Post("/register")
    // @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    // register(
    //     @Body() registerDto:authDto
    // ){
    //     return registerDto
    // }


    //n NestJS, the combination of class-validator and class-transformer allows you to validate and transform incoming data in a structured way. Groups are a feature within class-validator that enables applying specific validations conditionally based on certain contexts (e.g., for CREATE vs UPDATE operations). Below is a breakdown of how to use groups effectively.
    
    @Post("/register")
    // @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,groups:["register"],always:true}))
    register(
        @Body() registerDto:authDto
    ){
        return registerDto
    }


    @Post("/login")
    // @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,groups:["login"],always:true}))
    login(
        @Body() loginDto:authDto
        
    ){
        return loginDto
    }
    
    

}
