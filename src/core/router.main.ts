import {Application} from 'express';
import {SyncTimeline} from "./sandra/controller.sync.offline";
import ControllerHospitals from "./distribution/controller.hospitals";
import ChangeStreams from "./sandra/controller.changestream";
import ControllerTestingCentres from "./distribution/controller.testing.centres";

export class Controller {
  private syncTimeline: SyncTimeline;
  private hospitalsController: ControllerHospitals;
  private testingCentresController: ControllerTestingCentres;
  private changeStreams: ChangeStreams;

  constructor(private app: Application) {
    this.syncTimeline = new SyncTimeline();
    this.hospitalsController = new ControllerHospitals();
    this.testingCentresController = new ControllerTestingCentres();
    this.changeStreams = new ChangeStreams();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.syncTimeline.welcomeMessage);

    this.app.route('/hospitals/new').post(this.hospitalsController.saveHospital)
    this.app.route('/hospitals/delete').get(this.hospitalsController.deleteHospital)
    this.app.route('/hospitals').get(this.hospitalsController.getHospitals)

    this.app.route('/testingcentres/new').post(this.testingCentresController.saveTestingCentre)
    this.app.route('/testingcentres').get(this.testingCentresController.getTestingCentres)

    this.app.route('/changestream').get(this.changeStreams.reportAllChanges)

  }
}
