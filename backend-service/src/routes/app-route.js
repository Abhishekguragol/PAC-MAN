import express from 'express';

import * as appController from './../controllers/app-controller.js' 
import app from '../app.js';

const router = express.Router();

router.route('/login')
    .post(appController.login)
router.route('/user')
    .post(appController.register)
    .put(appController.updateUser)
router.route('/shipment')
    .post(appController.create)//create
    .get(appController.quotation)//qiotation
    
router.route('/shipment/:id')
    .put(appController.update)
    .get(appController.track)
    .delete(appController.remove)
router.route('/packages')
    .get(appController.allPackages)
router.route('/shipments')
    .get(appController.allShipments)
// router.route('/delete')
//     .get(appController.remove)
// router.route('/shipmentStatus/:id')
//     .put(appController.statusUpdate)
// router.route('/trackShipment')
//     .get(appController.trackShipment)
export default router;