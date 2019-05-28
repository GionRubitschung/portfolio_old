export interface PersonalData {
  Name: string;
  Geburtsdatum: string;
  eMail: string;
  Nummer: string;
  Adresse: {
    Geschaeftlich: {
      Ort: string;
      Strasse: string;
    }
    Privat: {
      Ort: string;
      Strasse: string;
    }
  };
}
