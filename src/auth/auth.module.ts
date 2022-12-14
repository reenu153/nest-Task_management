import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';
import { User } from './user.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([User]),
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret:'topSecret51',
            signOptions:{
                expiresIn:3600,
            },
        }),
        ],
     
     providers:[AuthService, JwtStrategy],
     controllers:[AuthController],
     exports:[PassportModule,JwtModule],
})
export class AuthModule {}
