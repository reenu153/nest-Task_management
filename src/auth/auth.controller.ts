import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialDto } from './auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    signUp(@Body() authCredentialDto:AuthCredentialDto):Promise<void>{
        return this.authService.createuser(authCredentialDto);
    }

    @Post('/signin')
    signIn(@Body() authCredentialDto:AuthCredentialDto):Promise<{accessToken:string}>{
        return this.authService.signIn(authCredentialDto);
    }
}
