let TokenParser = require('../TokenParser');
console.log(TokenParser.parseToken('"player": {\n' +
    '\t\t\t\t"ID": "9232",\n' +
    '\t\t\t\t"LastName": "Harden",\n' +
    '\t\t\t\t"FirstName": "James",\n' +
    '\t\t\t\t"JerseyNumber": "13",\n' +
    '\t\t\t\t"Position": "SG",\n' +
    '\t\t\t\t"Height": "6\'5\\"",\n' +
    '\t\t\t\t"Weight": "220",\n' +
    '\t\t\t\t"BirthDate": "1989-08-26",\n' +
    '\t\t\t\t"Age": "27",\n' +
    '\t\t\t\t"BirthCity": "Parsons, KS",\n' +
    '\t\t\t\t"BirthCountry": "USA",\n' +
    '\t\t\t\t"IsRookie": "false",\n' +
    '\t\t\t\t"HighSchool": "New Germany",\n' +
    '\t\t\t\t"College": "Notre Dame",\n' +
    '\t\t\t\t"Twitter": "@shill93",\n' +
    '\t\t\t\t"rosterStatus": "ASSIGNED_ROSTER",\n' +
    '\t\t\t\t"handedness": {\n' +
    '\t\t\t\t\t"Shoots": "L"\n' +
    '\t\t\t\t},\n' +
    '\t\t\t\t"draft": {\n' +
    '\t\t\t\t\t"Year": "2015",\n' +
    '\t\t\t\t\t"team": {\n' +
    '\t\t\t\t\t\t"ID": "109",\n' +
    '\t\t\t\t\t\t"City": "Houston",\n' +
    '\t\t\t\t\t\t"Name": "Rockets",\n' +
    '\t\t\t\t\t\t"Abbreviation": "HOU"\n' +
    '\t\t\t\t\t},\n' +
    '\t\t\t\t\t"Round": "3",\n' +
    '\t\t\t\t\t"RoundPick": "15",\n' +
    '\t\t\t\t\t"OverallPick": "76"\n' +
    '\t\t\t\t},\n' +
    '\t\t\t\t"currentContractYear": {\n' +
    '\t\t\t\t\t"SeasonStartYear": 2015,\n' +
    '\t\t\t\t\t"BaseSalary": 100000000,\n' +
    '\t\t\t\t\t"MinorsSalary": 100000,\n' +
    '\t\t\t\t\t"SigningBonus": 1000000,\n' +
    '\t\t\t\t\t"OtherBonuses": 500000,\n' +
    '\t\t\t\t\t"CapHit": 1500000,\n' +
    '\t\t\t\t\t"FullNoTradeClause": false,\n' +
    '\t\t\t\t\t"ModifiedNoTradeClause": false,\n' +
    '\t\t\t\t\t"NoMovementClause": false,\n' +
    '\t\t\t\t\t"overallContract": {\n' +
    '\t\t\t\t\t\t"signingTeam": {\n' +
    '\t\t\t\t\t\t\t"ID": "109",\n' +
    '\t\t\t\t\t\t\t"City": "Houston",\n' +
    '\t\t\t\t\t\t\t"Name": "Rockets",\n' +
    '\t\t\t\t\t\t\t"Abbreviation": "HOU"\n' +
    '\t\t\t\t\t\t},\n' +
    '\t\t\t\t\t\t"SignedOn": "2013-05-01",\n' +
    '\t\t\t\t\t\t"TotalYears": 3,\n' +
    '\t\t\t\t\t\t"TotalSalary": 5000000,\n' +
    '\t\t\t\t\t\t"TotalBonuses": 2000000,\n' +
    '\t\t\t\t\t\t"ExpiryStatus": "UFA",\n' +
    '\t\t\t\t\t\t"AnnualAverageSalary": 1500000\n' +
    '\t\t\t\t\t}\n' +
    '\t\t\t\t},\n' +
    '\t\t\t\t"officialImageSrc": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201583.png",\n' +
    '\t\t\t\t"externalMapping": {\n' +
    '\t\t\t\t\t"Source": "NBA.com",\n' +
    '\t\t\t\t\t"ID": "2543847"\n' +
    '\t\t\t\t}\n' +
    '\t\t\t},\n' +
    '\t\t\t"team": {\n' +
    '\t\t\t\t"ID": "109",\n' +
    '\t\t\t\t"City": "Houston",\n' +
    '\t\t\t\t"Name": "Rockets",\n' +
    '\t\t\t\t"Abbreviation": "HOU"\n' +
    '\t\t\t}\n' +
    '\t\t},'));