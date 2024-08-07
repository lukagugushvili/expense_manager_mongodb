import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Expenses {
  @Prop({ require: true })
  model: string;

  @Prop({ require: true })
  price: number;

  @Prop({ require: true })
  year: number;
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);
