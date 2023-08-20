import { setResponse,setError } from "./response-handlers.js";
import * as appservice from '../services/app-service.js';
import Package from '../models/package.js'

export const register = async (request, response) => {
    try {
        const newUser = request.body;
        console.log(newUser);
        const user = await appservice.save(newUser);
        console.log('con');
        console.log(newUser);
        setResponse(user, response);
    } catch (err) {
        console.log(err);
        setError(500, err, response);
    }
}
export const createPackage = async (request, response) => {
    try {
        const newpackage = request.body;
        console.log(newpackage);
        const packagee = await appservice.savePackage(newpackage);
        console.log('con');
        console.log(packagee);
        setResponse(packagee, response);
    } catch (err) {
        console.log(err);
        setError(500, err, response);
    }
}
export const create = async (request, response) => {
    try {
        
         const {packageData, serviceType }= request.body;
         console.log(packageData+''+serviceType);
        const shipment = await appservice.saveShipment(packageData, serviceType );
        console.log('con');
        console.log(shipment);
        setResponse(shipment, response);
    } catch (err) {
        console.log(err);
        setError(500, err, response);
    }
}
export const quotation = async (request, response) => {
    try {
         const {packageData, serviceType }= request.body;
        // console.log(newpackage);
        const shipment = await appservice.shipmentQuotation(packageData, serviceType );
        console.log('con');
        console.log(shipment);
        setResponse(shipment, response);
    } catch (err) {
        console.log(err);
        setError(500, err, response);
    }
}
export const track = async (request, response) => {
    try {
         const trackingId= request.params.id;
        // console.log(newpackage);
        const shipment = await appservice.trackShipment(trackingId );
        console.log('con');
        console.log(shipment);
        setResponse(shipment, response);
    } catch (err) {
        console.log(err);
        setError(500, err, response);
    }
}
export const statusUpdate = async (request, response) => {
    try {
        const trackingId= request.params.id;
         const { status }= request.body;
        // console.log(newpackage);
        const shipment = await appservice.updateStatus(trackingId, status );
        console.log('conin update');
        console.log(shipment);
        setResponse(shipment, response);
    } catch (err) {
        console.log(err);
        setError(500, err, response);
    }
}

export const login =  async (request, response) => {
    try {
        const { userName, password } = request.body;
        const resultUser = await appservice.loginUser(userName, password);
        setResponse(resultUser, response);
    }
    catch (err) {
        console.log(err);
        setError(500, err, response);
    }

}

export const updateUser =  async (request, response) => {
    try {
        const id = request.params.id;
        const userObj = request.body;
        const resultUser = await appservice.updateUser(id, userObj);
        setResponse(resultUser, response);
    }
    catch (err) {
        console.log(err);
        setError(500, err, response);
    }

}
export const update =  async (request, response) => {
    try {
        const id = request.params.id;
        const shipmentObj = request.body;
        const shipment = await appservice.updateShipment(id, shipmentObj);
        setResponse(shipment, response);
    }
    catch (err) {
        console.log(err);
        setError(500, err, response);
    }

}
export const allPackages = async (request, response) => {
    try {
        const params = { ...request.query };
        // console.log(params);
        const packages = await appservice.search(params.userId);
        
        setResponse(packages, response)
    } catch (err) {
        setError(500, err, response);
    }
}
export const allShipments = async (request, response) => {
    try {
        const params = { ...request.query };
        // console.log(params);
        const packages = await appservice.searchShipments(params);
        
        setResponse(packages, response)
    } catch (err) {
        setError(500, err, response);
    }
}
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const shipment = await appservice.remove(id);
        setResponse({}, response);
    } catch (err) {
        setError(500, err, response);
    }
}