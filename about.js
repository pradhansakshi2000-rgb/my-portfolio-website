// ============================================================
// ABOUT.JS
// ============================================================


// ============================================================
// ABOUT ME DATA
// ============================================================

// About Me की information आगे से यहीं change करें.
// ============================================================

const aboutMeData = {

    intro:
        "Currently, I am pursuing my B.Tech in Artificial Intelligence and Data Science, and I am actively developing my skills in Artificial Intelligence and Data Analytics.",

    name: "Shivanshu Pradhan",

    country: "India",

    industry: "AI & Data Science $ it",

    experience: "Fresher",

    address: "Arjungang Lucknow U.P 226002",

};


// ============================================================
// EXPERIENCE DATA
// ============================================================

const experienceList = [

    {
        id: 1,
        year: "2025 - Present",
        title: "Data Analytics",
        company: "Mindstay Technology",
        details:
            "Developing practical knowledge of Data Analytics through hands-on learning and projects. Working with Python, SQL, Excel, Pandas, NumPy, and data visualization to understand, clean, analyze, and present data."
    },

    {
        id: 2,
        year: "2025 - Present",
        title: "AI & Machine Learning",
        company: "Self-Learning / Personal Projects",
        details:
            "Building knowledge in Artificial Intelligence and Machine Learning through self-learning and practical projects. Exploring Python, Machine Learning algorithms, data preprocessing, model development, and AI-based solutions."
    },

    {
        id: 3,
        year: "2024 - Present",
        title: "AI & Data Analytics Projects",
        company: "Personal Projects",
        details:
            "Working on practical projects related to AI, Machine Learning, and Data Analytics to improve problem-solving and technical skills. Focusing on real-world datasets and data-driven solutions."
    }

];


// ============================================================
// EDUCATION DATA
// ============================================================

const educationList = [

    {
        id: 1,
        year: "2023-present",
        title: "B.Tech in AI & Data Science",
        company: "School of Management Science, Lucknow",
        details:
            "Currently pursuing B.Tech in Artificial Intelligence and Data Science. Developing knowledge in Artificial Intelligence, Machine Learning, Data Analytics, Python, SQL, and other technologies."
    },

    {
        id: 2,
        year: "2021-2022",
        title: "Intermediate / 12th",
        company: "Sri vishwanath shastri Inter Collage prem ka pura Bauri Ghazipur",
        details:
            "Completed Intermediate education and developed a foundation in mathematics, problem solving, and computer-related concepts."
    },

    {
        id: 3,
        year: "2019-2020",
        title: "High School / 10th",
        company: "Adarsh kanya high school Sultanpur ghazipur",
        details:
            "Completed High School education and developed a strong academic foundation and basic understanding of logical and analytical concepts."
    }

];


// ============================================================
// SKILLS DATA
// ============================================================

// आपकी images सीधे portfolio folder में हैं.
// इसलिए केवल filename लिखा गया है.
// ============================================================

const skillsList = [

    {
        id: 1,
        icon: "s1.png"
    },

    {
        id: 2,
        icon: "s2.png"
    },

    {
        id: 3,
        icon: "s3.png"
    },

    {
        id: 4,
        icon: "s4.png"
    },

    {
        id: 5,
        icon: "s5.png"
    },
    

     {
        id: 6,
        icon: "htlm.png"
    },

    
     {
        id: 7,
        icon: "css.png"
    },

    
     {
        id: 8,
        icon: "js.png"
    },

     {
        id: 9,
        icon: "power.png"
    }


 

];


// ============================================================
// CREATE EXPERIENCE
// ============================================================

function createExperience() {

    const experience =
        document.getElementById("experience");


    if (!experience) {
        return;
    }


    let container =
        experience.querySelector(".experience-list");


    if (!container) {

        container =
            document.createElement("div");

        container.className =
            "experience-list";

        experience.appendChild(container);
    }


    const content =
        experienceList.map((item) => {

            return `
                <div class="experience-box">

                    <h4>
                        ${item.year}
                    </h4>

                    <h3>
                        ${item.title}
                    </h3>

                    <div class="company-name">

                        <span></span>

                        <p>
                            ${item.company}
                        </p>

                    </div>

                    <p>
                        ${item.details}
                    </p>

                </div>
            `;

        }).join("");


    container.innerHTML = content;
}


// ============================================================
// CREATE EDUCATION
// ============================================================

function createEducation() {

    const education =
        document.getElementById("education");


    if (!education) {
        return;
    }


    let container =
        education.querySelector(".education-list");


    if (!container) {

        container =
            document.createElement("div");

        container.className =
            "education-list";

        education.appendChild(container);
    }


    const content =
        educationList.map((item) => {

            return `
                <div class="education-box">

                    <h4>
                        ${item.year}
                    </h4>

                    <h3>
                        ${item.title}
                    </h3>

                    <div class="company-name">

                        <span></span>

                        <p>
                            ${item.company}
                        </p>

                    </div>

                    <p>
                        ${item.details}
                    </p>

                </div>
            `;

        }).join("");


    container.innerHTML = content;
}


// ============================================================
// CREATE SKILLS
// ============================================================

// हर image के चारों तरफ .skills-box रखा गया है.
// ============================================================

function createSkills() {

    const skills =
        document.getElementById("skills");


    if (!skills) {
        return;
    }


    let container =
        skills.querySelector(".skills-list");


    if (!container) {

        container =
            document.createElement("div");

        container.className =
            "skills-list";

        skills.appendChild(container);
    }


    const content =
        skillsList.map((item) => {

            return `
                <div class="skills-box">

                    <img
                        src="${item.icon}"
                        alt="Skill Icon"
                    >

                </div>
            `;

        }).join("");


    container.innerHTML = content;
}


// ============================================================
// CREATE ABOUT ME
// ============================================================

// About Me का पूरा content यहीं बनाया जा रहा है.
// Heading + Intro + Name + Country + Industry
// + Experience + Address
// ============================================================

function createAboutMe() {

    const aboutMe =
        document.getElementById("about-me");


    if (!aboutMe) {
        return;
    }


    const content = `

        <div class="about-me-content">

            <!-- ABOUT ME HEADING -->
            <h2>
                About <span>Me</span>
            </h2>


            <!-- ABOUT ME INTRO -->
            <p class="about-intro">
                ${aboutMeData.intro}
            </p>


            <!-- ABOUT ME INFORMATION -->
            <div class="about-me-box">

                <div>
                    <span>Name:</span>
                    <p>
                        ${aboutMeData.name}
                    </p>
                </div>


                <div>
                    <span>Country:</span>
                    <p>
                        ${aboutMeData.country}
                    </p>
                </div>


                <div>
                    <span>Industry:</span>
                    <p>
                        ${aboutMeData.industry}
                    </p>
                </div>


                <div>
                    <span>Experience:</span>
                    <p>
                        ${aboutMeData.experience}
                    </p>
                </div>


                <div>
                    <span>Address:</span>
                    <p>
                        ${aboutMeData.address}
                    </p>
                </div>

            </div>

        </div>

    `;


    aboutMe.innerHTML = content;
}


// ============================================================
// SHOW ABOUT TAB
// ============================================================

function showAboutTab(activeTab) {

    const tabs =
        document.querySelectorAll(
            "#about .sidebar .tabs .tab"
        );


    const contents =
        document.querySelectorAll(
            "#about .tab-content"
        );


    // ========================================================
    // REMOVE ACTIVE FROM ALL TABS
    // ========================================================

    tabs.forEach((tab) => {

        tab.classList.remove("active");

    });


    // ========================================================
    // ADD ACTIVE TO SELECTED TAB
    // ========================================================

    tabs.forEach((tab) => {

        if (tab.dataset.section === activeTab) {

            tab.classList.add("active");

        }

    });


    // ========================================================
    // HIDE ALL CONTENT
    // ========================================================

    contents.forEach((content) => {

        content.classList.remove("active");

    });


    // ========================================================
    // EXPERIENCE
    // ========================================================

    if (activeTab === "experience") {

        const experience =
            document.getElementById("experience");


        if (experience) {

            experience.classList.add("active");

            createExperience();

        }

    }


    // ========================================================
    // EDUCATION
    // ========================================================

    else if (activeTab === "education") {

        const education =
            document.getElementById("education");


        if (education) {

            education.classList.add("active");

            createEducation();

        }

    }


    // ========================================================
    // SKILLS
    // ========================================================

    else if (activeTab === "skills") {

        const skills =
            document.getElementById("skills");


        if (skills) {

            skills.classList.add("active");

            createSkills();

        }

    }


    // ========================================================
    // ABOUT ME
    // ========================================================

    else if (activeTab === "about-me") {

        const aboutMe =
            document.getElementById("about-me");


        if (aboutMe) {

            aboutMe.classList.add("active");

            createAboutMe();

        }

    }

}


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        // ----------------------------------------------------
        // CREATE EXPERIENCE
        // ----------------------------------------------------

        createExperience();


        // ----------------------------------------------------
        // CREATE ABOUT ME
        // ----------------------------------------------------

        createAboutMe();


        // ----------------------------------------------------
        // GET ABOUT TABS
        // ----------------------------------------------------

        const tabs =
            document.querySelectorAll(
                "#about .sidebar .tabs .tab"
            );


        // ----------------------------------------------------
        // TAB CLICK
        // ----------------------------------------------------

        tabs.forEach((tab) => {

            tab.addEventListener(
                "click",
                () => {

                    const activeTab =
                        tab.dataset.section;


                    showAboutTab(activeTab);

                }
            );

        });


        // ----------------------------------------------------
        // DEFAULT TAB
        // ----------------------------------------------------

        showAboutTab("experience");

    }
);
