import {IsInt, IsOptional, IsString, Max, Min} from "class-validator";
import {Type} from "class-transformer";

export class GetEventsQueryDto {
    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'Страница должна быть целым числом' })
    @Min(1, { message: 'Страница должна быть больше нуля' })
    page: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'Лимит должен быть целым числом' })
    @Min(1, { message: 'Лимит должен быть не меньше 1' })
    @Max(50, { message: 'Лимит должен быть больше 50' })
    limit: number = 10;
}