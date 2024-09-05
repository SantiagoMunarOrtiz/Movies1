import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [UsersModule, AuthModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
