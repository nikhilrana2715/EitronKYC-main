import { db } from '@/lib/db';

async function seed() {
  try {
    console.log('Starting database seeding...');
    
    // Seed countries
    const countries = [
      { name: 'United States', code: 'US' },
      { name: 'Canada', code: 'CA' },
      { name: 'Japan', code: 'JP' },
      { name: 'China', code: 'CN' },
      { name: 'Hong Kong', code: 'HK' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Ukraine', code: 'UA' },
      { name: 'Germany', code: 'DE' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'Latvia', code: 'LV' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Poland', code: 'PL' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Romania', code: 'RO' },
      { name: 'Serbia', code: 'RS' },
      { name: 'Sweden', code: 'SE' },
      { name: 'United Kingdom', code: 'UK' },
      { name: 'Austria', code: 'AT' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Georgia', code: 'GE' },
      { name: 'Hungary', code: 'HU' },
      { name: 'India', code: 'IN' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Italy', code: 'IT' },
      { name: 'Kazakhstan', code: 'KZ' },
      { name: 'Kyrgyzstan', code: 'KG' },
      { name: 'Norway', code: 'NO' },
      { name: 'Slovenia', code: 'SI' },
      { name: 'Spain', code: 'ES' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Vietnam', code: 'VN' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Armenia', code: 'AM' }
    ];

    console.log('Creating countries...');
    const createdCountries = {};
    for (const country of countries) {
      console.log(`Creating country: ${country.name} (${country.code})`);
      try {
        const created = await db.country.upsert({
          where: { code: country.code },
          update: {},
          create: country,
        });
        createdCountries[country.code] = created;
        console.log(`✓ Created ${country.name}`);
      } catch (error) {
        console.error(`✗ Failed to create ${country.name}:`, error);
      }
    }

    console.log(`Created ${Object.keys(createdCountries).length} countries`);

    const usa = createdCountries['US'];
    const uk = createdCountries['UK'];
    const canada = createdCountries['CA'];
    const australia = createdCountries['AU'];
    const japan = createdCountries['JP'];
    const china = createdCountries['CN'];
    const germany = createdCountries['DE'];
    const france = createdCountries['FR'];
    const italy = createdCountries['IT'];
    const spain = createdCountries['ES'];
    const netherlands = createdCountries['NL'];
    const sweden = createdCountries['SE'];
    const norway = createdCountries['NO'];
    const denmark = createdCountries['DK'];
    const finland = createdCountries['FI'];
    const belgium = createdCountries['BE'];
    const austria = createdCountries['AT'];
    const switzerland = createdCountries['CH'];
    const poland = createdCountries['PL'];
    const india = createdCountries['IN'];
    const singapore = createdCountries['SG'];
    const malaysia = createdCountries['MY'];
    const philippines = createdCountries['PH'];
    const brazil = createdCountries['BR'];
    const argentina = createdCountries['AR'];

    if (!usa || !uk || !canada || !australia) {
      console.error('Required countries not created properly');
      return;
    }

    console.log('Creating document types...');
    // Seed document types
    const passportBook = await db.documentType.upsert({
      where: { slug: 'passport-book' },
      update: {},
      create: {
        name: 'Passport Book',
        slug: 'passport-book',
      },
    });

    const passportCard = await db.documentType.upsert({
      where: { slug: 'passport-card' },
      update: {},
      create: {
        name: 'Passport Card',
        slug: 'passport-card',
      },
    });

    const greenCard = await db.documentType.upsert({
      where: { slug: 'green-card' },
      update: {},
      create: {
        name: 'Green Card',
        slug: 'green-card',
      },
    });

    const workAuth = await db.documentType.upsert({
      where: { slug: 'work-authorization' },
      update: {},
      create: {
        name: 'Work Authorization',
        slug: 'work-authorization',
      },
    });

    const birthCert = await db.documentType.upsert({
      where: { slug: 'birth-certificate' },
      update: {},
      create: {
        name: 'Birth Certificate',
        slug: 'birth-certificate',
      },
    });

    const driverLicense = await db.documentType.upsert({
      where: { slug: 'driver-license' },
      update: {},
      create: {
        name: 'Driver License',
        slug: 'driver-license',
      },
    });

    const bankStatement = await db.documentType.upsert({
      where: { slug: 'bank-statement' },
      update: {},
      create: {
        name: 'Bank Statement',
        slug: 'bank-statement',
      },
    });

    const ssn = await db.documentType.upsert({
      where: { slug: 'ssn' },
      update: {},
      create: {
        name: 'SSN',
        slug: 'ssn',
      },
    });

    const diploma = await db.documentType.upsert({
      where: { slug: 'diploma' },
      update: {},
      create: {
        name: 'Diploma',
        slug: 'diploma',
      },
    });

    console.log('Creating sample documents...');
    // Seed sample documents for various countries
    const sampleDocuments = [
      // USA Documents
      {
        countryId: usa.id,
        documentTypeId: driverLicense.id,
        fullName: 'John Michael Smith',
        dateOfBirth: '1990-05-15',
        dateOfIssue: '2023-01-10',
        state: 'California',
        documentNumber: 'D123456789',
        price: 299.99,
      },
      {
        countryId: usa.id,
        documentTypeId: driverLicense.id,
        fullName: 'Emily Jane Johnson',
        dateOfBirth: '1985-08-22',
        dateOfIssue: '2022-11-05',
        state: 'New York',
        documentNumber: 'D987654321',
        price: 299.99,
      },
      {
        countryId: usa.id,
        documentTypeId: passportBook.id,
        fullName: 'Sarah Anne Brown',
        dateOfBirth: '1988-12-03',
        dateOfIssue: '2021-09-15',
        documentNumber: 'C123456789',
        price: 499.99,
      },
      {
        countryId: usa.id,
        documentTypeId: greenCard.id,
        fullName: 'Maria Garcia Martinez',
        dateOfBirth: '1991-02-14',
        dateOfIssue: '2020-08-30',
        documentNumber: 'SRC123456789',
        price: 799.99,
      },
      {
        countryId: usa.id,
        documentTypeId: ssn.id,
        fullName: 'James Robert Wilson',
        dateOfBirth: '1987-11-25',
        dateOfIssue: '2019-03-12',
        documentNumber: '123-45-6789',
        price: 199.99,
      },
      
      // Canada Documents
      {
        countryId: canada.id,
        documentTypeId: driverLicense.id,
        fullName: 'Patrick Michael O\'Connor',
        dateOfBirth: '1992-07-21',
        dateOfIssue: '2023-03-15',
        state: 'Ontario',
        documentNumber: 'DL456789123',
        price: 349.99,
      },
      {
        countryId: canada.id,
        documentTypeId: passportBook.id,
        fullName: 'Sophie Marie Laurent',
        dateOfBirth: '1989-11-08',
        dateOfIssue: '2022-06-20',
        documentNumber: 'CA789123456',
        price: 549.99,
      },
      
      // UK Documents
      {
        countryId: uk.id,
        documentTypeId: driverLicense.id,
        fullName: 'William James Thompson',
        dateOfBirth: '1986-04-12',
        dateOfIssue: '2023-01-25',
        state: 'England',
        documentNumber: 'THOMPSON85W701AB',
        price: 279.99,
      },
      {
        countryId: uk.id,
        documentTypeId: passportBook.id,
        fullName: 'Elizabeth Catherine Windsor',
        dateOfBirth: '1991-09-30',
        dateOfIssue: '2022-12-10',
        documentNumber: '523456789',
        price: 459.99,
      },
      
      // Japan Documents
      {
        countryId: japan.id,
        documentTypeId: driverLicense.id,
        fullName: 'Takeshi Yamamoto',
        dateOfBirth: '1988-06-15',
        dateOfIssue: '2023-02-28',
        state: 'Tokyo',
        documentNumber: '123456789012',
        price: 389.99,
      },
      {
        countryId: japan.id,
        documentTypeId: passportBook.id,
        fullName: 'Yuki Tanaka',
        dateOfBirth: '1993-12-03',
        dateOfIssue: '2022-08-15',
        documentNumber: 'TR98765432',
        price: 599.99,
      },
      
      // Germany Documents
      {
        countryId: germany.id,
        documentTypeId: driverLicense.id,
        fullName: 'Hans Mueller',
        dateOfBirth: '1987-03-22',
        dateOfIssue: '2023-04-10',
        state: 'Bavaria',
        documentNumber: 'MUELLERH87',
        price: 329.99,
      },
      {
        countryId: germany.id,
        documentTypeId: passportBook.id,
        fullName: 'Anna Schmidt',
        dateOfBirth: '1990-10-18',
        dateOfIssue: '2022-11-25',
        documentNumber: 'C123456789',
        price: 489.99,
      },
      
      // France Documents
      {
        countryId: france.id,
        documentTypeId: driverLicense.id,
        fullName: 'Pierre Dubois',
        dateOfBirth: '1989-07-14',
        dateOfIssue: '2023-05-20',
        state: 'Paris',
        documentNumber: '12345678901',
        price: 339.99,
      },
      {
        countryId: france.id,
        documentTypeId: passportBook.id,
        fullName: 'Marie Laurent',
        dateOfBirth: '1992-02-28',
        dateOfIssue: '2022-09-12',
        documentNumber: '98CH654321',
        price: 529.99,
      },
      
      // Australia Documents
      {
        countryId: australia.id,
        documentTypeId: driverLicense.id,
        fullName: 'Jack Thompson',
        dateOfBirth: '1991-08-05',
        dateOfIssue: '2023-01-18',
        state: 'New South Wales',
        documentNumber: '12345678',
        price: 359.99,
      },
      {
        countryId: australia.id,
        documentTypeId: passportBook.id,
        fullName: 'Emma Wilson',
        dateOfBirth: '1988-11-22',
        dateOfIssue: '2022-07-30',
        documentNumber: 'N9876543',
        price: 569.99,
      },
      
      // Singapore Documents
      {
        countryId: singapore.id,
        documentTypeId: driverLicense.id,
        fullName: 'Lee Wei Ming',
        dateOfBirth: '1990-04-08',
        dateOfIssue: '2023-03-12',
        state: 'Singapore',
        documentNumber: 'S1234567Z',
        price: 419.99,
      },
      {
        countryId: singapore.id,
        documentTypeId: passportBook.id,
        fullName: 'Chen Mei Ling',
        dateOfBirth: '1993-09-16',
        dateOfIssue: '2022-10-25',
        documentNumber: 'K9876543A',
        price: 629.99,
      },
      
      // India Documents
      {
        countryId: india.id,
        documentTypeId: driverLicense.id,
        fullName: 'Rajesh Kumar Sharma',
        dateOfBirth: '1989-12-25',
        dateOfIssue: '2023-02-14',
        state: 'Maharashtra',
        documentNumber: 'MH-12-2023-001234',
        price: 249.99,
      },
      {
        countryId: india.id,
        documentTypeId: passportBook.id,
        fullName: 'Priya Singh',
        dateOfBirth: '1991-06-30',
        dateOfIssue: '2022-08-18',
        documentNumber: 'P9876543',
        price: 399.99,
      },
      
      // China Documents
      {
        countryId: china.id,
        documentTypeId: driverLicense.id,
        fullName: 'Zhang Wei',
        dateOfBirth: '1987-09-12',
        dateOfIssue: '2023-01-08',
        state: 'Beijing',
        documentNumber: '11010119900912001X',
        price: 299.99,
      },
      {
        countryId: china.id,
        documentTypeId: passportBook.id,
        fullName: 'Li Na',
        dateOfBirth: '1992-03-25',
        dateOfIssue: '2022-11-30',
        documentNumber: 'E12345678',
        price: 449.99,
      }
    ];

    console.log(`Creating ${sampleDocuments.length} sample documents...`);
    for (const doc of sampleDocuments) {
      try {
        await db.document.create({
          data: doc,
        });
        console.log(`✓ Created document: ${doc.fullName}`);
      } catch (error) {
        console.log(`- Document already exists: ${doc.fullName}`);
      }
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

seed()
  .then(() => {
    console.log('Seeding completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
  