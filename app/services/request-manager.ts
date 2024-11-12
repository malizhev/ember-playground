import BaseRequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { JsonSuffixHandler } from 'ember-playground/utils/handlers';

export default class RequestManager extends BaseRequestManager {
  constructor() {
    super();

    this.use([JsonSuffixHandler, Fetch]);
  }
}
