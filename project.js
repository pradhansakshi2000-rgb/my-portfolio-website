// ==========================================
// PROJECT DATA
// ==========================================

const projectList = [

    {
        number: "01",
        title: "Data Analytics Project",

        description:
            "A data analytics project focused on analyzing data, identifying useful patterns, and generating meaningful insights.",

        technologies: [
            "SQL",
            "Excel",
            "Python",
            "Pandas",
            "NumPy",
            "Power BI"
        ],

        image: "project.png",

        liveLink: "#",
        githubLink: "https://github.com/pradhansakshi2000-rgb"
    },


    {
        number: "02",
        title: "Machine Learning Project",

        description:
            "A machine learning project focused on data preprocessing, model building, prediction, and extracting meaningful results from data.",

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Machine Learning"
        ],

        image: "machine.png",

        liveLink: "#",
        githubLink: "https://github.com/pradhansakshi2000-rgb"
    },


   
    
      
    

];


// ==========================================
// WAIT FOR HTML TO LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {


    // ==========================================
    // HTML ELEMENTS
    // ==========================================

    const projectNumber =
        document.querySelector("#project .project-info h3");

    const projectTitle =
        document.querySelector("#project .project-info h4");

    const projectDescription =
        document.querySelector("#project .project-info p");

    const projectTech =
        document.querySelector("#project .tech-stack");

    const projectImage =
        document.querySelector("#project .carousel img");

    const liveLink =
        document.querySelector("#project .Links a:first-child");

    const githubLink =
        document.querySelector("#project .Links a:last-child");

    const previousButton =
        document.querySelector("#project .arrows a:first-child");

    const nextButton =
        document.querySelector("#project .arrows a:last-child");


    // ==========================================
    // CHECK HTML ELEMENTS
    // ==========================================

    if (
        !projectNumber ||
        !projectTitle ||
        !projectDescription ||
        !projectTech ||
        !projectImage ||
        !liveLink ||
        !githubLink ||
        !previousButton ||
        !nextButton
    ) {
        console.error("Project section HTML element not found.");
        return;
    }


    // ==========================================
    // CURRENT PROJECT
    // ==========================================

    let currentProject = 0;


    // ==========================================
    // SHOW PROJECT
    // ==========================================

    function showProject(index) {

        const project = projectList[index];

        if (!project) return;


        // Number
        projectNumber.textContent = project.number;


        // Title
        projectTitle.textContent = project.title;


        // Description
        projectDescription.textContent = project.description;


        // Image
        projectImage.src = project.image;
        projectImage.alt = project.title;


        // Technologies
        projectTech.innerHTML = "";

        project.technologies.forEach(function (technology) {

            const span = document.createElement("span");

            span.textContent = technology;

            projectTech.appendChild(span);

        });


        // Links
        liveLink.href = project.liveLink;

        githubLink.href = project.githubLink;

    }


    // ==========================================
    // NEXT PROJECT
    // RIGHT BUTTON
    // ==========================================

    nextButton.addEventListener("click", function (event) {

        event.preventDefault();

        currentProject++;

        if (currentProject >= projectList.length) {
            currentProject = 0;
        }

        showProject(currentProject);

    });


    // ==========================================
    // PREVIOUS PROJECT
    // LEFT BUTTON
    // ==========================================

    previousButton.addEventListener("click", function (event) {

        event.preventDefault();

        currentProject--;

        if (currentProject < 0) {
            currentProject = projectList.length - 1;
        }

        showProject(currentProject);

    });


    // ==========================================
    // SHOW FIRST PROJECT
    // ==========================================

    showProject(currentProject);

});
