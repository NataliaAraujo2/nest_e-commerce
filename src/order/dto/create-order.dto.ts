

export class CreateOrderDto {
  @Man

  @IsNumber()
  price: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsBoolean()
  status: boolean;
}
