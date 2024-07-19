import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Dogs {
  @Prop({
    required: true,
    trim: true,
  })
  name: string;
  @Prop({
    trim: true,
  })
  description: string;
  @Prop({
    required: true,
    trim: true,
  })
  raze: string;
  @Prop({
    required: true,
    trim: true,
  })
  location: string;
  @Prop({
    required: true,
    trim: true,
  })
  size: string;
  @Prop({
    required: true,
    trim: true,
  })
  age: string;
  @Prop({
    required: true,
    trim: true,
  })
  gender: string;
  @Prop({
    required: true,
    trim: true,
  })
  image: string;
}

export const DogsSchema = SchemaFactory.createForClass(Dogs);
