import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Articles {
  @Prop({
    required: true,
    trim: true,
  })
  title: string;
  @Prop({
    required: true,
    trim: true,
  })
  description: string;
  @Prop({
    trim: true,
  })
  imgUrl: string;
}

export const ArticlesSchema = SchemaFactory.createForClass(Articles);
