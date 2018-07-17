// the schema manager is a collection of schemas
// i.e. pojos
// that will be used to create instances of models
// in their implementation
// this are simple pojos and are used in
// conjunction with mongoose.Schema

/**
 * Player stats schema
 */
let PlayerSchema = {
    player: {
        ID: String,
        LastName: String,
        FirstName: String,
        JerseyNumber: String,
        Position: String
    },
    team: {
        ID: String,
        City: String,
        Name: String,
        Abbreviation: String
    },
    stats: {
        GamesPlayed: {
            abbreviation: String,
            text: String
        },
        Fg2PtAtt: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg2PtAttPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg2PtMade: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg2PtMadePerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg2PtPct: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg3PtAtt: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg3PtAttPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg3PtMade: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg3PtMadePerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fg3PtPct: {
            category: String,
            abbreviation: String,
            text: String
        },
        FgAtt: {
            category: String,
            abbreviation: String,
            text: String
        },
        FgAttPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FgMade: {
            category: String,
            abbreviation: String,
            text: String
        },
        FgMadePerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FgPct: {
            category: String,
            abbreviation: String,
            text: String
        },
        FtAtt: {
            category: String,
            abbreviation: String,
            text: String
        },
        FtAttPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FtMade: {
            category: String,
            abbreviation: String,
            text: String
        },
        FtMadePerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FtPct: {
            category: String,
            abbreviation: String,
            text: String
        },
        OffReb: {
            category: String,
            abbreviation: String,
            text: String
        },
        OffRebPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        DefReb: {
            category: String,
            abbreviation: String,
            text: String
        },
        DefRebPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Reb: {
            category: String,
            abbreviation: String,
            text: String
        },
        RebPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Ast: {
            category: String,
            abbreviation: String,
            text: String
        },
        AstPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Pts: {
            category: String,
            abbreviation: String,
            text: String
        },
        PtsPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Tov: {
            category: String,
            abbreviation: String,
            text: String
        },
        TovPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Stl: {
            category: String,
            abbreviation: String,
            text: String
        },
        StlPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Blk: {
            category: String,
            abbreviation: String,
            text: String
        },
        BlkPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        BlkAgainst: {
            category: String,
            abbreviation: String,
            text: String
        },
        BlkAgainstPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Fouls: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulsPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulsDrawn: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulsDrawnPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulPers: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulPersPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulPersDrawn: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulPersDrawnPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulTech: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulTechPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulTechDrawn: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulTechDrawnPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag1: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag1PerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag1Drawn: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag1DrawnPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag2: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag2PerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag2Drawn: {
            category: String,
            abbreviation: String,
            text: String
        },
        FoulFlag2DrawnPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        Ejections: {
            category: String,
            abbreviation: String,
            text: String
        },
        PlusMinus: {
            category: String,
            abbreviation: String,
            text: String
        },
        PlusMinusPerGame: {
            category: String,
            abbreviation: String,
            text: String
        },
        MinSeconds: {
            category: String,
            abbreviation: String,
            text: String
        },
        MinSecondsPerGame: {
            category: String,
            abbreviation: String,
            text: String
        }
    }
};

/**
 * Player profile schema
 */
let PlayerProfileSchema = {
    player: {
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
};

module.exports = {
    PlayerSchema: PlayerSchema,
    PlayerProfileSchema: PlayerProfileSchema
};