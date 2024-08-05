import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ExpensesService],
})
export class ExpensesModule {}
