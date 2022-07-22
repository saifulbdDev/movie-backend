import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({ versionKey: false })
export class Movie {
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
