const toggle = document.getElementById("menu-toggle");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
  });
}


const words = [
  "AI Developer",
  "Data Analyst",
  "Machine Learning Enthusiast",
  "Python Developer",
  "Data Science Enthusiast",
];


const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;


const type = () => {

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      isDeleting = true;

      setTimeout(type, nextWordDelay);

    } else {

      setTimeout(type, typingDelay);

    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      wordIndex =
        (wordIndex + 1) % words.length;

      setTimeout(type, 500);

    } else {

      setTimeout(type, erasingDelay);

    }
  }
};


document.addEventListener("DOMContentLoaded", () => {

  if (words?.length && typingText) {
    type();
  }

});


const navlinks =
  document.querySelectorAll(".navlink");

const tabs =
  document.querySelectorAll(".content");


navlinks.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();


    navlinks.forEach((l) => {
    if (l == link) {
        l.classList.add("active");
    } else {
        l.classList.remove("active");
    }
});

      
    const tabName = link.dataset.tab;


    tabs.forEach((tab) => {

      if (tab.id === tabName) {

        tab.classList.add("active");

      } else {

        tab.classList.remove("active");

      }

    });

   
    
    if (tabName === "services") {
  const serviceList = [
    {
      id: 1,
      icon: "ph-code",
      text: "Python Development",
      para: "I use Python to build data-driven applications, automation scripts, and software solutions with a focus on practical problem solving.",
    }, 

    {
    id: 2,
    icon: "ph-chart-bar",
    text: "Data Analytics",
    para: "I analyze data using Python, Excel, SQL, and other tools to identify patterns, generate insights, and support data-driven decision making.",
},

    {
      id: 3,
      icon: "ph-chart-line",
      text: "Data Visualization",
      para: "I create clear and interactive dashboards and visualizations to transform complex data into meaningful and easy-to-understand insights.",
    },

     {
      id: 4,
      icon: "ph-brain",
      text: "AI & Machine Learning ",
      para: "I develop AI and machine learning solutions to solve real-world problems using Python, NumPy, Pandas, SQL, Scikit-learn, and machine learning techniques for data-driven applications ",
     },

     {
      id: 5,
      icon: "ph-database",
      text: "SQL & Database Management ",
      para: "I work with SQL and databases to retrieve, clean, organize, and analyze data efficiently for business and analytical applications. ",
     },


     {
      id: 6,
      icon: "ph-robot",
      text: "AI Automation ",
      para: "I create automation solutions using Python and AI technologies to reduce repetitive tasks, improve workflows, and increase efficiency. ",
     },

  ];

  
  const services = document.
  getElementsByClassName
  ("services-list");

const innerContent = serviceList.
  map((l) => {
    return `
    <div class="box" key=${l?.id}>
                    <div class="head-icons">
                        <i class="ph ${l?.icon}"></i>


                        <span>
                            <i class="ph ph-arrow-down-right"></i>
                        </span>
                    </div>
                    <h3>${l?.text}</h3>

                    <span class="spacer"></span>
                    <p>
                   ${l?.para}
                    </p>
                </div>
    `;
  })
   . join("");


  Array.from(services).forEach
((ele) => {
  ele.innerHTML = innerContent;
  
})
    }

  
   // Mobile menu close
        if (toggle) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }

            
});

});
