function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function openTemplate(type) {
    showPage("template-preview");

    const logs = {
        diabetes: [
            { title: "Glucose Log", example: "Time, value, context (e.g., 7:10 AM — 145 mg/dL fasting)" },
            { title: "Insulin Dose Tracking", example: "Basal/Bolus, units, time, before/after meal" },
            { title: "Carb Intake", example: "Meal carb amount (e.g., 45g breakfast)" },
            { title: "High/Low Event Notes", example: "Symptoms, interventions, follow-up reading" }
        ],
        alzheimers: [
            { title: "Behavior Notes", example: "Engaged — 10:20 AM" },
            { title: "Prompting Record", example: "Memory exercise completed" },
            { title: "Safety Tracking", example: "Exit attempt redirected" }
        ],
        heart: [
            { title: "Blood Pressure", example: "132/84 — 9:00 AM" },
            { title: "Weight Log", example: "167 lbs — stable" },
            { title: "Symptoms", example: "Fatigue noted" }
        ],
        cancer: [
            { title: "Chemo Notes", example: "Cycle 3 tolerated" },
            { title: "Side Effects", example: "Fatigue 7/10" },
            { title: "Pain Notes", example: "2/10 relief w/ Tylenol" }
        ],
        pain: [
            { title: "Pain Scale", example: "6/10 — lower back" },
            { title: "Trigger Notes", example: "Walking aggravated" },
            { title: "Mobility", example: "Reduced range" }
        ]
    };

    const preview = document.getElementById("preview-fields");
    preview.innerHTML = "";

    (logs[type] || []).forEach(entry => {
        preview.innerHTML += `
            <div class="panel">
                <strong>${entry.title}</strong>
                <p>${entry.example}</p>
            </div>
        `;
    });

    preview.innerHTML += `
        <p style="font-size:13px;margin-top:10px;">
        Logs may be expanded or reordered in Custom Builder.
        </p>
    `;
}
