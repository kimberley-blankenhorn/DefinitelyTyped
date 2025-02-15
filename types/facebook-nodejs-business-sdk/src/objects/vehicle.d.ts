import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
export default class Vehicle extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ImageFetchStatus(): Record<string, any>;
    static get Availability(): Record<string, any>;
    static get BodyStyle(): Record<string, any>;
    static get Condition(): Record<string, any>;
    static get Drivetrain(): Record<string, any>;
    static get FuelType(): Record<string, any>;
    static get StateOfVehicle(): Record<string, any>;
    static get Transmission(): Record<string, any>;
    static get VehicleType(): Record<string, any>;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    get(fields: string[], params?: Record<string, any>): Promise<Vehicle>;
    update(fields: string[], params?: Record<string, any>): Promise<Vehicle>;
}
