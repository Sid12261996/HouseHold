import {ServiceTypes} from "./service-types.enum";

export class Charges {


  CalculateChargeSingleton(amount: number, hrs: number): number {
    return amount * hrs;
  }

  CalculateChargeforAll(stype: ServiceTypes, hrs: number): number {
    switch (stype) {
      case ServiceTypes.clean:
        this.CalculateChargeSingleton(5000, hrs);
        break;
      case ServiceTypes.renovate:

        this.CalculateChargeSingleton(12000, hrs);
        break;
      case ServiceTypes.Cookveg:
        this.CalculateChargeSingleton(6000, hrs);
        break;
      case ServiceTypes.Cooknonveg:
        this.CalculateChargeSingleton(8000, hrs);
        break;
      case ServiceTypes.Catveg:

        this.CalculateChargeSingleton(20000, hrs);
        break;
      case ServiceTypes.Catnonveg:
        this.CalculateChargeSingleton(30000, hrs);
        break;
      case ServiceTypes.dryClean:

        this.CalculateChargeSingleton(3000, hrs);
        break;
      case ServiceTypes.normalWash:
        this.CalculateChargeSingleton(2000, hrs);
        break;

    }
  }

}
