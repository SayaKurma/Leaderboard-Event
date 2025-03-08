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
                            menangSebagaiImpostor: 5,
                            membunuhCrewmate: 3,
                            misiTerselesaikan: 7,
                            mengidentifikasiImpostor: 2,
                            membunuhImpostor: 4,
                        },
                    },
                    {
                        session: 2,
                        points: {
                            menangSebagaiImpostor: 8,
                            membunuhCrewmate: 1,
                            misiTerselesaikan: 9,
                            mengidentifikasiImpostor: 3,
                            membunuhImpostor: 0,
                        },
                    },
                    {
                        session: 3,
                        points: {
                            menangSebagaiImpostor: 6,
                            membunuhCrewmate: 4,
                            misiTerselesaikan: 8,
                            mengidentifikasiImpostor: 1,
                            membunuhImpostor: 5,
                        },
                    },
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
                            menangSebagaiImpostor: 3,
                            membunuhCrewmate: 4,
                            misiTerselesaikan: 7,
                            mengidentifikasiImpostor: 2,
                            membunuhImpostor: 3,
                        },
                    },
                ],
            },
        ],
    },
];

const modal = document.getElementById("participant-modal");
const modalName = document.getElementById("modal-name");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".participant-name").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const participantId = parseInt(link.getAttribute("data-id"));
        const participant = participants.find((p) => p.id === participantId);

        if (participant) {
            modalName.textContent = participant.name;
            modalDetails.innerHTML = "";

            participant.days.forEach((day) => {
                const dayHeader = document.createElement("h3");
                dayHeader.textContent = Hari ${day.day};
                modalDetails.appendChild(dayHeader);

                day.sessions.forEach((session) => {
                    const sessionDiv = document.createElement("div");
                    sessionDiv.classList.add("session-details");

                    const sessionHeader = document.createElement("h3");
                    sessionHeader.textContent = Sesi ${session.session};
                    sessionDiv.appendChild(sessionHeader);

                    for (const [key, value] of Object.entries(session.points)) {
                        const pointDetail = document.createElement("p");
                        pointDetail.textContent = ${key}: ${value} poin;
                        sessionDiv.appendChild(pointDetail);
                    }

                    modalDetails.appendChild(sessionDiv);
                });
            });

            modal.style.display = "flex";
        }
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
