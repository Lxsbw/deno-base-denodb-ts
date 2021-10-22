import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

//员工实体
class MobilePhoneModel extends Model {
  //表名
  static table = 'mobile_phone';
  static timestamps = true;
  //字段
  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    model_name: DataTypes.STRING,
    size: DataTypes.STRING,
    spec: DataTypes.STRING,
    ram: DataTypes.INTEGER,
    rom: DataTypes.INTEGER,
    seria_number: DataTypes.STRING
  };
}

export default MobilePhoneModel;
