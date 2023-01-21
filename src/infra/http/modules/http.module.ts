import { CreateUser } from '@application/use-cases/create-user';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UsersController } from '../controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUser],
})
export class HttpModule {}
