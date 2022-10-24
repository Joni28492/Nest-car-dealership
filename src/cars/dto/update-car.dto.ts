import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";



export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsOptional()
    readonly brand?:string;

    @IsString()
    @IsOptional()
    readonly model?:string;

}