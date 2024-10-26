import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class authDto{

    @IsNotEmpty({groups:["register"],always:false})
    @IsString({groups:["register"],always:false})
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string

}