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
  schulen: [
    {
    schule: string;
    von_bis: string;
    typ: string
    }
  ];
  sprachkenntnisse: [
    {
      sprache: string;
      niveau: string;
    }
  ];
  schultagBFS: string;
  schultagBMS: string;
}
