import { Injectable } from '@nestjs/common';
import { CreateMnemonicDto } from './dto/create-mnemonic.dto';
import { UpdateMnemonicDto } from './dto/update-mnemonic.dto';

@Injectable()
export class MnemonicService {
  create(createMnemonicDto: CreateMnemonicDto) {
    return 'This action adds a new mnemonic';
  }

  findAll() {
    return `This action returns all mnemonic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mnemonic`;
  }

  update(id: number, updateMnemonicDto: UpdateMnemonicDto) {
    return `This action updates a #${id} mnemonic`;
  }

  remove(id: number) {
    return `This action removes a #${id} mnemonic`;
  }
}
