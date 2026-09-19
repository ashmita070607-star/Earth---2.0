/* =========================================
   EARTH 2.0
   PLANET SIMULATOR
========================================= */


/* GET ELEMENTS */

const planetName =
    document.getElementById("planetName");

const size =
    document.getElementById("size");

const distance =
    document.getElementById("distance");

const atmosphere =
    document.getElementById("atmosphere");

const water =
    document.getElementById("water");

const temperature =
    document.getElementById("temperature");

const gravity =
    document.getElementById("gravity");


/* DISPLAY ELEMENTS */

const sizeValue =
    document.getElementById("sizeValue");

const distanceValue =
    document.getElementById("distanceValue");

const waterValue =
    document.getElementById("waterValue");

const temperatureValue =
    document.getElementById("temperatureValue");

const gravityValue =
    document.getElementById("gravityValue");

const displayName =
    document.getElementById("displayName");

const planet =
    document.getElementById("planet");

const generateBtn =
    document.getElementById("generateBtn");


/* RESULT ELEMENTS */

const result =
    document.getElementById("result");

const score =
    document.getElementById("score");

const barFill =
    document.getElementById("barFill");

const tempResult =
    document.getElementById("tempResult");

const waterResult =
    document.getElementById("waterResult");

const atmosphereResult =
    document.getElementById(
        "atmosphereResult"
    );

const gravityResult =
    document.getElementById(
        "gravityResult"
    );

const verdict =
    document.getElementById(
        "verdict"
    );


/* =========================================
   LIVE VALUE UPDATES
========================================= */


/* SIZE */

size.addEventListener(
    "input",
    function () {

        sizeValue.textContent =
            Number(size.value).toFixed(1)
            + " Earth";

        updatePlanetSize();
    }
);


/* DISTANCE */

distance.addEventListener(
    "input",
    function () {

        distanceValue.textContent =
            Number(distance.value).toFixed(1)
            + " AU";
    }
);


/* WATER */

water.addEventListener(
    "input",
    function () {

        waterValue.textContent =
            water.value + "%";

        updatePlanetWater();
    }
);


/* TEMPERATURE */

temperature.addEventListener(
    "input",
    function () {

        temperatureValue.textContent =
            temperature.value + "°C";
    }
);


/* GRAVITY */

gravity.addEventListener(
    "input",
    function () {

        gravityValue.textContent =
            Number(gravity.value).toFixed(1)
            + " G";
    }
);


/* PLANET NAME */

planetName.addEventListener(
    "input",
    function () {

        if (
            planetName.value.trim() !== ""
        ) {

            displayName.textContent =
                planetName.value;
        }

    }
);


/* =========================================
   PLANET VISUAL CHANGES
========================================= */


function updatePlanetSize() {

    const scale =
        Number(size.value);

    const newSize =
        180 + (scale * 60);

    planet.style.width =
        newSize + "px";

    planet.style.height =
        newSize + "px";
}


function updatePlanetWater() {

    const waterAmount =
        Number(water.value);

    /*
        More water = bluer planet
        Less water = greener/browner planet
    */

    if (waterAmount >= 70) {

        planet.style.background =
            `
            radial-gradient(
                circle at 30% 30%,
                #64e0ff,
                #1469a5 40%,
                #073d68 75%,
                #021b31
            )
            `;

    }

    else if (waterAmount >= 40) {

        planet.style.background =
            `
            radial-gradient(
                circle at 30% 30%,
                #7bd6b0,
                #267e7c 40%,
                #154d50 75%,
                #071f2d
            )
            `;

    }

    else {

        planet.style.background =
            `
            radial-gradient(
                circle at 30% 30%,
                #c99a62,
                #76502e 40%,
                #392716 75%,
                #160f09
            )
            `;
    }
}


/* =========================================
   HABITABILITY CALCULATION
========================================= */


function calculateHabitability() {

    let totalScore = 0;


    /* -------------------------
       TEMPERATURE
    ------------------------- */

    const temp =
        Number(temperature.value);

    let temperatureScore;


    /*
        Ideal range:
        approximately 5°C - 25°C
    */

    if (
        temp >= 5 &&
        temp <= 25
    ) {

        temperatureScore = 25;

    }

    else if (
        temp >= -10 &&
        temp < 5
    ) {

        temperatureScore = 18;

    }

    else if (
        temp > 25 &&
        temp <= 40
    ) {

        temperatureScore = 18;

    }

    else if (
        temp >= -30 &&
        temp < -10
    ) {

        temperatureScore = 8;

    }

    else if (
        temp > 40 &&
        temp <= 60
    ) {

        temperatureScore = 8;

    }

    else {

        temperatureScore = 2;
    }


    totalScore +=
        temperatureScore;


    /* -------------------------
       WATER
    ------------------------- */

    const waterAmount =
        Number(water.value);

    let waterScore;


    /*
        Ideal:
        50% - 80%
    */

    if (
        waterAmount >= 50 &&
        waterAmount <= 80
    ) {

        waterScore = 25;

    }

    else if (
        waterAmount >= 30 &&
        waterAmount < 50
    ) {

        waterScore = 18;

    }

    else if (
        waterAmount > 80 &&
        waterAmount <= 90
    ) {

        waterScore = 18;

    }

    else {

        waterScore = 8;
    }


    totalScore +=
        waterScore;


    /* -------------------------
       ATMOSPHERE
    ------------------------- */

    const atmosphereType =
        atmosphere.value;

    let atmosphereScore;


    switch (
        atmosphereType
    ) {

        case "earth":

            atmosphereScore = 25;

            break;


        case "thin":

            atmosphereScore = 15;

            break;


        case "thick":

            atmosphereScore = 10;

            break;


        case "toxic":

            atmosphereScore = 0;

            break;
    }


    totalScore +=
        atmosphereScore;


    /* -------------------------
       GRAVITY
    ------------------------- */

    const gravityAmount =
        Number(gravity.value);

    let gravityScore;


    /*
        Ideal gravity:
        0.8G - 1.2G
    */

    if (
        gravityAmount >= 0.8 &&
        gravityAmount <= 1.2
    ) {

        gravityScore = 25;

    }

    else if (
        gravityAmount >= 0.6 &&
        gravityAmount < 0.8
    ) {

        gravityScore = 18;

    }

    else if (
        gravityAmount > 1.2 &&
        gravityAmount <= 1.4
    ) {

        gravityScore = 18;

    }

    else {

        gravityScore = 8;
    }


    totalScore +=
        gravityScore;


    /*
        Maximum possible score:
        100
    */

    return Math.round(
        totalScore
    );
}


/* =========================================
   GENERATE PLANET
========================================= */

generateBtn.addEventListener(
    "click",
    function () {

        /* Update name */

        if (
            planetName.value.trim() === ""
        ) {

            displayName.textContent =
                "Unnamed World";

        }

        else {

            displayName.textContent =
                planetName.value;
        }


        /* Calculate */

        const finalScore =
            calculateHabitability();


        /* Display score */

        score.textContent =
            finalScore + "%";


        /* Progress bar */

        setTimeout(
            function () {

                barFill.style.width =
                    finalScore + "%";

            },
            100
        );


        /* Display statistics */

        tempResult.textContent =
            temperature.value + "°C";

        waterResult.textContent =
            water.value + "%";

        gravityResult.textContent =
            Number(
                gravity.value
            ).toFixed(1) + " G";


        /* Atmosphere text */

        let atmosphereText;

        switch (
            atmosphere.value
        ) {

            case "earth":

                atmosphereText =
                    "Earth-like";

                break;

            case "thin":

                atmosphereText =
                    "Thin";

                break;

            case "thick":

                atmosphereText =
                    "Thick";

                break;

            case "toxic":

                atmosphereText =
                    "Toxic";

                break;
        }


        atmosphereResult.textContent =
            atmosphereText;


        /* =================================
           VERDICT
        ================================= */

        if (
            finalScore >= 85
        ) {

            verdict.textContent =
                "🌱 Highly suitable for human life. This world has conditions broadly similar to those needed for habitability.";

        }

        else if (
            finalScore >= 65
        ) {

            verdict.textContent =
                "🛰️ Potentially habitable, but humans would require significant adaptation or technology.";

        }

        else if (
            finalScore >= 40
        ) {

            verdict.textContent =
                "⚠️ Harsh environment. Long-term human survival would be difficult.";

        }

        else {

            verdict.textContent =
                "☠️ Extremely hostile environment. Humans could not survive here without substantial life-support systems.";

        }


        /* Show result */

        result.classList.add(
            "show"
        );


        /* Scroll to result */

        result.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   ATMOSPHERE VISUAL EFFECT
========================================= */

atmosphere.addEventListener(
    "change",
    function () {

        if (
            atmosphere.value === "toxic"
        ) {

            planet.style.boxShadow =
                `
                inset -35px -25px 50px
                rgba(0,0,0,0.6),

                0 0 70px
                rgba(180,80,255,0.65)
                `;

        }

        else if (
            atmosphere.value === "thick"
        ) {

            planet.style.boxShadow =
                `
                inset -35px -25px 50px
                rgba(0,0,0,0.6),

                0 0 70px
                rgba(100,200,255,0.65)
                `;

        }

        else {

            planet.style.boxShadow =
                `
                inset -35px -25px 50px
                rgba(0,0,0,0.6),

                inset 20px 10px 40px
                rgba(255,255,255,0.15),

                0 0 50px
                rgba(60,180,255,0.35)
                `;
        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

updatePlanetSize();
updatePlanetWater();