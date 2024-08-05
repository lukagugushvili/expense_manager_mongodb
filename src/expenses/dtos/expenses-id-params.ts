import { IsMongoId } from 'class-validator';

export class ExpensesIdParamsDto {
  @IsMongoId()
  id: string;
}
