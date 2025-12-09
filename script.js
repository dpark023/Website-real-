function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
    if (event && event.target && event.target.tagName === 'LI') {
        event.target.classList.add('active');
    }
}

/*
  TEMPLATE BLUEPRINT VALUES
*/

const templateBlueprints = {

    diabetes: {
        metrics: [
            "Target Glucose Range",
            "Recent A1C",
            "Weight Trend",
            "BP Reading"
        ],
        meds: [
            "Insulin Type / Basal & Bolus Doses",
            "Metformin timing",
            "Carb/insulin ratio"
        ],
        tracking: [
            "Carb Logging",
            "Hypo/Hyper Symptoms",
            "Foot Care Notes",
            "Hydration Log"
        ],
        reminders: [
            "Meal timing support",
            "Weekly foot inspection",
            "Endocrinology follow up"
        ]
    },

    alzheimers: {
        metrics: [
            "Orientation Score",
            "Sleep Disturbance",
            "Behavior Change Frequency"
        ],
        meds: [
            "Cognitive medication response logging",
            "Behavior stabilizer monitoring"
        ],
        tracking: [
            "Wandering/safety episodes",
            "Mood & behavior notes",
            "Stimulation activity log"
        ],
        reminders: [
            "Orientation prompts",
            "Routine reinforcement",
            "Fall risk monitoring"
        ]
    },

    heart: {
        metrics: [
            "Daily Weight Variance",
            "BP Trend",
            "Heart Rate"
        ],
        meds: [
            "BP medication schedule",
            "Diuretic timing and response",
            "Sodium/Fluid interaction"
        ],
        tracking: [
            "Fluid intake log",
            "Edema/shortness of breath notes"
        ],
        reminders: [
            "Weigh daily",
            "Track swelling/symptoms",
            "Report weight spikes"
        ]
    },

    cancer: {
        metrics: [
            "Pain Score",
            "Fatigue Severity",
            "Nausea Rating"
        ],
        meds: [
            "Pain med timing and relief log",
            "Antiemetic effect tracking"
        ],
        tracking: [
            "Treatment appointments",
            "Side effect records",
            "Meal tolerance"
        ],
        reminders: [
            "Hydration",
            "Pain reassessment",
            "Nutrition prompts"
        ]
    },

    arthritis: {
        metrics: [
            "Pain Level",
            "Mobility/Stiffness",
            "Flare Frequency"
        ],
        meds: [
            "Anti-inflammatory timing",
            "Breakthrough pain notes"
        ],
        tracking: [
            "Heat/ice response",
            "Activity tolerance"
        ],
        reminders: [
            "Movement breaks",
            "Stretch routine",
            "Joint protection"
        ]
    }
};


/*
grid
*/

function openTemplate(type) {

    showPage('template-preview');

    const t = templateBlueprints[type];

    document.getElementById("preview-fields").innerHTML = `
        <div class="profile-grid">

            <div class="panel patient-card">
                <strong> Main Profile </strong>
                <p class="editable">${type.charAt(0).toUpperCase()+ type.slice(1)} Care Template</p>
                <p style="font-size:12px; opacity:0.7;">(This is where your patient's basic infomration lie)</p>
            </div>

            <div class="panel patient-card">
                <strong>Key Metrics</strong>
                ${t.metrics.map(m => `<p class="editable">${m}</p>`).join("")}
            </div>

            <div class="panel patient-card">
                <strong>Medication Schedule</strong>
                ${t.meds.map(m => `<p class="editable">${m}</p>`).join("")}
            </div>

            <div class="panel patient-card">
                <strong>Tracking Areas</strong>
                ${t.tracking.map(m => `<p class="editable">${m}</p>`).join("")}
            </div>

            <div class="panel patient-card">
                <strong>Care Reminders</strong>
                ${t.reminders.map(m => `<p class="editable">${m}</p>`).join("")}
            </div>

            <div class="panel patient-card premium">
                <strong>Smart Assist Example (Premium)</strong>
                <p>⚡ Suggestions auto-adapt once a real patient is assigned.<br>
                Not medical advice.</p>
            </div>

        </div>
    `;
}
