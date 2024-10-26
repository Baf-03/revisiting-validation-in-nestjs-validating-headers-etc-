

//here we are making our custom decorator 

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";


//execution context is a class which provides u information about current context of execution within yoour application we can do many things with the execution context for example we can access to the current req inside our application so now let me show u 
export const RequestHeader = createParamDecorator(
    async(targetDto:any,ctx:ExecutionContext)=>{
        //by chaining this two functions  we can get access to the current http request jis mae sab hota hae headers wagera sab 
        const headers = ctx.switchToHttp().getRequest().headers;
        const dto = plainToInstance(targetDto,headers,{
            excludeExtraneousValues:true
        }) 

        await validateOrReject(dto);

        return dto 
})







