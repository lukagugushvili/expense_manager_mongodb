import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dtos/create-expense-dto';
import { Expenses } from './entities/expenses-entities';
import { ExpensesIdParamsDto } from './dtos/expenses-id-params';
import { UpdateExpenseDto } from './dtos/update-expense-dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto): Promise<Expenses> {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  getAll(): Promise<Expenses[]> {
    return this.expensesService.getAll();
  }

  @Get(':id')
  getById(
    @Param() expensesIdParamsDto: ExpensesIdParamsDto,
  ): Promise<Expenses> {
    const { id } = expensesIdParamsDto;
    return this.expensesService.getById(id);
  }

  @Put(':id')
  update(
    @Param() expensesIdParamsDto: ExpensesIdParamsDto,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expenses> {
    const { id } = expensesIdParamsDto;
    return this.expensesService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param() expensesIdParamsDto: ExpensesIdParamsDto): Promise<Expenses> {
    const { id } = expensesIdParamsDto;
    return this.expensesService.remove(id);
  }
}
