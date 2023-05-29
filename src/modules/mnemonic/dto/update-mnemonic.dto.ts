import { PartialType } from '@nestjs/mapped-types';
import { CreateMnemonicDto } from './create-mnemonic.dto';

export class UpdateMnemonicDto extends PartialType(CreateMnemonicDto) {}
