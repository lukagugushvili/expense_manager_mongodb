import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses } from './entities/expenses-entities';
import { Model } from 'mongoose';
import { CreateExpenseDto } from './dtos/create-expense-dto';
import { UpdateExpenseDto } from './dtos/update-expense-dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expenses.name) private expensesModel: Model<Expenses>,
  ) {}

  // create expenses model
  async create(createExpenseDto: CreateExpenseDto): Promise<Expenses> {
    try {
      const createExpense = await this.expensesModel.create(createExpenseDto);
      const saveExpense = await createExpense.save();
      return saveExpense;
    } catch (error) {
      console.log('Error creating expenses:', error);
      throw new HttpException(
        'could not save the expense',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // Get all expense
  getAll(): Promise<Expenses[]> {
    return this.expensesModel.find().exec();
  }

  // get expense by id
  async getById(id: string): Promise<Expenses> {
    const findById = await this.expensesModel.findById(id).exec();

    if (!findById) {
      throw new NotFoundException(`Expense with ID: ${id} not found`);
    }

    return findById;
  }

  // Update the expense details with the ID found
  async update(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expenses> {
    const updateExpense = await this.expensesModel
      .findByIdAndUpdate(id, updateExpenseDto, { new: true })
      .exec();

    if (!updateExpense) {
      throw new NotFoundException(`Expense with ID: ${id} not found`);
    }

    return updateExpense;
  }

  //found Expense ID and remove
  async remove(id: string): Promise<Expenses> {
    const deleteById = await this.expensesModel.findByIdAndDelete(id).exec();

    if (!deleteById) {
      throw new NotFoundException(`Expense with ID: ${id} not found`);
    }

    return deleteById;
  }
}
