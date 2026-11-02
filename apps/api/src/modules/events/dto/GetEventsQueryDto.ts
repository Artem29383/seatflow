import {IsInt, IsOptional, IsString, Max, Min} from "class-validator";
import {Type} from "class-transformer";
import {ApiPropertyOptional} from "@nestjs/swagger";

export class GetEventsQueryDto {
    @ApiPropertyOptional({
        description: 'Название города',
        type: String,
        example: "Москва",
    })
    @IsOptional()
    @IsString()
    city?: string;

    @ApiPropertyOptional({
        description: 'Название категории',
        type: String,
        example: "Концерт",
    })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiPropertyOptional({
        description: 'Номер страницы, начиная с 1',
        type: Number,
        example: 2,
        default: 1,
        minimum: 1,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'Страница должна быть целым числом' })
    @Min(1, { message: 'Страница должна быть больше нуля' })
    page: number = 1;

    @ApiPropertyOptional({
        description: 'Лимит, начиная с 1 до 50',
        type: Number,
        example: 5,
        default: 10,
        minimum: 1,
        maximum: 50,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'Лимит должен быть целым числом' })
    @Min(1, { message: 'Лимит должен быть не меньше 1' })
    @Max(50, { message: 'Лимит должен быть не больше 50' })
    limit: number = 10;
}