import { Module } from '@nestjs/common';
import appModuleConfig from './library/app-module-config';

@Module(appModuleConfig)
export class AppModule {
	constructor() {
		// TODO: setup event listener
	}
}
