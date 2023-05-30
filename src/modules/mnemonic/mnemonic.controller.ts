import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { MnemonicService } from './mnemonic.service'
import { CreateMnemonicDto } from './dto/create-mnemonic.dto'
import { UpdateMnemonicDto } from './dto/update-mnemonic.dto'

@Controller('mnemonic')
export class MnemonicController {
  constructor(private readonly mnemonicService: MnemonicService) {}

  @Post()
  create(@Body() createMnemonicDto: CreateMnemonicDto) {
    return this.mnemonicService.create(createMnemonicDto)
  }

  @Get()
  findAll() {
    return this.mnemonicService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mnemonicService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMnemonicDto: UpdateMnemonicDto
  ) {
    return this.mnemonicService.update(+id, updateMnemonicDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id)

    return this.mnemonicService.remove(+id)
  }
}
