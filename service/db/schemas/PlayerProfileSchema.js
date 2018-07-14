let mongoose = require('mongoose');
module.exports = {
    PlayerSchema: new function() {
        let Schema = mongoose.Schema;
        let PlayerProfileSchema = new Schema({"player": {
                ID: String,
                LastName: String,
                FirstName: String,
                JerseyNumber: String,
                Position: String,
                Height: String,
                Weight: String,
                BirthDate: String,
                Age: String,
                BirthCity: String,
                BirthCountry: String,
                IsRookie: String,
                HighSchool: String,
                College: String,
                Twitter: String,
                rosterStatus: String,
                handedness: {
                    Shoots: String
                },
                draft: {
                    Year: String,
                    team: {
                        ID: String,
                        City: String,
                        Name: String,
                        Abbreviation: String
                    },
                    Round: String,
                    RoundPick: String,
                    OverallPick: String
                },
                currentContractYear: {
                    SeasonStartYear: String,
                    BaseSalary: String,
                    MinorsSalary: String,
                    SigningBonus: String,
                    OtherBonuses: String,
                    CapHit: String,
                    FullNoTradeClause: String,
                    ModifiedNoTradeClause: String,
                    NoMovementClause: String,
                    overallContract: {
                        signingTeam: {
                            ID: String,
                            City: String,
                            Name: String,
                            Abbreviation: String
                        },
                        SignedOn: String,
                        TotalYears: String,
                        TotalSalary: String,
                        TotalBonuses: String,
                        ExpiryStatus: String,
                        AnnualAverageSalary: String
                    }
                },
                officialImageSrc: String,
                externalMapping: {
                    Source: String,
                    ID: String
                }
            },
            team: {
                ID: String,
                City: String,
                Name: String,
                Abbreviation: String
            }
        });
        return new Schema(PlayerProfileSchema);
    }
};