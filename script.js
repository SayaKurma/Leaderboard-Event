const participants = [
    {
        id: 1,
        name: "Luki",
        days: generateDays(6),
    },
    {
        id: 2,
        name: "Gon",
        days: generateDays(6),
    },
    {
        id: 3,
        name: "Viol",
        days: generateDays(6),
    },
    {
        id: 4,
        name: "Cinn",
        days: generateDays(6),
    },
    {
        id: 5,
        name: "FiNe",
        days: generateDays(6),
    },
    {
        id: 6,
        name: "Ao",
        days: generateDays(6),
    },
    {
        id: 7,
        name: "Anna",
        days: generateDays(6),
    },
    {
        id: 8,
        name: "Al",
        days: generateDays(6),
    },
    {
        id: 9,
        name: "Alex",
        days: generateDays(6),
    },
    {
        id: 10,
        name: "Kc",
        days: generateDays(6),
    },
];

function generateDays(totalDays) {
    const days = [];
    for (let day = 1; day <= totalDays; day++) {
        const sessions = [];
        for (let session = 1; session <= 10; session++) {
            sessions.push({
                session: session,
                points: {
                    menangSebagaiImpostor: Math.floor(Math.random() * 10),
                    membunuhCrewmate: Math.floor(Math.random() * 10),
                    misiTerselesaikan: Math.floor(Math.random() * 10),
                    mengidentifikasiImpostor: Math.floor(Math.random() * 10),
                    membunuhImpostor: Math.floor(Math.random() * 10),
                },
            });
        }
        days.push({ day: day, sessions: sessions });
    }
    return days;
}

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