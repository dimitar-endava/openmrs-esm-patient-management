export interface BedAdministrationData {
  bedColumn: string;
  bedId: string;
  bedRow: string;
  bedType: string;
  location: {
    display: string;
    uuid: string;
  };
  occupancyStatus: string;
  /** Selected physical condition of the bed */
  physicalCondition: string;
}

export interface BedTypeDataAdministration {
  description: string;
  displayName: string;
  name: string;
}

export interface BedTagDataAdministration {
  name: string;
}
