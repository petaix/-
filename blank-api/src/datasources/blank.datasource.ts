import {juggler} from '@loopback/repository';

export class BlankDataSource extends juggler.DataSource {
  static dataSourceName = 'blank-db';

  constructor() {
    super({
      name: 'blank-db',
      connector: 'mysql',
      // url: env.TA_DB_URL,
      host: "192.168.107.140",
      port: 3306,
      user: "root",
      password: "ZNvZO0Fyxq1JcaVqh2tRVpFm3uGgv2qW",
      database: "eta_db_test_relation",
    });
  }
}

