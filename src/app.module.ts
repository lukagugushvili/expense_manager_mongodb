import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongo:mongo@mongo.3wmf7zh.mongodb.net/?retryWrites=true&w=majority&appName=mongo',
    ),
    ExpensesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
