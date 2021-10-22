import MobilePhoneModel from '../models/mobile-phone.ts';

class mobilePhoneService {
  static async save(param: any) {
    return await MobilePhoneModel.create(param);
  }

  static async findAll(param: any) {
    return await MobilePhoneModel.where(param).get();
  }

  static async findById(id: string) {
    return await MobilePhoneModel.find(id);
  }

  static async update(id: string, param: any) {
    console.log('service:', id);

    const result = await MobilePhoneModel.where('id', id).update(param);
    return result;
  }

  static async deleteById(id: string) {
    return await MobilePhoneModel.deleteById(id);
  }
}

export default mobilePhoneService;
