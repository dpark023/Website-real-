function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function openTemplate(type) {
    showPage("template-preview");

    const logs = {
        diabetes: [
            { title: "Glucose Log", example: "Time, value, context (e.g., 145 mg/dL fasting)" },
            { title: "Insulin Dose Tracking", example: "Basal/bolus, units, timing, relation to meals" },
            { title: "Carb Intake", example: "45g breakfast; 60g dinner" },
            { title: "High/Low Event Notes", example: "Symptoms, response, follow-up reading" }
        ],
        alzheimers: [
            { title: "Behavior Notes", example: "Agitation at 2 PM, redirected" },
            { title: "Prompting Record", example: "Memory exercise attempted" },
            { title: "Safety Tracking", example: "Exit attempt near hallway — blocked" }
        ],
        heart: [
            { title: "Blood Pressure", example: "132/84 — 9:00 AM" },
            { title: "Weight Log", example: "167 lbs — stable" },
            { title: "Symptoms", example: "Fatigue mid-day" }
        ],
        cancer: [
            { title: "Chemo Notes", example: "Cycle 3 tolerated" },
            { title: "Side Effects", example: "Fatigue 7/10" },
            { title: "Pain Notes", example: "2/10, Tylenol effective" }
        ],
        arthritis: [
            { title: "Pain Tracking", example: "Pain scale 6/10 — morning stiffness" },
            { title: "Mobility & Range Notes", example: "Walking slower, reduced grip strength" },
            { title: "Medication Record", example: "NSAID dose — AM" },
            { title: "Heat/Exercise Response", example: "Warm compress helped; tolerated light stretch" }
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
