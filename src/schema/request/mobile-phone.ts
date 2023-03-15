import { IsNumber, IsString } from 'class-validator';

export class MobilePhoneSaveIn {
  @IsString()
  public model_name?: string;
  @IsString()
  public size?: string;
  @IsString()
  public spec?: string;
  @IsNumber()
  public ram?: number;
  @IsNumber()
  public rom?: number;
  @IsString()
  public seria_number?: string;
}

export class MobilePhoneModifyIn {
  @IsString()
  public id?: string;
  @IsString()
  public model_name?: string;
  @IsString()
  public size?: string;
  @IsString()
  public spec?: string;
  @IsNumber()
  public ram?: number;
  @IsNumber()
  public rom?: number;
  @IsString()
  public seria_number?: string;
}

export class MobilePhoneModifyInPatch {
  @IsString()
  public id?: string;
  @IsString()
  public model_name?: string;
}
