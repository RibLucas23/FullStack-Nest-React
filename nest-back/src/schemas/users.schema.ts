import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Users {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;
  @Prop({
    required: true,
  })
  hash: string;
  @Prop({
    required: false,
  })
  hashedRt: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
