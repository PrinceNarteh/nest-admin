import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    try {
      const jwt = req.cookies['jwt'];
      return this.jwtService.verify(jwt);
    } catch (error) {
      return false;
    }
  }
}
