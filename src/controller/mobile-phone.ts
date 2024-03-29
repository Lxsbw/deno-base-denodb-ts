import { BaseController, Controller, Get, Post, Put, Delete, Patch } from 'dero';
import { ApiDocument, ApiOperation, ApiResponse, ApiParameter, ApiRequestBody } from 'dero_swagger';
import mobilePhoneService from '../service/mobile-phone.ts';
import { MobilePhoneSaveIn, MobilePhoneModifyIn, MobilePhoneModifyInPatch } from '../schema/request/mobile-phone.ts';

@ApiDocument({
  name: 'MobilePhone',
  description: 'MobilePhone description'
})
@Controller('/api/mobile-phone')
class MobilePhoneController extends BaseController {
  @ApiParameter({ name: 'id', in: 'query', description: 'id' })
  @ApiParameter({ name: 'model_name', in: 'query', description: '手机型号' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: '查找', description: '查找' })
  @Get('/findall')
  async findAll() {
    const employees = await mobilePhoneService.findAll({});
    // console.log(employees);
    return employees;
  }

  @ApiParameter({ name: 'id', in: 'path', required: true, description: 'id' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: 'id查找', description: 'id查找' })
  @Get('/find/:id')
  async findById() {
    const { id } = this.request.params;
    console.log('id:' + id);
    const employee = await mobilePhoneService.findById(id);
    // console.log(employee);
    return employee;
  }

  @ApiRequestBody({
    description: '创建手机-输入参数',
    required: true,
    schema: MobilePhoneSaveIn
  })
  @ApiResponse(201, { description: 'Created' })
  @ApiOperation({ summary: '添加手机', description: '添加手机' })
  @Post('/create')
  async save() {
    console.log(JSON.stringify(this.request.parsedBody));
    const result = await mobilePhoneService.save(this.request.parsedBody);
    console.log('insert employee:' + result);
    return { id: result };
  }

  @ApiRequestBody({
    description: '修改手机-输入参数',
    required: true,
    schema: MobilePhoneModifyIn
  })
  @ApiResponse(201, { description: 'Updated' })
  @ApiOperation({ summary: '更新手机', description: '更新手机' })
  @Put('/update')
  async update() {
    console.log(JSON.stringify(this.request.parsedBody));
    const { id } = this.request.parsedBody;
    const { model_name, size, spec, ram, rom, seria_number } = this.request.parsedBody;
    console.log('id', id);
    const updatedEmployee = await mobilePhoneService.update(id, { model_name, size, spec, ram, rom, seria_number });
    return updatedEmployee;
  }

  @ApiRequestBody({
    description: '修改手机-输入参数',
    required: true,
    schema: MobilePhoneModifyInPatch
  })
  @ApiResponse(201, { description: 'Updated' })
  @ApiOperation({ summary: '更新手机', description: '更新手机' })
  @Patch('/patch')
  async updateByPatch() {
    console.log(JSON.stringify(this.request.parsedBody));
    const { id, model_name } = this.request.parsedBody;
    console.log('id', id);
    const updatedEmployee = await mobilePhoneService.update(id, { model_name });
    return updatedEmployee;
  }

  @ApiParameter({ name: 'id', in: 'path', required: true, description: 'id' })
  @ApiResponse(200, { description: 'OK' })
  @ApiOperation({ summary: '删除手机', description: '删除手机' })
  @Delete('/delete/:id')
  async deleteById() {
    const { id } = this.request.params;
    const result = await mobilePhoneService.deleteById(id);
    return { count: result };
  }
}

export default MobilePhoneController;
