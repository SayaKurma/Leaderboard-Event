document.addEventListener("DOMContentLoaded", function () {
    const participants = [
        {
            id: 1,
            name: "Luki",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 6, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                }, 
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },       
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 4, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 2,
            name: "Gon",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 3,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 3,
            name: "Viol",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 1.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 4,
            name: "Cinn",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 1.5,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 4.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 5,
            name: "FiNe",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 3,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 6,
            name: "Ao",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }
                    ]
                }
            ],
        },
        {
            id: 7,
            name: "Anna",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 3,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 8,
            name: "Al",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 4.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 9,
            name: "Alex",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 3,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 1.5,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }
                    ]
                }
            ],
        },
        {
            id: 10,
            name: "Kc",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 4.5,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 2, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                }, 
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 1.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 11,
            name: "Jena",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 3,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 3,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 3,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 3.5 } },
                        { session: 3, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 4.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 4, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 1, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 4.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 3,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 3, membunuhCrewmate: 4.5, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 3, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 3, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
                {
                    day: 4,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 2, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 3.5 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0.5, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 4, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }, 
                    ], 
                },
            ],
        },
        {
            id: 12,
            name: "BoyLSaden",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 1,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 4,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 3,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0.5,
                                mengidentifikasiImpostor: 2,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 2.5,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }
                    ]
                }
            ],
        },
        {
            id: 13,
            name: "boybak",
            days: [
                {
                    day: 1,
                    sessions: [
                        {
                            session: 1,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 2,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 3,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 4,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 5,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 6,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 7,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 8,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 9,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                        {
                            session: 10,
                            points: {
                                menangSebagaiImpostor: 0,
                                membunuhCrewmate: 0,
                                misiTerselesaikan: 0,
                                mengidentifikasiImpostor: 0,
                                membunuhImpostor: 0,
                            },
                        },
                    ],
                },
                {
                    day: 2,
                    sessions: [
                        { session: 1, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 2, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 3, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 4, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 5, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 6, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 7, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 8, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 9, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } },
                        { session: 10, points: { menangSebagaiImpostor: 0, membunuhCrewmate: 0, misiTerselesaikan: 0, mengidentifikasiImpostor: 0, membunuhImpostor: 0 } }
                    ]
                }
            ], 
        },
    ];

    const tableBody = document.querySelector("#leaderboard-table tbody");
    const modal = document.getElementById("participant-modal");
    const modalName = document.getElementById("modal-name");
    const modalDetails = document.getElementById("modal-details");
    const closeBtn = document.querySelector(".close");

    function calculateTotalPoints(participant) {
        let totalPoints = 0;
        participant.days.forEach(day => {
            day.sessions.forEach(session => {
                totalPoints += Object.values(session.points).reduce((sum, val) => sum + val, 0);
            });
        });
        return totalPoints;
    }

    function sortParticipantsByPoints(participants) {
        return participants.sort((a, b) => calculateTotalPoints(b) - calculateTotalPoints(a));
    }

    function updateLeaderboard() {
        const sortedParticipants = sortParticipantsByPoints(participants);
        tableBody.innerHTML = "";

        sortedParticipants.forEach((participant, index) => {
            const totalPoints = calculateTotalPoints(participant);
            const row = document.createElement("tr");
            
            row.style.animation = `fadeIn 0.5s forwards`;
            row.style.animationDelay = `${index * 0.05}s`;
            row.style.opacity = "0";
            
            row.innerHTML = `
                <td><span class="rank">#${index + 1}</span></td>
                <td><a href="#" class="participant-name" data-id="${participant.id}">${participant.name}</a></td>
                <td>${totalPoints}</td>
            `;
            
            if (index < 3) {
                row.classList.add(`rank-${index + 1}`);
            }
            
            tableBody.appendChild(row);
        });

        attachParticipantClickHandlers();
    }

    function formatPointName(key) {
        const formatMap = {
            'menangSebagaiImpostor': 'Menang Sebagai Impostor',
            'membunuhCrewmate': 'Membunuh Crewmate',
            'misiTerselesaikan': 'Misi Terselesaikan',
            'mengidentifikasiImpostor': 'Mengidentifikasi Impostor',
            'membunuhImpostor': 'Membunuh Impostor'
        };
        return formatMap[key] || key;
    }

    function attachParticipantClickHandlers() {
        document.querySelectorAll(".participant-name").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const participantId = parseInt(link.getAttribute("data-id"));
                openParticipantDetails(participantId);
            });
        });
    }

    function openParticipantDetails(participantId) {
        const participant = participants.find((p) => p.id === participantId);

        if (participant) {
            modalName.textContent = participant.name;
            modalDetails.innerHTML = "";

            const daysToDisplay = participant.days.filter(day => day.day >= 1 && day.day <= 6);

            daysToDisplay.forEach((day, dayIndex) => {
                const dayContainer = document.createElement("div");
                dayContainer.classList.add("day");
                dayContainer.style.setProperty('--index', dayIndex);

                const dayHeader = document.createElement("h3");
                dayHeader.textContent = `Hari ${day.day}`;
                
                dayHeader.addEventListener("click", () => {
                    const wasActive = dayContainer.classList.contains("active");
                    
                    document.querySelectorAll(".day").forEach(d => {
                        d.classList.remove("active");
                    });
                    
                    if (!wasActive) {
                        dayContainer.classList.add("active");
                    }
                });

                const sessionsContainer = document.createElement("div");
                sessionsContainer.classList.add("session-container");

                const sortedSessions = [...day.sessions].sort((a, b) => a.session - b.session);

                sortedSessions.forEach((session, sessionIndex) => {
                    const sessionDiv = document.createElement("div");
                    sessionDiv.classList.add("session-details");
                    sessionDiv.style.animation = `slideDown 0.3s forwards`;
                    sessionDiv.style.animationDelay = `${sessionIndex * 0.1}s`;
                    sessionDiv.style.opacity = "0";

                    const sessionHeader = document.createElement("h4");
                    sessionHeader.textContent = `Sesi ${session.session}`;
                    sessionDiv.appendChild(sessionHeader);

                    const totalPoints = Object.values(session.points).reduce((sum, val) => sum + val, 0);
                    const totalPointsElement = document.createElement("p");
                    totalPointsElement.innerHTML = `<strong>Total Poin:</strong> <span class="point-value">${totalPoints}</span>`;
                    totalPointsElement.style.fontWeight = "bold";
                    totalPointsElement.style.color = "#e6b800";
                    sessionDiv.appendChild(totalPointsElement);

                    const sortedPoints = Object.entries(session.points)
                        .sort((a, b) => b[1] - a[1]);

                    sortedPoints.forEach(([key, value]) => {
                        const pointDetail = document.createElement("p");
                        pointDetail.innerHTML = `<span>${formatPointName(key)}:</span> <span class="point-value">${value} poin</span>`;
                        sessionDiv.appendChild(pointDetail);
                    });

                    sessionsContainer.appendChild(sessionDiv);
                });

                dayContainer.appendChild(dayHeader);
                dayContainer.appendChild(sessionsContainer);
                modalDetails.appendChild(dayContainer);
            });

            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add("active");
            }, 10);
        }
    }

    function closeModal() {
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeModal();
        }
    });

    updateLeaderboard();

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setInterval(() => {
            participants.forEach(participant => {
                if (participant.days.length > 0 && participant.days[0].sessions.length > 0) {
                    const randomPoints = Math.floor(Math.random() * 10);
                    const pointKeys = Object.keys(participant.days[0].sessions[0].points);
                    if (pointKeys.length > 0) {
                        const randomKey = pointKeys[Math.floor(Math.random() * pointKeys.length)];
                        participant.days[0].sessions[0].points[randomKey] += randomPoints;
                    }
                }
            });
            updateLeaderboard();
        }, 5000);
    }
});
