import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'blank',
  connector: 'mysql',
  url: '',
  host: '192.168.107.140',
  port: 3306,
  user: 'root',
  password: 'ZNvZO0Fyxq1JcaVqh2tRVpFm3uGgv2qW',
  database: 'eta_db_test_relation'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BlankDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'blank';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.blank', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
