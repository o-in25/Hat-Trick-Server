// the schema manager is a collection of schemas
// i.e. pojos
// that will be used to create instances of models
// in their implementation
// this are simple pojos and are used in
// conjunction with mongoose.Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
    let StatsSchema = {
        PlayerID: Schema.Types.Mixed,
        LastName: Schema.Types.Mixed,
        FirstName: Schema.Types.Mixed,
        JerseyNumber: Schema.Types.Mixed,
        Position: Schema.Types.Mixed,
        CityID: Schema.Types.Mixed,
        City: Schema.Types.Mixed,
        Name: Schema.Types.Mixed,
        Abbreviation: Schema.Types.Mixed,
        GamesPlayed: Schema.Types.Mixed,
        Fg2PtAtt: Schema.Types.Mixed,
        Fg2PtAttPerGame: Schema.Types.Mixed,
        Fg2PtMade: Schema.Types.Mixed,
        Fg2PtMadePerGame: Schema.Types.Mixed,
        Fg2PtPct: Schema.Types.Mixed,
        Fg3PtAtt: Schema.Types.Mixed,
        Fg3PtAttPerGame: Schema.Types.Mixed,
        Fg3PtMade: Schema.Types.Mixed,
        Fg3PtMadePerGame: Schema.Types.Mixed,
        Fg3PtPct: Schema.Types.Mixed,
        FgAtt: Schema.Types.Mixed,
        FgAttPerGame: Schema.Types.Mixed,
        FgMade: Schema.Types.Mixed,
        FgMadePerGame: Schema.Types.Mixed,
        FgPct: Schema.Types.Mixed,
        FtAtt: Schema.Types.Mixed,
        FtAttPerGame: Schema.Types.Mixed,
        FtMade: Schema.Types.Mixed,
        FtMadePerGame: Schema.Types.Mixed,
        FtPct: Schema.Types.Mixed,
        OffReb: Schema.Types.Mixed,
        OffRebPerGame: Schema.Types.Mixed,
        DefReb: Schema.Types.Mixed,
        DefRebPerGame: Schema.Types.Mixed,
        Reb: Schema.Types.Mixed,
        RebPerGame: Schema.Types.Mixed,
        Ast: Schema.Types.Mixed,
        AstPerGame: Schema.Types.Mixed,
        Pts: Schema.Types.Mixed,
        PtsPerGame: Schema.Types.Mixed,
        Tov: Schema.Types.Mixed,
        TovPerGame: Schema.Types.Mixed,
        Stl: Schema.Types.Mixed,
        StlPerGame: Schema.Types.Mixed,
        Blk: Schema.Types.Mixed,
        BlkPerGame: Schema.Types.Mixed,
        BlkAgainst: Schema.Types.Mixed,
        BlkAgainstPerGame: Schema.Types.Mixed,
        Fouls: Schema.Types.Mixed,
        FoulsPerGame: Schema.Types.Mixed,
        FoulsDrawn: Schema.Types.Mixed,
        FoulsDrawnPerGame: Schema.Types.Mixed,
        FoulPers: Schema.Types.Mixed,
        FoulPersPerGame: Schema.Types.Mixed,
        FoulPersDrawn: Schema.Types.Mixed,
        FoulPersDrawnPerGame: Schema.Types.Mixed,
        FoulTech: Schema.Types.Mixed,
        FoulTechPerGame: Schema.Types.Mixed,
        FoulTechDrawn: Schema.Types.Mixed,
        FoulTechDrawnPerGame: Schema.Types.Mixed,
        FoulFlag1: Schema.Types.Mixed,
        FoulFlag1PerGame: Schema.Types.Mixed,
        FoulFlag1Drawn: Schema.Types.Mixed,
        FoulFlag1DrawnPerGame: Schema.Types.Mixed,
        FoulFlag2: Schema.Types.Mixed,
        FoulFlag2PerGame: Schema.Types.Mixed,
        FoulFlag2Drawn: Schema.Types.Mixed,
        FoulFlag2DrawnPerGame: Schema.Types.Mixed,
        Ejections: Schema.Types.Mixed,
        PlusMinus: Schema.Types.Mixed,
        PlusMinusPerGame: Schema.Types.Mixed,
        MinSeconds: Schema.Types.Mixed,
        MinSecondsPerGame: Schema.Types.Mixed
    
    };




/**
 * Player stats schema
 */
let PlayerSchema = {
    player: {
        ID: Schema.Types.Mixed,
        LastName: Schema.Types.Mixed,
        FirstName: Schema.Types.Mixed,
        JerseyNumber: Schema.Types.Mixed,
        Position: Schema.Types.Mixed
    },
    team: {
        ID: Schema.Types.Mixed,
        City: Schema.Types.Mixed,
        Name: Schema.Types.Mixed,
        Abbreviation: Schema.Types.Mixed
    },
    stats: {
        GamesPlayed: {
            abbreviation: Schema.Types.Mixed,
            text: Schema.Types.Mixed
        },
        Fg2PtAtt: Schema.Types.Mixed,
        Fg2PtAttPerGame: Schema.Types.Mixed,
        Fg2PtMade: Schema.Types.Mixed,
        Fg2PtMadePerGame: Schema.Types.Mixed,
        Fg2PtPct: Schema.Types.Mixed,
        Fg3PtAtt: Schema.Types.Mixed,
        Fg3PtAttPerGame: Schema.Types.Mixed,
        Fg3PtMade: Schema.Types.Mixed,
        Fg3PtMadePerGame: Schema.Types.Mixed,
        Fg3PtPct: Schema.Types.Mixed,
        FgAtt: Schema.Types.Mixed,
        FgAttPerGame: Schema.Types.Mixed,
        FgMade: Schema.Types.Mixed,
        FgMadePerGame: Schema.Types.Mixed,
        FgPct: Schema.Types.Mixed,
        FtAtt: Schema.Types.Mixed,
        FtAttPerGame: Schema.Types.Mixed,
        FtMade: Schema.Types.Mixed,
        FtMadePerGame: Schema.Types.Mixed,
        FtPct: Schema.Types.Mixed,
        OffReb: Schema.Types.Mixed,
        OffRebPerGame: Schema.Types.Mixed,
        DefReb: Schema.Types.Mixed,
        DefRebPerGame: Schema.Types.Mixed,
        Reb: Schema.Types.Mixed,
        RebPerGame: Schema.Types.Mixed,
        Ast: Schema.Types.Mixed,
        AstPerGame: Schema.Types.Mixed,
        Pts: Schema.Types.Mixed,
        PtsPerGame: Schema.Types.Mixed,
        Tov: Schema.Types.Mixed,
        TovPerGame: Schema.Types.Mixed,
        Stl: Schema.Types.Mixed,
        StlPerGame: Schema.Types.Mixed,
        Blk: Schema.Types.Mixed,
        BlkPerGame: Schema.Types.Mixed,
        BlkAgainst: Schema.Types.Mixed,
        BlkAgainstPerGame: Schema.Types.Mixed,
        Fouls: Schema.Types.Mixed,
        FoulsPerGame: Schema.Types.Mixed,
        FoulsDrawn: Schema.Types.Mixed,
        FoulsDrawnPerGame: Schema.Types.Mixed,
        FoulPers: Schema.Types.Mixed,
        FoulPersPerGame: Schema.Types.Mixed,
        FoulPersDrawn: Schema.Types.Mixed,
        FoulPersDrawnPerGame: Schema.Types.Mixed,
        FoulTech: Schema.Types.Mixed,
        FoulTechPerGame: Schema.Types.Mixed,
        FoulTechDrawn: Schema.Types.Mixed,
        FoulTechDrawnPerGame: Schema.Types.Mixed,
        FoulFlag1: Schema.Types.Mixed,
        FoulFlag1PerGame: Schema.Types.Mixed,
        FoulFlag1Drawn: Schema.Types.Mixed,
        FoulFlag1DrawnPerGame: Schema.Types.Mixed,
        FoulFlag2: Schema.Types.Mixed,
        FoulFlag2PerGame: Schema.Types.Mixed,
        FoulFlag2Drawn: Schema.Types.Mixed,
        FoulFlag2DrawnPerGame: Schema.Types.Mixed,
        Ejections: Schema.Types.Mixed,
        PlusMinus: Schema.Types.Mixed,
        PlusMinusPerGame: Schema.Types.Mixed,
        MinSeconds: Schema.Types.Mixed,
        MinSecondsPerGame: Schema.Types.Mixed
    }
};

/**
 * Player profile schema
 */
let PlayerProfileSchema = {
    player: {
        ID: Schema.Types.Mixed,
        LastName: Schema.Types.Mixed,
        FirstName: Schema.Types.Mixed,
        JerseyNumber: Schema.Types.Mixed,
        Position: Schema.Types.Mixed,
        Height: Schema.Types.Mixed,
        Weight: Schema.Types.Mixed,
        BirthDate: Schema.Types.Mixed,
        Age: Schema.Types.Mixed,
        BirthCity: Schema.Types.Mixed,
        BirthCountry: Schema.Types.Mixed,
        IsRookie: Schema.Types.Mixed,
        HighSchool: Schema.Types.Mixed,
        College: Schema.Types.Mixed,
        Twitter: Schema.Types.Mixed,
        rosterStatus: Schema.Types.Mixed,
        handedness: {
            Shoots: Schema.Types.Mixed
        },
        draft: {
            Year: Schema.Types.Mixed,
            team: {
                ID: Schema.Types.Mixed,
                City: Schema.Types.Mixed,
                Name: Schema.Types.Mixed,
                Abbreviation: Schema.Types.Mixed
            },
            Round: Schema.Types.Mixed,
            RoundPick: Schema.Types.Mixed,
            OverallPick: Schema.Types.Mixed
        },
        currentContractYear: {
            SeasonStartYear: Schema.Types.Mixed,
            BaseSalary: Schema.Types.Mixed,
            MinorsSalary: Schema.Types.Mixed,
            SigningBonus: Schema.Types.Mixed,
            OtherBonuses: Schema.Types.Mixed,
            CapHit: Schema.Types.Mixed,
            FullNoTradeClause: Schema.Types.Mixed,
            ModifiedNoTradeClause: Schema.Types.Mixed,
            NoMovementClause: Schema.Types.Mixed,
            overallContract: {
                signingTeam: {
                    ID: Schema.Types.Mixed,
                    City: Schema.Types.Mixed,
                    Name: Schema.Types.Mixed,
                    Abbreviation: Schema.Types.Mixed
                },
                SignedOn: Schema.Types.Mixed,
                TotalYears: Schema.Types.Mixed,
                TotalSalary: Schema.Types.Mixed,
                TotalBonuses: Schema.Types.Mixed,
                ExpiryStatus: Schema.Types.Mixed,
                AnnualAverageSalary: Schema.Types.Mixed
            }
        },
        officialImageSrc: Schema.Types.Mixed,
        externalMapping: {
            Source: Schema.Types.Mixed,
            ID: Schema.Types.Mixed
        }
    },
    team: {
        ID: Schema.Types.Mixed,
        City: Schema.Types.Mixed,
        Name: Schema.Types.Mixed,
        Abbreviation: Schema.Types.Mixed
    }
};

module.exports = {
    StatsSchema: StatsSchema,
    PlayerSchema: PlayerSchema,
    PlayerProfileSchema: PlayerProfileSchema
};