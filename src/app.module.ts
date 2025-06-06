import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./modules/users/users.module";
import { AuthenticationService } from "./modules/authentication/authentication.service";

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
